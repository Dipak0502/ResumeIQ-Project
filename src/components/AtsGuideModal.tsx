import React from "react";
import { X, HelpCircle, CheckCircle2, XCircle, FileText, Zap, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

interface AtsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AtsGuideModal: React.FC<AtsGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">ATS Algorithm Playbook & Guidelines</h3>
              <p className="text-xs text-slate-400">Technical insights on how Applicant Tracking Systems evaluate resumes</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Rules: Dos and Donts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DO's */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3 shadow-inner">
              <h4 className="font-bold text-emerald-400 flex items-center gap-2 text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> What ATS Algorithms Reward
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Standard Section Headings:</strong> Use explicit titles like &quot;Professional Experience&quot;, &quot;Technical Skills&quot;, &quot;Education&quot;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Clean Single-Column Layout:</strong> Multi-column tables, text boxes, and canvas sidebars scramble text in OCR parsers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Google XYZ Metric Formula:</strong> &quot;Accomplished [X] as measured by [Y], by doing [Z]&quot;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Exact Keyword Mentions:</strong> Match the target job&apos;s terminology (e.g. &quot;React.js&quot;, &quot;PostgreSQL&quot;, &quot;CI/CD&quot;).</span>
                </li>
              </ul>
            </div>

            {/* DONT's */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3 shadow-inner">
              <h4 className="font-bold text-rose-400 flex items-center gap-2 text-xs uppercase tracking-wider">
                <XCircle className="w-4 h-4" /> Common Rejection Traps
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Hidden Keyword Stuffing:</strong> Tiny white text or hidden keyword dumps trigger anti-cheat spam flags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Graphic Skill Progress Bars:</strong> &quot;90% in React&quot; graphical icons cannot be indexed by parsers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Header / Footer Contact Info:</strong> Many corporate parsers ignore headers and footers entirely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span><strong>Passive Phrasing (&quot;Responsible for&quot;):</strong> Lacks measurable scope and scores lower in candidate ranking.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* High Impact Action Verbs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" /> High-Impact Action Verb Taxonomy
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 shadow-inner">
                <span className="font-bold text-indigo-300 block">Engineering & Architecture</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Architected, Engineered, Refactored, Deployed, Built, Designed, Integrated, Scaled
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 shadow-inner">
                <span className="font-bold text-emerald-300 block">Metrics & Performance</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Accelerated, Optimized, Decreased, Reduced, Automated, Boosted, Maximized, Streamlined
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 shadow-inner">
                <span className="font-bold text-cyan-300 block">Leadership & Strategy</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Spearheaded, Orchestrated, Standardized, Mentored, Championed, Directed, Aligned
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
