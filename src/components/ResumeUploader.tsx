import React, { useState, useRef, useMemo } from "react";
import {
  Upload,
  FileText,
  Check,
  AlertCircle,
  Sparkles,
  X,
  FileCode,
  Layers,
  FileType,
  Clock,
  BarChart2,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Code2,
  Calendar,
  Zap,
} from "lucide-react";
import { parseUploadedFile, getDocumentStats, extractResumeProfile } from "../utils/nlpParser";
import { SampleResume } from "../types";
import { SAMPLE_RESUMES } from "../data/sampleResumes";

interface ResumeUploaderProps {
  resumeText: string;
  onChangeResumeText: (text: string) => void;
  fileName?: string;
  onFileLoaded?: (name: string, type: string) => void;
  onSelectSample: (sample: SampleResume) => void;
  isAnalyzing: boolean;
  onScanReady?: () => void;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({
  resumeText,
  onChangeResumeText,
  fileName,
  onFileLoaded,
  onSelectSample,
  isAnalyzing,
  onScanReady,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [activeTab, setActiveTab] = useState<"upload" | "paste">("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stats = getDocumentStats(resumeText);
  const profile = useMemo(() => {
    if (!resumeText || resumeText.trim().length < 20) return null;
    return extractResumeProfile(resumeText);
  }, [resumeText]);

  const handleFile = async (file: File) => {
    setUploadError(null);
    setIsParsing(true);
    try {
      const result = await parseUploadedFile(file);
      onChangeResumeText(result.text);
      if (onFileLoaded) {
        onFileLoaded(result.fileName, result.fileType);
      }
      setActiveTab("paste");
      if (onScanReady) {
        onScanReady();
      }
    } catch (err: any) {
      setUploadError(err.message || "Failed to extract text from file.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-xl flex flex-col h-full backdrop-blur-md transition-all hover:border-slate-700/80">
      {/* Top Header & Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
            01
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              Candidate Resume
              {fileName && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 truncate max-w-[160px]">
                  {fileName}
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-400">Step 1: Scan & extract candidate profile structure</p>
          </div>
        </div>

        {/* Upload Mode vs Raw Editor */}
        <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <button
            id="tab-upload-file"
            type="button"
            onClick={() => setActiveTab("upload")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "upload"
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Upload File
          </button>
          <button
            id="tab-paste-text"
            type="button"
            onClick={() => setActiveTab("paste")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "paste"
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Raw Editor ({stats.wordCount}w)
          </button>
        </div>
      </div>

      {/* Quick Test Chips */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          Test Sample:
        </span>
        {SAMPLE_RESUMES.map((sample) => (
          <button
            key={sample.id}
            type="button"
            onClick={() => {
              onSelectSample(sample);
              setActiveTab("paste");
            }}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700 transition-all font-medium cursor-pointer"
          >
            {sample.role}
          </button>
        ))}
      </div>

      {/* Parsed Profile Banner (Step 1 Confirmation) */}
      {profile && (
        <div className="mb-3 p-3 rounded-xl bg-slate-950 border border-indigo-900/40 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Step 1: Resume Scanned & Elements Parsed
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              ~{profile.estimatedExperienceYears} yrs experience
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-300">
            <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase block">Candidate</span>
              <span className="font-semibold text-white truncate block">{profile.candidateName}</span>
            </div>
            <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase block">Hard Skills</span>
              <span className="font-semibold text-indigo-300 block">{profile.detectedSkills.length} Detected</span>
            </div>
            <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase block">Metrics / Data</span>
              <span className="font-semibold text-emerald-300 block">{profile.metricsCount} Numbers</span>
            </div>
            <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase block">Read Time</span>
              <span className="font-semibold text-cyan-300 block">{profile.estimatedReadTimeSec}s Scan</span>
            </div>
          </div>

          {/* Detected Skills Preview */}
          {profile.detectedSkills.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 pt-0.5">
              <span className="text-[9px] text-slate-400 uppercase mr-1">Skills Found:</span>
              {profile.detectedSkills.slice(0, 7).map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
              {profile.detectedSkills.length > 7 && (
                <span className="text-[9px] text-slate-400">+{profile.detectedSkills.length - 7} more</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Dropzone or Text Area */}
      <div className="flex-1 flex flex-col min-h-[220px]">
        {activeTab === "upload" ? (
          <div
            id="resume-dropzone"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
              isDragging
                ? "border-indigo-500 bg-indigo-500/10 scale-[0.99]"
                : "border-slate-700/70 hover:border-indigo-500/60 bg-slate-950/40 hover:bg-slate-950/70"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt,.md"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />

            {isParsing ? (
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-semibold text-slate-200">Extracting Document Elements & OCR...</p>
                <p className="text-xs text-slate-400">Parsing work history, skills taxonomy, and bullet points</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-3 max-w-sm">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-sm">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-100">
                    Drop your resume here or <span className="text-indigo-400 underline underline-offset-4">browse</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Accepts PDF, DOCX, TXT, or Markdown formats
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    PDF.js Engine
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    DOCX XML Parser
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    100% Client-Side Safe
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col relative">
            <textarea
              id="resume-text-editor"
              value={resumeText}
              onChange={(e) => onChangeResumeText(e.target.value)}
              placeholder="Paste your raw resume text here... (Experience, Skills, Projects, Education, Summary)"
              className="w-full flex-1 min-h-[220px] p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm font-mono text-slate-200 placeholder-slate-600 resize-y leading-relaxed outline-none transition-colors"
              disabled={isAnalyzing}
            />
            {resumeText && (
              <button
                type="button"
                onClick={() => onChangeResumeText("")}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/90 hover:bg-rose-950 text-slate-400 hover:text-rose-300 border border-slate-700 transition-colors text-xs shadow-sm cursor-pointer"
                title="Clear resume text"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {uploadError && (
        <div className="mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{uploadError}</span>
        </div>
      )}

      {/* Document Stats Bar */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1">
            <strong className="text-white font-semibold">{stats.wordCount}</strong> words
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <strong className="text-white font-semibold">{stats.characterCount}</strong> chars
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <strong className="text-emerald-400 font-semibold">{stats.metricsCount}</strong> quantified metrics
          </span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-500" />
          ~{stats.estimatedReadTimeSec}s recruiter scan time
        </div>
      </div>
    </div>
  );
};

