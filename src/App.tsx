import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  LayoutDashboard,
  Tag,
  Target,
  Sparkles,
  FileCheck2,
  AlertCircle,
  Award,
  ArrowRight,
  TrendingUp,
  FileText,
  Layers,
  CheckCircle2,
  Loader2,
  Cpu,
  Search,
} from "lucide-react";
import { Header } from "./components/Header";
import { ResumeUploader } from "./components/ResumeUploader";
import { JobTargetSection } from "./components/JobTargetSection";
import { AtsScoreDashboard } from "./components/AtsScoreDashboard";
import { KeywordGapAnalysis } from "./components/KeywordGapAnalysis";
import { JobMatchCard } from "./components/JobMatchCard";
import { BulletOptimizer } from "./components/BulletOptimizer";
import { FullResumeOptimizer } from "./components/FullResumeOptimizer";
import { ScoreHistoryModal } from "./components/ScoreHistoryModal";
import { AtsGuideModal } from "./components/AtsGuideModal";
import { JobDirectoryModal } from "./components/JobDirectoryModal";

import {
  AnalysisResult,
  JobMatchResult,
  OptimizedResume,
  HistoryItem,
  SampleResume,
  ScanStage,
} from "./types";
import { SAMPLE_RESUMES } from "./data/sampleResumes";
import { IT_JOB_ROLES, JobRole } from "./data/jobRoles";

export default function App() {
  // Main Input State
  const defaultSample = SAMPLE_RESUMES[0];
  const [resumeText, setResumeText] = useState(defaultSample.content);
  const [targetJobTitle, setTargetJobTitle] = useState(defaultSample.role);
  const [jobDescription, setJobDescription] = useState(defaultSample.targetJobDescription);
  const [uploadedFileName, setUploadedFileName] = useState<string | undefined>("Alex_Johnson_Resume.pdf");

  // Active View Tab
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "keywords" | "jobmatch" | "bullets" | "fulloptimizer"
  >("dashboard");

  // Loading & Sequential Pipeline States
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStage, setScanStage] = useState<ScanStage>("idle");
  const [isOptimizingFull, setIsOptimizingFull] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Analysis & Optimization Results
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [jobMatchResult, setJobMatchResult] = useState<JobMatchResult | null>(null);
  const [optimizedResume, setOptimizedResume] = useState<OptimizedResume | null>(null);

  // Modals
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isJobDirectoryOpen, setIsJobDirectoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("resumeiq_history");
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to load history from localStorage", e);
    }
  }, []);

  // Save scan to history
  const saveToHistory = (analysis: AnalysisResult, jobMatch?: JobMatchResult) => {
    const newItem: HistoryItem = {
      id: "scan_" + Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      targetJobTitle: targetJobTitle || "Software Engineer",
      overallScore: analysis.overallScore,
      jobMatchScore: jobMatch?.matchScore,
      resumePreview: resumeText.slice(0, 120) + "...",
      analysis,
      jobMatch,
    };

    const updated = [newItem, ...history.slice(0, 19)];
    setHistory(updated);
    try {
      localStorage.setItem("resumeiq_history", JSON.stringify(updated));
    } catch (e) {
      console.warn("Failed to save history", e);
    }
  };

  // Run Sequential ATS Scan & Job Match Pipeline:
  // 1. Scan Resume (Structure, Hard Skills, Impact, Readability)
  // 2. Match with Job Description (Target Role, 1:1 Keyword Alignment, Seniority Fit)
  // 3. Calibrate & Finalize ATS Score
  const handleRunAnalysis = async () => {
    if (!resumeText.trim()) {
      setErrorMessage("Please upload or paste your resume text first.");
      return;
    }

    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      // -------------------------------------------------------------
      // STAGE 1: Scan Resume (Structure, Hard Skills, Action Verbs, Metrics)
      // -------------------------------------------------------------
      setScanStage("scanning_resume");

      const analysisRes = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          targetJobTitle,
          targetJobDescription: jobDescription,
        }),
      });

      if (!analysisRes.ok) {
        throw new Error("Failed to scan and analyze resume content.");
      }
      const rawAnalysisData: AnalysisResult = await analysisRes.json();

      // -------------------------------------------------------------
      // STAGE 2: Cross-Match with Job Description
      // -------------------------------------------------------------
      setScanStage("matching_jd");

      // Determine effective Job Description (either user provided or from matching role in 90+ IT library)
      let effectiveJd = jobDescription.trim();
      if (effectiveJd.length < 20) {
        const matchedRole = IT_JOB_ROLES.find(
          (r) => r.title.toLowerCase() === targetJobTitle.trim().toLowerCase()
        );
        if (matchedRole) {
          effectiveJd = matchedRole.sampleJobDescription;
        }
      }

      let matchData: JobMatchResult | null = null;
      if (effectiveJd.length >= 20) {
        const matchRes = await fetch("/api/match-job", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resumeText,
            jobDescription: effectiveJd,
            targetJobTitle,
          }),
        });

        if (matchRes.ok) {
          matchData = await matchRes.json();
        }
      }

      // -------------------------------------------------------------
      // STAGE 3: Calibrate & Finalize ATS Score & Category Breakdowns
      // -------------------------------------------------------------
      setScanStage("computing_score");

      const finalAnalysis = { ...rawAnalysisData };

      if (matchData) {
        // Calibrate keyword match category with the real JD match percentage
        finalAnalysis.categoryScores.keywordMatch = matchData.matchScore;

        // Composite ATS Score Calculation:
        // Keyword Match (35%) + Technical Taxonomy (20%) + Experience Impact (20%) + Formatting (15%) + Education (10%)
        const compositeScore = Math.round(
          matchData.matchScore * 0.35 +
          (finalAnalysis.categoryScores.technicalSkills || 75) * 0.20 +
          (finalAnalysis.categoryScores.experienceImpact || 70) * 0.20 +
          (finalAnalysis.categoryScores.formattingReadability || 80) * 0.15 +
          (finalAnalysis.categoryScores.educationCerts || 80) * 0.10
        );

        finalAnalysis.overallScore = Math.min(98, Math.max(30, compositeScore));
        finalAnalysis.scoreRating =
          finalAnalysis.overallScore >= 80
            ? "Strong ATS Match (Top 10%)"
            : finalAnalysis.overallScore >= 65
            ? "Competitive (Needs Minor Polish)"
            : "High Risk of ATS Rejection";
      }

      // Commit finalized results
      setAnalysisResult(finalAnalysis);
      setJobMatchResult(matchData);
      setScanStage("completed");

      // Save to History
      saveToHistory(finalAnalysis, matchData || undefined);

      // Trigger celebratory confetti if score >= 80
      if (finalAnalysis.overallScore >= 80) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err: any) {
      console.error("Analysis Pipeline error:", err);
      setErrorMessage(err.message || "An error occurred during resume scan and matching.");
      setScanStage("idle");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Generate full optimized resume rewrite
  const handleGenerateOptimization = async () => {
    setIsOptimizingFull(true);
    try {
      const res = await fetch("/api/optimize-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          targetJobTitle,
          targetJobDescription: jobDescription,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setOptimizedResume(data);
        setActiveTab("fulloptimizer");
      }
    } catch (e) {
      console.error("Optimization failed", e);
    } finally {
      setIsOptimizingFull(false);
    }
  };

  // Load a sample resume
  const handleSelectSample = (sample: SampleResume) => {
    setResumeText(sample.content);
    setTargetJobTitle(sample.role);
    setJobDescription(sample.targetJobDescription);
    setUploadedFileName(sample.role.replace(/\s+/g, "_") + "_Sample.pdf");
    setAnalysisResult(null);
    setJobMatchResult(null);
    setOptimizedResume(null);
  };

  // Select a role from the 90+ IT Roles library
  const handleSelectJobRole = (role: JobRole, loadJobDescription: boolean) => {
    setTargetJobTitle(role.title);
    if (loadJobDescription) {
      setJobDescription(role.sampleJobDescription);
    }
  };

  // Reset analysis
  const handleReset = () => {
    setAnalysisResult(null);
    setJobMatchResult(null);
    setOptimizedResume(null);
    setActiveTab("dashboard");
    setScanStage("idle");
  };

  // Initial scan on mount
  useEffect(() => {
    handleRunAnalysis();
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-[#090d16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentScore={analysisResult?.overallScore}
        onSelectSample={handleSelectSample}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenJobDirectory={() => setIsJobDirectoryOpen(true)}
        onReset={handleReset}
        hasAnalysis={!!analysisResult}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Error notification */}
        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="font-medium">{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-rose-400 hover:text-white text-xs font-bold cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Top Input Section: 2 Columns (Ingestion & Job Target) */}
        <section id="top-controls-bar" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <ResumeUploader
              resumeText={resumeText}
              onChangeResumeText={(txt) => {
                setResumeText(txt);
              }}
              fileName={uploadedFileName}
              onFileLoaded={(name) => {
                setUploadedFileName(name);
              }}
              onSelectSample={handleSelectSample}
              isAnalyzing={isAnalyzing}
              onScanReady={() => {
                // When fresh file is loaded, clear previous scores and trigger analysis
                setAnalysisResult(null);
                setJobMatchResult(null);
              }}
            />
          </div>

          <div className="lg:col-span-6">
            <JobTargetSection
              targetJobTitle={targetJobTitle}
              onChangeJobTitle={(title) => {
                setTargetJobTitle(title);
              }}
              jobDescription={jobDescription}
              onChangeJobDescription={(jd) => {
                setJobDescription(jd);
              }}
              onRunAnalysis={handleRunAnalysis}
              isAnalyzing={isAnalyzing}
              canAnalyze={resumeText.trim().length > 20}
              onOpenDirectory={() => setIsJobDirectoryOpen(true)}
            />
          </div>
        </section>

        {/* Live Multi-Stage Scan Pipeline Progress Indicator */}
        {isAnalyzing && (
          <section className="p-5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-2xl backdrop-blur-md animate-pulse">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5 animate-spin" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    Executing ATS Analysis Pipeline
                  </h3>
                  <p className="text-xs text-slate-400">
                    Step-by-step parsing, job description matching, and score calibration
                  </p>
                </div>
              </div>

              {/* 3 Steps Visual Progress Bar */}
              <div className="flex items-center gap-2 text-xs font-semibold">
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    scanStage === "scanning_resume"
                      ? "bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30"
                      : "bg-slate-950 text-emerald-400 border-slate-800"
                  }`}
                >
                  {scanStage === "scanning_resume" ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span>1. Scan Resume</span>
                </div>

                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    scanStage === "matching_jd"
                      ? "bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30"
                      : scanStage === "computing_score"
                      ? "bg-slate-950 text-emerald-400 border-slate-800"
                      : "bg-slate-950 text-slate-500 border-slate-800"
                  }`}
                >
                  {scanStage === "matching_jd" ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : scanStage === "computing_score" ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Target className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <span>2. Match JD</span>
                </div>

                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    scanStage === "computing_score"
                      ? "bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-600/30"
                      : "bg-slate-950 text-slate-500 border-slate-800"
                  }`}
                >
                  {scanStage === "computing_score" ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Award className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <span>3. Final ATS Score</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Navigation & Tab Views */}
        {analysisResult && (
          <section className="space-y-6 pt-2">
            {/* View Navigation Tabs Bar */}
            <div
              id="tabs-nav-bar"
              className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800/90 overflow-x-auto shadow-lg backdrop-blur-md"
            >
              <button
                id="view-tab-dashboard"
                type="button"
                onClick={() => setActiveTab("dashboard")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "dashboard"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>ATS Overview</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/70 font-mono font-bold">
                  {analysisResult.overallScore}/100
                </span>
              </button>

              <button
                id="view-tab-keywords"
                type="button"
                onClick={() => setActiveTab("keywords")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "keywords"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Keyword Gap</span>
                {analysisResult.keywords?.missingKeywords?.length > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono font-bold">
                    {analysisResult.keywords.missingKeywords.length}
                  </span>
                )}
              </button>

              <button
                id="view-tab-jobmatch"
                type="button"
                onClick={() => setActiveTab("jobmatch")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "jobmatch"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Target className="w-4 h-4" />
                <span>1:1 Job Match</span>
                {jobMatchResult && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                    {jobMatchResult.matchScore}%
                  </span>
                )}
              </button>

              <button
                id="view-tab-bullets"
                type="button"
                onClick={() => setActiveTab("bullets")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "bullets"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>XYZ Bullets</span>
              </button>

              <button
                id="view-tab-fulloptimizer"
                type="button"
                onClick={() => setActiveTab("fulloptimizer")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "fulloptimizer"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Optimized Resume</span>
                {optimizedResume && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                    Ready
                  </span>
                )}
              </button>
            </div>

            {/* Active Tab Content */}
            <div className="transition-all duration-200">
              {activeTab === "dashboard" && (
                <AtsScoreDashboard
                  analysis={analysisResult}
                  onNavigateToTab={(t) => setActiveTab(t as any)}
                  onOptimizeClick={handleGenerateOptimization}
                />
              )}

              {activeTab === "keywords" && (
                <KeywordGapAnalysis
                  strongKeywords={analysisResult.keywords?.strongKeywords || []}
                  weakKeywords={analysisResult.keywords?.weakKeywords || []}
                  missingKeywords={analysisResult.keywords?.missingKeywords || []}
                />
              )}

              {activeTab === "jobmatch" && (
                <JobMatchCard
                  jobMatch={jobMatchResult || undefined}
                  hasJobDescription={jobDescription.trim().length > 30}
                  onFocusJobDescription={() => {
                    const el = document.getElementById("target-jd-input");
                    el?.focus();
                  }}
                />
              )}

              {activeTab === "bullets" && (
                <BulletOptimizer
                  bulletCritiques={analysisResult.bulletCritiques}
                  targetJobTitle={targetJobTitle}
                />
              )}

              {activeTab === "fulloptimizer" && (
                <FullResumeOptimizer
                  optimizedResume={optimizedResume}
                  isOptimizing={isOptimizingFull}
                  onGenerateOptimization={handleGenerateOptimization}
                  targetJobTitle={targetJobTitle}
                />
              )}
            </div>
          </section>
        )}
      </main>

      {/* Modals */}
      <ScoreHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectHistoryItem={(item) => {
          setAnalysisResult(item.analysis);
          setJobMatchResult(item.jobMatch || null);
          setTargetJobTitle(item.targetJobTitle);
        }}
        onClearHistory={() => {
          setHistory([]);
          localStorage.removeItem("resumeiq_history");
        }}
      />

      <AtsGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <JobDirectoryModal
        isOpen={isJobDirectoryOpen}
        onClose={() => setIsJobDirectoryOpen(false)}
        onSelectRole={handleSelectJobRole}
        currentRoleTitle={targetJobTitle}
      />
    </div>
  );
}

