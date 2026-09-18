import React, { useState } from "react";
import {
  Search,
  Tag,
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Copy,
  Check,
  Filter,
  Sparkles,
  Layers,
} from "lucide-react";
import { KeywordItem } from "../types";

interface KeywordGapAnalysisProps {
  strongKeywords: KeywordItem[];
  weakKeywords: KeywordItem[];
  missingKeywords: KeywordItem[];
  onAddKeywordToResume?: (keyword: string) => void;
}

export const KeywordGapAnalysis: React.FC<KeywordGapAnalysisProps> = ({
  strongKeywords,
  weakKeywords,
  missingKeywords,
  onAddKeywordToResume,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState<"all" | "missing" | "weak" | "strong">("all");
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedKeyword(name);
    setTimeout(() => setCopiedKeyword(null), 1500);
  };

  const filterList = (list: KeywordItem[]) => {
    if (!searchTerm.trim()) return list;
    const q = searchTerm.toLowerCase();
    return list.filter(
      (k) =>
        k.name.toLowerCase().includes(q) ||
        k.category.toLowerCase().includes(q) ||
        (k.reason && k.reason.toLowerCase().includes(q))
    );
  };

  const filteredStrong = filterList(strongKeywords || []);
  const filteredWeak = filterList(weakKeywords || []);
  const filteredMissing = filterList(missingKeywords || []);

  const totalCount =
    (strongKeywords?.length || 0) + (weakKeywords?.length || 0) + (missingKeywords?.length || 0);

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-6 backdrop-blur-md">
      {/* Header & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Tag className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Keyword Gap & Terminology Matrix</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Automated ATS filters search for exact semantic keywords to determine candidate ranking.
          </p>
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search keywords or category..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedTab("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            selectedTab === "all"
              ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
              : "bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          All Detected ({totalCount})
        </button>

        <button
          type="button"
          onClick={() => setSelectedTab("missing")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            selectedTab === "missing"
              ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm"
              : "bg-slate-950/80 text-rose-400/80 hover:text-rose-300 border border-slate-800"
          }`}
        >
          <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
          Missing Critical ({filteredMissing.length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedTab("weak")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            selectedTab === "weak"
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
              : "bg-slate-950/80 text-amber-400/80 hover:text-amber-300 border border-slate-800"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          Needs Context ({filteredWeak.length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedTab("strong")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            selectedTab === "strong"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
              : "bg-slate-950/80 text-emerald-400/80 hover:text-emerald-300 border border-slate-800"
          }`}
        >
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          Strong Matched ({filteredStrong.length})
        </button>
      </div>

      {/* 3 Column Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Missing Column */}
        {(selectedTab === "all" || selectedTab === "missing") && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                <AlertOctagon className="w-4 h-4" />
                <span>Missing High-Impact</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono">
                {filteredMissing.length}
              </span>
            </div>

            <div className="space-y-3">
              {filteredMissing.length > 0 ? (
                filteredMissing.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-rose-500/20 hover:border-rose-500/40 transition-all space-y-2 shadow-inner group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs text-rose-200">{item.name}</span>
                      <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {item.importance || "Critical"}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{item.reason}</div>
                    <div className="flex items-center justify-between pt-1.5 border-t border-slate-800/60 text-[11px] text-slate-500">
                      <span className="font-medium text-slate-400">{item.category}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.name)}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-[11px]"
                      >
                        {copiedKeyword === item.name ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedKeyword === item.name ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 italic p-3">No missing keywords found.</p>
              )}
            </div>
          </div>
        )}

        {/* Weak Column */}
        {(selectedTab === "all" || selectedTab === "weak") && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Weak / Low Context</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                {filteredWeak.length}
              </span>
            </div>

            <div className="space-y-3">
              {filteredWeak.length > 0 ? (
                filteredWeak.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-2 shadow-inner group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs text-amber-200">{item.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {item.issue || "Mentioned superficially without quantifiable outcomes or project integration."}
                    </div>
                    <div className="pt-1.5 border-t border-slate-800/60 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.name)}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-[11px]"
                      >
                        {copiedKeyword === item.name ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedKeyword === item.name ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 italic p-3">No weak keywords identified.</p>
              )}
            </div>
          </div>
        )}

        {/* Strong Column */}
        {(selectedTab === "all" || selectedTab === "strong") && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Strong / Fully Matched</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                {filteredStrong.length}
              </span>
            </div>

            <div className="space-y-3">
              {filteredStrong.length > 0 ? (
                filteredStrong.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-2 shadow-inner"
                  >
                    <div>
                      <span className="font-bold text-xs text-emerald-200">{item.name}</span>
                      <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{item.category}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Matched
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 italic p-3">No strong keywords found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
