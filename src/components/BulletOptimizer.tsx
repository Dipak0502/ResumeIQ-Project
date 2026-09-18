import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  Zap,
  Sliders,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { BulletCritique } from "../types";

interface BulletOptimizerProps {
  bulletCritiques: BulletCritique[];
  targetJobTitle?: string;
}

export const BulletOptimizer: React.FC<BulletOptimizerProps> = ({
  bulletCritiques,
  targetJobTitle,
}) => {
  const [customBullet, setCustomBullet] = useState("Built an e-commerce website using React.");
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [isRewriting, setIsRewriting] = useState(false);
  const [sandboxResult, setSandboxResult] = useState<any>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleRewriteCustomBullet = async () => {
    if (!customBullet.trim()) return;
    setIsRewriting(true);
    try {
      const res = await fetch("/api/optimize-bullet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bulletText: customBullet,
          roleContext: targetJobTitle || "Software Engineer",
          style: selectedStyle,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setSandboxResult(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsRewriting(false);
    }
  };

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-8 backdrop-blur-md">
      {/* Header & XYZ Formula Guide */}
      <div className="space-y-4 pb-4 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Google XYZ Formula Bullet-Point Engine</h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold font-mono">
            Laszlo Bock (Google VP) Standard
          </span>
        </div>

        {/* 3 Step Formula Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 shadow-inner space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-[11px]">
                X
              </span>
              <span className="font-bold text-indigo-300">Accomplished [X]</span>
            </div>
            <p className="text-slate-400 leading-relaxed pt-1">
              Begin with a powerful active verb and concrete feature or business deliverable.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 shadow-inner space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-[11px]">
                Y
              </span>
              <span className="font-bold text-emerald-300">Measured by [Y]</span>
            </div>
            <p className="text-slate-400 leading-relaxed pt-1">
              Inject quantifiable metrics: % latency drop, $ revenue, uptime, or team scale.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 shadow-inner space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-[11px]">
                Z
              </span>
              <span className="font-bold text-cyan-300">By Doing [Z]</span>
            </div>
            <p className="text-slate-400 leading-relaxed pt-1">
              Detail specific frameworks, architectural patterns, and toolchains utilized.
            </p>
          </div>
        </div>
      </div>

      {/* Detected Weak Bullets */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Identified Resume Bullets & Optimized Rewrites
          </h4>
          <span className="text-[11px] font-medium text-slate-400">Extracted from your resume</span>
        </div>

        <div className="space-y-4">
          {bulletCritiques && bulletCritiques.length > 0 ? (
            bulletCritiques.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3 shadow-inner"
              >
                {/* Before / Original */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      Original (Weak / Passive)
                    </span>
                    <span className="text-slate-500 font-medium">{item.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-200/90 font-mono bg-rose-950/20 p-3 rounded-xl border border-rose-900/30 leading-relaxed">
                    &ldquo;{item.original}&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-400 italic pl-1">ATS Critique: {item.critique}</p>
                </div>

                {/* After / Improved */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      ATS & Metric-Enhanced Rewrite
                    </span>
                    {item.impactDelta && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-extrabold border border-emerald-500/20 text-[10px] font-mono">
                        {item.impactDelta}
                      </span>
                    )}
                  </div>
                  <div className="relative group">
                    <p className="text-xs sm:text-sm text-emerald-200 font-mono bg-emerald-950/20 p-3.5 pr-12 rounded-xl border border-emerald-900/40 leading-relaxed">
                      &ldquo;{item.improved}&rdquo;
                    </p>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.improved, `critique-${idx}`)}
                      className="absolute right-2.5 top-2.5 p-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors text-xs flex items-center gap-1 shadow-sm cursor-pointer"
                      title="Copy improved bullet"
                    >
                      {copiedId === `critique-${idx}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-400 italic">No weak bullet points identified in this section.</p>
          )}
        </div>
      </div>

      {/* Interactive Bullet Sandbox */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-4 relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Interactive Bullet Optimizer Sandbox
            </h4>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">Test Custom Sentences</span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={customBullet}
              onChange={(e) => setCustomBullet(e.target.value)}
              placeholder="e.g. Built an e-commerce website using React."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none font-mono"
            />
            <button
              type="button"
              disabled={isRewriting || !customBullet.trim()}
              onClick={handleRewriteCustomBullet}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 disabled:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              {isRewriting ? (
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              <span>Transform Bullet</span>
            </button>
          </div>
        </div>

        {/* Variations List */}
        {sandboxResult && (
          <div className="space-y-3 pt-3 border-t border-slate-800/80 animate-in fade-in duration-200">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Targeted Rewrite Variations:
            </div>
            <div className="space-y-2.5">
              {sandboxResult.variations?.map((v: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start justify-between gap-3 text-xs shadow-sm"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-indigo-300 text-[11px] uppercase tracking-wider">{v.type}</span>
                    <p className="text-slate-200 font-mono text-xs leading-relaxed">&ldquo;{v.text}&rdquo;</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(v.text, `sandbox-${idx}`)}
                    className="shrink-0 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedId === `sandbox-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
