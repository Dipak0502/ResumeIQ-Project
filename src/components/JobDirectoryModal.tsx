import React, { useState, useMemo } from "react";
import {
  Search,
  Briefcase,
  X,
  Check,
  Sparkles,
  BookOpen,
  Layers,
  CheckCircle2,
  Filter,
  ArrowRight,
  Code2,
} from "lucide-react";
import { IT_JOB_ROLES, JOB_CATEGORIES, JobRole } from "../data/jobRoles";

interface JobDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: JobRole, loadJobDescription: boolean) => void;
  currentRoleTitle?: string;
}

export const JobDirectoryModal: React.FC<JobDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectRole,
  currentRoleTitle,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [previewRole, setPreviewRole] = useState<JobRole | null>(null);

  const filteredRoles = useMemo(() => {
    return IT_JOB_ROLES.filter((role) => {
      const matchesCategory =
        selectedCategory === "All Categories" || role.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = role.title.toLowerCase().includes(q);
      const inDesc = role.description.toLowerCase().includes(q);
      const inSkills = role.keySkills.some((s) => s.toLowerCase().includes(q));
      const inCategory = role.category.toLowerCase().includes(q);

      return inTitle || inDesc || inSkills || inCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="job-directory-modal"
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  IT & Software Job Roles Library
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {IT_JOB_ROLES.length} Curated Roles
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Select any industry-standard role with pre-calibrated key skills and ATS job descriptions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/90 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role title, skill (e.g. Python, Docker, React, Figma, SQL), or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm font-medium text-slate-100 placeholder-slate-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-800">
            {JOB_CATEGORIES.map((cat) => {
              const count =
                cat === "All Categories"
                  ? IT_JOB_ROLES.length
                  : IT_JOB_ROLES.filter((r) => r.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Roles List / Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 divide-y divide-slate-800/40">
          {filteredRoles.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-300">No matching job roles found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for a different technology, skill (e.g. "React", "Python", "Security"), or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredRoles.map((role) => {
                const isSelected = currentRoleTitle?.toLowerCase() === role.title.toLowerCase();

                return (
                  <div
                    key={role.id}
                    id={`job-role-card-${role.id}`}
                    className={`p-4 rounded-xl border transition-all flex flex-col justify-between group ${
                      isSelected
                        ? "bg-indigo-950/30 border-indigo-500/80 shadow-md shadow-indigo-950/50 ring-1 ring-indigo-500/50"
                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950"
                    }`}
                  >
                    <div className="space-y-2.5">
                      {/* Top title & category */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                            {role.category}
                          </span>
                          <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mt-1.5 flex items-center gap-1.5">
                            {role.title}
                            {isSelected && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            )}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {role.description}
                      </p>

                      {/* Key Skills */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          Key Skills:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {role.keySkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectRole(role, false);
                          onClose();
                        }}
                        className="text-[11px] px-2.5 py-1.5 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                      >
                        Set Title Only
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onSelectRole(role, true);
                          onClose();
                        }}
                        className="text-xs px-3 py-1.5 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center gap-1 shadow-sm group-hover:shadow-indigo-600/30"
                      >
                        <span>Apply Role & JD</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>
              Applying a role auto-configures industry ATS keywords and matching weights.
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
