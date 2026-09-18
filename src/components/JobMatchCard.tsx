import React from "react";
import {
  Target,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Lightbulb,
  ArrowRight,
  Layers,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { JobMatchResult } from "../types";

interface JobMatchCardProps {
  jobMatch?: JobMatchResult;
  hasJobDescription: boolean;
  onFocusJobDescription: () => void;
}

export const JobMatchCard: React.FC<JobMatchCardProps> = ({
  jobMatch,
  hasJobDescription,
  onFocusJobDescription,
}) => {
  if (!hasJobDescription || !jobMatch) {
    return (
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-8 sm:p-10 shadow-xl text-center space-y-4 backdrop-blur-md">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-md">
          <Target className="w-7 h-7" />
        </div>
        <div className="max-w-md mx-auto space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-white">
            Unlock 1-to-1 Job Match Compatibility Score
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Attach the target Job Description to compare your resume against the company&apos;s exact job requirements and view missing qualifications.
          </p>
        </div>
        <button
          type="button"
          onClick={onFocusJobDescription}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
        >
          <span>Paste Job Description</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const {
    matchScore,
    scoreRating,
    matchedKeywords,
    missingKeywords,
    realisticAdvice,
    experienceAlignment,
    fitStrengths,
    gapRisks,
  } = jobMatch;

  const getTheme = (score: number) => {
    if (score >= 80)
      return {
        text: "text-emerald-400",
        bg: "bg-emerald-500",
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      };
    if (score >= 65)
      return {
        text: "text-amber-400",
        bg: "bg-amber-500",
        badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      };
    return {
      text: "text-rose-400",
      bg: "bg-rose-500",
      badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    };
  };

  const theme = getTheme(matchScore);

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-6 backdrop-blur-md">
      {/* Top Banner: Score & Advice */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-800/80">
        {/* Score Block */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-center shadow-inner">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
            Job Match Fit
          </span>
          <div className="flex items-baseline gap-1 my-1">
            <span className={`text-5xl font-black tracking-tight font-mono ${theme.text}`}>
              {matchScore}%
            </span>
          </div>
          <span className={`text-xs font-bold px-3 py-0.5 rounded-full border mt-1.5 ${theme.badge}`}>
            {scoreRating || "Strong Fit"}
          </span>
          <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div
              className={`h-full ${theme.bg} rounded-full transition-all duration-700`}
              style={{ width: `${matchScore}%` }}
            />
          </div>
        </div>

        {/* Realistic Advice */}
        <div className="md:col-span-8 space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/25 space-y-2 shadow-inner">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Tailoring Strategy & Recommendation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed italic">
              &ldquo;{realisticAdvice}&rdquo;
            </p>
            <p className="text-[11px] text-slate-400">
              Honest keyword matching optimizes automated screening while preserving authenticity for human interviewers.
            </p>
          </div>

          {experienceAlignment && (
            <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <span className="font-bold text-slate-400">Experience Alignment:</span>
              <span className="text-emerald-300 font-medium">{experienceAlignment.details}</span>
            </div>
          )}
        </div>
      </div>

      {/* Matched vs Missing in JD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Matched Keywords */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Matched JD Requirements ({matchedKeywords?.length || 0})</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium">Found in Resume</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {matchedKeywords && matchedKeywords.length > 0 ? (
              matchedKeywords.map((k, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  {k.keyword}
                </span>
              ))
            ) : (
              <p className="text-xs text-slate-500 italic">No direct keyword overlaps detected.</p>
            )}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span>Missing from Resume ({missingKeywords?.length || 0})</span>
            </div>
            <span className="text-[11px] text-rose-400 font-medium">Explicitly in JD</span>
          </div>

          <div className="space-y-2.5">
            {missingKeywords && missingKeywords.length > 0 ? (
              missingKeywords.map((k, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/70 border border-rose-500/20 text-xs flex items-center justify-between gap-3 shadow-inner"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-rose-300">{k.keyword}</span>
                    <span className="text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {k.priority}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline truncate max-w-[200px]">
                    {k.recommendation}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 italic">All key JD keywords are covered in your resume!</p>
            )}
          </div>
        </div>
      </div>

      {/* Strengths & Risks */}
      {(fitStrengths?.length || gapRisks?.length) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-xs">
          {fitStrengths && fitStrengths.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 shadow-inner">
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Key Candidate Strengths
              </h4>
              <ul className="space-y-1.5 text-slate-300 pl-5 list-disc">
                {fitStrengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {gapRisks && gapRisks.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 shadow-inner">
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Screening Risk Factors
              </h4>
              <ul className="space-y-1.5 text-slate-300 pl-5 list-disc">
                {gapRisks.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
