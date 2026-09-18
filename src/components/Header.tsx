import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  FileText,
  History,
  HelpCircle,
  RefreshCw,
  Award,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Bot,
  Zap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { SampleResume } from "../types";
import { SAMPLE_RESUMES } from "../data/sampleResumes";

interface HeaderProps {
  currentScore?: number;
  onSelectSample: (sample: SampleResume) => void;
  onOpenHistory: () => void;
  onOpenGuide: () => void;
  onOpenJobDirectory?: () => void;
  onReset: () => void;
  hasAnalysis: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScore,
  onSelectSample,
  onOpenHistory,
  onOpenGuide,
  onOpenJobDirectory,
  onReset,
  hasAnalysis,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-35 group-hover:opacity-75 transition duration-300" />
            <div className="relative h-10 w-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-0.5">
                Resume<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400">IQ</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ATS 3.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
              Enterprise ATS Scanner & AI Optimization Platform
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 90+ IT Roles Directory Button */}
          {onOpenJobDirectory && (
            <button
              id="header-job-directory-btn"
              type="button"
              onClick={onOpenJobDirectory}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all shadow-sm"
              title="Explore 90+ Curated IT & Software Job Roles"
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>90+ Job Roles</span>
            </button>
          )}

          {/* Quick Sample Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="load-sample-dropdown-btn"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Load Sample</span>
              <span className="sm:hidden">Samples</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-2.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                  <span>Pre-Loaded Target Roles</span>
                  {onOpenJobDirectory && (
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen(false);
                        onOpenJobDirectory();
                      }}
                      className="text-[10px] text-indigo-400 hover:underline"
                    >
                      Browse 90+
                    </button>
                  )}
                </div>
                {SAMPLE_RESUMES.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      onSelectSample(sample);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/90 text-xs transition-colors group flex items-start justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-indigo-300">
                        {sample.role}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{sample.difficulty}</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 shrink-0 font-mono">
                      Sample
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Current Live Score Pill */}
          {hasAnalysis && currentScore !== undefined && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-400 font-medium">ATS Score:</span>
              <span
                className={`font-extrabold ${
                  currentScore >= 80
                    ? "text-emerald-400"
                    : currentScore >= 65
                    ? "text-amber-400"
                    : "text-rose-400"
                }`}
              >
                {currentScore}/100
              </span>
            </div>
          )}

          {/* Scan History */}
          <button
            id="view-history-btn"
            type="button"
            onClick={onOpenHistory}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
            title="Scan History & Past Iterations"
          >
            <History className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">History</span>
          </button>

          {/* ATS Playbook & Guide */}
          <button
            id="open-ats-guide-btn"
            type="button"
            onClick={onOpenGuide}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
            title="ATS Scoring Playbook & Guidelines"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">ATS Playbook</span>
          </button>

          {/* Reset Action */}
          {hasAnalysis && (
            <button
              id="reset-analysis-btn"
              type="button"
              onClick={onReset}
              className="p-2 text-xs font-medium rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Reset Analysis"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
