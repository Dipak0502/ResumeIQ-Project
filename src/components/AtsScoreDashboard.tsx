import React, { useState } from "react";
import {
  Award,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  Info,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  FileCheck,
  Target,
} from "lucide-react";
import { AnalysisResult } from "../types";

interface AtsScoreDashboardProps {
  analysis: AnalysisResult;
  onNavigateToTab?: (tabName: string) => void;
  onOptimizeClick: () => void;
}

export const AtsScoreDashboard: React.FC<AtsScoreDashboardProps> = ({
  analysis,
  onNavigateToTab,
  onOptimizeClick,
}) => {
  const {
    overallScore,
    scoreRating,
    categoryScores,
    recruiterSummary,
    topPriorityFixes,
    checklist,
  } = analysis;

  const getScoreTheme = (score: number) => {
    if (score >= 80)
      return {
        text: "text-emerald-400",
        stroke: "stroke-emerald-400",
        bg: "bg-emerald-500",
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        label: "Ready for Applications",
      };
    if (score >= 65)
      return {
        text: "text-amber-400",
        stroke: "stroke-amber-400",
        bg: "bg-amber-500",
        badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        label: "Competitive (Needs Polish)",
      };
    return {
      text: "text-rose-400",
      stroke: "stroke-rose-400",
      bg: "bg-rose-500",
      badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      label: "ATS Filtering Risk",
    };
  };

  const theme = getScoreTheme(overallScore);

  const categories = [
    {
      key: "keywordMatch",
      label: "Keyword Density & Match",
      score: categoryScores?.keywordMatch || 75,
      icon: "🎯",
      tip: "Matches target role skills & terminology",
    },
    {
      key: "technicalSkills",
      label: "Technical Skills Taxonomy",
      score: categoryScores?.technicalSkills || 80,
      icon: "⚡",
      tip: "Hard skills categorization & tools",
    },
    {
      key: "experienceImpact",
      label: "Experience Impact & XYZ",
      score: categoryScores?.experienceImpact || 70,
      icon: "📈",
      tip: "Quantified outcomes ($Y) & active verbs ($X)",
    },
    {
      key: "projectsDepth",
      label: "Key Projects Depth",
      score: categoryScores?.projectsDepth || 82,
      icon: "💻",
      tip: "Project complexity & architectural stack",
    },
    {
      key: "formattingReadability",
      label: "ATS Layout & Parsability",
      score: categoryScores?.formattingReadability || 75,
      icon: "📑",
      tip: "Standard headers, no parsing traps",
    },
    {
      key: "educationCerts",
      label: "Education & Credentials",
      score: categoryScores?.educationCerts || 90,
      icon: "🎓",
      tip: "Degree, coursework, certifications",
    },
    {
      key: "actionVerbsStrength",
      label: "Action Verbs & Voice",
      score: categoryScores?.actionVerbsStrength || 85,
      icon: "🔥",
      tip: "Dynamic verbs vs passive voice",
    },
  ];

  // Radial gauge
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallScore / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Top Banner Card: Radial Gauge & Recruiter Perspective */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/80 rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left: Overall Score Radial Gauge */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-center relative shadow-inner">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* SVG Circle Meter */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-slate-800/80"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                className={`${theme.stroke} transition-all duration-1000 ease-out`}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-5xl font-black tracking-tight text-white font-mono">
                {overallScore}
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                ATS SCORE
              </span>
            </div>
          </div>

          <div className="mt-4 w-full">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${theme.badge} inline-block`}>
              {scoreRating || theme.label}
            </span>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              {overallScore >= 80
                ? "Top 10% tier. Excellent parsing score with strong likelihood of passing automated ATS filters."
                : overallScore >= 65
                ? "Solid foundation, but missing key technical keywords and quantified metrics ($Y)."
                : "High ATS filtering risk. Apply the priority fixes below to avoid automated rejection."}
            </p>
          </div>

          <button
            id="quick-optimize-btn"
            type="button"
            onClick={onOptimizeClick}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Full Optimized Resume</span>
          </button>
        </div>

        {/* Right: Recruiter Summary & Category Scores */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          {/* Recruiter Executive Critique */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 shadow-inner">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">
                IQ
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Recruiter & ATS Screening Assessment
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{recruiterSummary}&rdquo;
            </p>
          </div>

          {/* 7 Category Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                7 Core ATS Evaluation Dimensions
              </h3>
              <span className="text-[11px] font-medium text-slate-400">Target: 80%+</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => {
                const color = getScoreTheme(cat.score);
                return (
                  <div
                    key={cat.key}
                    className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-700/80 transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5 group-hover:text-white transition-colors">
                        <span>{cat.icon}</span>
                        {cat.label}
                      </span>
                      <span className={`font-mono font-bold ${color.text}`}>{cat.score}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800/90 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color.bg} transition-all duration-700 rounded-full`}
                        style={{ width: `${Math.max(6, cat.score)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Priority Fixes & ATS Compliance Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top 3 Fixes */}
        <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Top Recommended Fixes for Score Boost</h3>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
              High Impact
            </span>
          </div>

          <div className="space-y-3">
            {topPriorityFixes && topPriorityFixes.length > 0 ? (
              topPriorityFixes.map((fix, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start justify-between gap-3 shadow-inner"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-[11px] font-mono font-bold text-indigo-300">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">{fix.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 pl-7 leading-relaxed">{fix.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap font-mono">
                      +{fix.estimatedScoreBoost || 6} pts
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">No critical fixes required.</p>
            )}
          </div>
        </div>

        {/* ATS Compliance Checklist */}
        <div className="lg:col-span-5 bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">ATS Algorithm Compliance</h3>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Standards Audit</span>
          </div>

          <div className="space-y-3">
            {checklist?.details && checklist.details.length > 0 ? (
              checklist.details.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 text-xs shadow-inner"
                >
                  {item.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span
                      className={`font-bold ${
                        item.passed ? "text-slate-200" : "text-rose-300"
                      }`}
                    >
                      {item.item}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">All checks completed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
