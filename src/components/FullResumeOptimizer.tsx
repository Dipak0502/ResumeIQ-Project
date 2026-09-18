import React, { useState } from "react";
import {
  Sparkles,
  Download,
  Copy,
  Check,
  FileText,
  Printer,
  Edit3,
  Eye,
  Layers,
  ArrowUpRight,
  RefreshCw,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { OptimizedResume } from "../types";

interface FullResumeOptimizerProps {
  optimizedResume: OptimizedResume | null;
  isOptimizing: boolean;
  onGenerateOptimization: () => void;
  targetJobTitle: string;
}

export const FullResumeOptimizer: React.FC<FullResumeOptimizerProps> = ({
  optimizedResume,
  isOptimizing,
  onGenerateOptimization,
  targetJobTitle,
}) => {
  const [viewMode, setViewMode] = useState<"preview" | "markdown">("preview");
  const [editableMarkdown, setEditableMarkdown] = useState<string>("");
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (optimizedResume?.fullOptimizedMarkdown) {
      setEditableMarkdown(optimizedResume.fullOptimizedMarkdown);
    }
  }, [optimizedResume]);

  const handleCopy = () => {
    const textToCopy = editableMarkdown || optimizedResume?.fullOptimizedMarkdown || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (format: "md" | "txt") => {
    const content = editableMarkdown || optimizedResume?.fullOptimizedMarkdown || "";
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Optimized_Resume_${(targetJobTitle || "Software_Engineer").replace(/\s+/g, "_")}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!optimizedResume && !isOptimizing) {
    return (
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-8 sm:p-12 shadow-xl text-center space-y-4 backdrop-blur-md">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/10">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            AI Full-Resume ATS Synthesizer
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Generate an executive-grade, ATS-compliant resume rewrite with Google XYZ bullet points, categorized hard skills, and target job keywords.
          </p>
        </div>
        <button
          id="generate-full-resume-btn"
          type="button"
          onClick={onGenerateOptimization}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Synthesize ATS Optimized Resume</span>
        </button>
      </div>
    );
  }

  if (isOptimizing) {
    return (
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-12 sm:p-16 shadow-xl text-center space-y-4 backdrop-blur-md">
        <div className="w-12 h-12 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-white">
            Synthesizing ATS-Compliant Resume...
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            Formatting headers, injecting keyword taxonomy, and restructuring experience bullets with the Google XYZ formula.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-6 backdrop-blur-md">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80 no-print">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">ATS-Optimized Resume Draft</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Calibrated for <strong className="text-indigo-300 font-semibold">{optimizedResume?.targetRole || targetJobTitle}</strong>
          </p>
        </div>

        {/* View Mode & Export Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Tabs */}
          <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === "preview"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("markdown")}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === "markdown"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Markdown</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>

          {/* Download Buttons */}
          <button
            type="button"
            onClick={() => handleDownload("md")}
            className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Download Markdown File"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>.MD</span>
          </button>
          <button
            type="button"
            onClick={() => handleDownload("txt")}
            className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Download Plain Text File"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>.TXT</span>
          </button>

          {/* Print / Save PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Optimizations Applied Notice */}
      {optimizedResume?.improvementsSummary && optimizedResume.improvementsSummary.length > 0 && (
        <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2 no-print shadow-inner">
          <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" /> Optimizations Injected:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
            {optimizedResume.improvementsSummary.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Printable Sheet View */}
      {viewMode === "preview" ? (
        <div
          id="printable-resume-sheet"
          className="p-8 sm:p-12 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl font-sans space-y-6 max-w-4xl mx-auto leading-relaxed text-xs sm:text-sm"
        >
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 text-center space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
              CANDIDATE NAME
            </h1>
            <p className="text-xs text-slate-600 font-medium">
              City, State • email@domain.com • (555) 000-0000 • linkedin.com/in/username • github.com/username
            </p>
          </div>

          {/* Professional Summary */}
          {optimizedResume?.professionalSummary && (
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {optimizedResume.professionalSummary}
              </p>
            </div>
          )}

          {/* Technical Skills */}
          {optimizedResume?.categorizedSkills && optimizedResume.categorizedSkills.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Technical Skills & Tools
              </h2>
              <div className="space-y-1 text-slate-700">
                {optimizedResume.categorizedSkills.map((cat, idx) => (
                  <div key={idx}>
                    <strong className="text-slate-900">{cat.category}:</strong>{" "}
                    <span>{cat.skills.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Experience */}
          {optimizedResume?.optimizedExperience && optimizedResume.optimizedExperience.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Professional Experience
              </h2>
              {optimizedResume.optimizedExperience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs text-slate-600 italic font-medium">{exp.duration || "2022 – Present"}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600">{exp.company}</div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b.optimized}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Key Projects */}
          {optimizedResume?.optimizedProjects && optimizedResume.optimizedProjects.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Key Technical Projects
              </h2>
              {optimizedResume.optimizedProjects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{proj.name}</span>
                    <span className="text-xs text-slate-600 font-medium">
                      {proj.techStack?.join(" • ")}
                    </span>
                  </div>
                  {proj.description && <p className="text-slate-600 text-xs">{proj.description}</p>}
                  <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {optimizedResume?.education && optimizedResume.education.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Education & Credentials
              </h2>
              {optimizedResume.education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div className="text-slate-700 font-medium">{edu.institution}</div>
                  {edu.details && <div className="text-xs text-slate-600">{edu.details}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2 no-print">
          <textarea
            value={editableMarkdown}
            onChange={(e) => setEditableMarkdown(e.target.value)}
            className="w-full h-96 p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 font-mono text-xs text-slate-200 leading-relaxed resize-y outline-none"
            placeholder="Markdown resume content..."
          />
          <p className="text-[11px] text-slate-400">
            Edit your resume in raw Markdown before exporting to .MD or .TXT.
          </p>
        </div>
      )}
    </div>
  );
};
