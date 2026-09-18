import React from "react";
import { X, History, Trash2, ArrowUpRight, Award, Calendar, Target } from "lucide-react";
import { HistoryItem } from "../types";

interface ScoreHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onSelectHistoryItem: (item: HistoryItem) => void;
  onClearHistory: () => void;
}

export const ScoreHistoryModal: React.FC<ScoreHistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onSelectHistoryItem,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <History className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">ATS Scan History & Benchmarks</h3>
              <p className="text-xs text-slate-400">Track resume versions, score deltas, and job targets</p>
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

        {/* Content list */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {history.length > 0 ? (
            history.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectHistoryItem(item);
                  onClose();
                }}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 cursor-pointer transition-all flex items-center justify-between gap-4 group shadow-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {item.targetJobTitle || "Software Engineer"}
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 max-w-md">
                    {item.resumePreview}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span
                      className={`text-sm font-black font-mono ${
                        item.overallScore >= 80
                          ? "text-emerald-400"
                          : item.overallScore >= 65
                          ? "text-amber-400"
                          : "text-rose-400"
                      }`}
                    >
                      {item.overallScore}/100
                    </span>
                    <div className="text-[10px] text-slate-500 font-medium">ATS Score</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Award className="w-8 h-8 mx-auto text-slate-600" />
              <p className="text-xs font-semibold text-slate-300">No previous scans found</p>
              <p className="text-[11px] text-slate-500">
                Run an ATS scan to save and compare resume iterations.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {history.length > 0 && (
          <div className="p-4 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium">{history.length} saved scans</span>
            <button
              type="button"
              onClick={onClearHistory}
              className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
