import React, { useState, useRef, useEffect } from "react";
import {
  Briefcase,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2,
  Sparkles,
  Search,
  BookOpen,
  ArrowRight,
  Code2,
} from "lucide-react";
import { IT_JOB_ROLES, JobRole } from "../data/jobRoles";

interface JobTargetSectionProps {
  targetJobTitle: string;
  onChangeJobTitle: (title: string) => void;
  jobDescription: string;
  onChangeJobDescription: (jd: string) => void;
  onRunAnalysis: () => void;
  isAnalyzing: boolean;
  canAnalyze: boolean;
  onOpenDirectory?: () => void;
}

const POPULAR_ROLES = [
  "Software Engineer / Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Cybersecurity Analyst",
  "Prompt Engineer",
];

export const JobTargetSection: React.FC<JobTargetSectionProps> = ({
  targetJobTitle,
  onChangeJobTitle,
  jobDescription,
  onChangeJobDescription,
  onRunAnalysis,
  isAnalyzing,
  canAnalyze,
  onOpenDirectory,
}) => {
  const [showJdAccordion, setShowJdAccordion] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find if current title matches one of the 90 roles
  const matchedRole = IT_JOB_ROLES.find(
    (r) => r.title.toLowerCase() === targetJobTitle.trim().toLowerCase()
  );

  // Suggestions for autocomplete
  const suggestions = IT_JOB_ROLES.filter((r) => {
    if (!targetJobTitle.trim()) return false;
    const q = targetJobTitle.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.keySkills.some((s) => s.toLowerCase().includes(q))
    );
  }).slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectRole = (role: JobRole, loadJD: boolean = true) => {
    onChangeJobTitle(role.title);
    if (loadJD) {
      onChangeJobDescription(role.sampleJobDescription);
    }
    setShowSuggestions(false);
  };

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-xl flex flex-col justify-between h-full backdrop-blur-md transition-all hover:border-slate-700/80">
      <div className="space-y-4">
        {/* Step Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Target Role & Job Description</h2>
              <p className="text-xs text-slate-400">Calibrates ATS keyword weighting & job match score</p>
            </div>
          </div>

          {onOpenDirectory && (
            <button
              id="browse-all-jobs-btn"
              type="button"
              onClick={onOpenDirectory}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center gap-1.5 shadow-sm"
              title="Open 90+ IT & Software Roles Library"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Browse 90+ Roles</span>
              <span className="sm:hidden">90+ Roles</span>
            </button>
          )}
        </div>

        {/* Target Job Title Input */}
        <div className="space-y-2 relative" ref={dropdownRef}>
          <div className="flex items-center justify-between">
            <label
              htmlFor="target-job-title-input"
              className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              Target Job Title
            </label>

            {matchedRole && (
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                Verified IT Role
              </span>
            )}
          </div>

          <div className="relative">
            <input
              id="target-job-title-input"
              type="text"
              value={targetJobTitle}
              onChange={(e) => {
                onChangeJobTitle(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="e.g. Software Engineer, Front-End Developer, DevOps Engineer..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm font-medium text-slate-100 placeholder-slate-600 outline-none transition-colors"
            />

            {targetJobTitle && (
              <button
                type="button"
                onClick={() => {
                  onChangeJobTitle("");
                  setShowSuggestions(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-1.5 z-30 max-h-60 overflow-y-auto divide-y divide-slate-800/50 backdrop-blur-xl">
              <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Matching Roles from 90+ IT Careers
              </div>
              {suggestions.map((role) => (
                <div
                  key={role.id}
                  className="p-2 hover:bg-slate-800 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                  onClick={() => handleSelectRole(role, true)}
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100 group-hover:text-indigo-300 flex items-center gap-1.5">
                      {role.title}
                      <span className="text-[10px] font-normal text-slate-400">({role.category})</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      Skills: {role.keySkills.join(", ")}
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded bg-indigo-600/30 group-hover:bg-indigo-600 text-indigo-200 group-hover:text-white shrink-0 font-medium transition-all">
                    Apply Role & JD
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Role Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mr-1">
              Popular:
            </span>
            {POPULAR_ROLES.slice(0, 4).map((roleName) => {
              const r = IT_JOB_ROLES.find((item) => item.title === roleName);
              const isSelected = targetJobTitle.toLowerCase() === roleName.toLowerCase();

              return (
                <button
                  key={roleName}
                  type="button"
                  onClick={() => {
                    if (r) handleSelectRole(r, true);
                    else onChangeJobTitle(roleName);
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                    isSelected
                      ? "bg-indigo-600/30 border-indigo-500 text-indigo-200 shadow-sm"
                      : "bg-slate-950/80 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  {roleName}
                </button>
              );
            })}
          </div>

          {/* Verified Role Information Card */}
          {matchedRole && (
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Target Role Overview ({matchedRole.category})
                </span>
                <button
                  type="button"
                  onClick={() => onChangeJobDescription(matchedRole.sampleJobDescription)}
                  className="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 underline"
                >
                  Load Official JD Template
                </button>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                {matchedRole.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {matchedRole.keySkills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-medium"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Job Description (Accordion / Input) */}
        <div className="border border-slate-800/90 rounded-xl bg-slate-950/50 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowJdAccordion(!showJdAccordion)}
            className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-200 hover:text-white transition-colors bg-slate-950/80"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Target Job Description (JD)</span>
              {jobDescription.trim().length > 30 ? (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  JD Attached ({jobDescription.split(/\s+/).length} words)
                </span>
              ) : (
                <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                  (Recommended for 1:1 Match %)
                </span>
              )}
            </div>
            {showJdAccordion ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showJdAccordion && (
            <div className="p-3.5 pt-0 border-t border-slate-800/60 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-slate-400 font-medium">
                  Paste the requirements or load an industry template:
                </p>
                {matchedRole && (
                  <button
                    type="button"
                    onClick={() => onChangeJobDescription(matchedRole.sampleJobDescription)}
                    className="text-[10px] font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Reset to {matchedRole.title} JD
                  </button>
                )}
              </div>
              <textarea
                id="target-jd-input"
                value={jobDescription}
                onChange={(e) => onChangeJobDescription(e.target.value)}
                placeholder="Paste the full job posting here..."
                className="w-full h-32 p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs font-mono text-slate-200 placeholder-slate-600 resize-y outline-none leading-relaxed"
              />
            </div>
          )}
        </div>
      </div>

      {/* Action CTA Scan Button */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <button
          id="run-ai-analysis-btn"
          type="button"
          disabled={!canAnalyze || isAnalyzing}
          onClick={onRunAnalysis}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all duration-200 ${
            canAnalyze && !isAnalyzing
              ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              : "bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-700/50"
          }`}
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Scanning Resume & Calculating ATS Score...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Run ATS Scan & Match Analysis</span>
            </>
          )}
        </button>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 7-Factor ATS Scoring
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Google XYZ Rewriter
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 90+ IT Roles Calibrated
          </span>
        </div>
      </div>
    </div>
  );
};
