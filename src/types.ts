export interface CategoryScores {
  keywordMatch: number;
  technicalSkills: number;
  experienceImpact: number;
  projectsDepth: number;
  formattingReadability: number;
  educationCerts: number;
  actionVerbsStrength: number;
}

export interface KeywordItem {
  name: string;
  category: string;
  frequency?: number;
  issue?: string;
  importance?: "Critical" | "High" | "Medium" | string;
  reason?: string;
}

export interface BulletCritique {
  original: string;
  improved: string;
  critique: string;
  category: string;
  impactDelta?: string;
}

export interface SectionSuggestion {
  section: string;
  score: number;
  status: "Good" | "Needs Work" | "Missing" | string;
  feedback: string;
  actionItem: string;
}

export interface ChecklistItem {
  item: string;
  passed: boolean;
  note: string;
}

export interface Checklist {
  hasContactInfo: boolean;
  hasStandardHeadings: boolean;
  hasQuantifiableMetrics: boolean;
  hasCleanFormatting: boolean;
  hasActionVerbs: boolean;
  noParsingHazards: boolean;
  details: ChecklistItem[];
}

export interface PriorityFix {
  title: string;
  description: string;
  estimatedScoreBoost: number;
}

export interface AnalysisResult {
  overallScore: number;
  scoreRating: string;
  categoryScores: CategoryScores;
  keywords: {
    strongKeywords: KeywordItem[];
    weakKeywords: KeywordItem[];
    missingKeywords: KeywordItem[];
  };
  bulletCritiques: BulletCritique[];
  sectionSuggestions: SectionSuggestion[];
  checklist: Checklist;
  topPriorityFixes: PriorityFix[];
  recruiterSummary: string;
  source?: string;
}

export interface MatchedKeyword {
  keyword: string;
  category: string;
  importance?: string;
}

export interface MissingKeyword {
  keyword: string;
  category: string;
  priority: "Critical" | "Important" | "Bonus" | string;
  recommendation: string;
}

export interface JobMatchResult {
  matchScore: number;
  scoreRating: string;
  matchedKeywords: MatchedKeyword[];
  missingKeywords: MissingKeyword[];
  realisticAdvice: string;
  experienceAlignment: {
    status: string;
    details: string;
  };
  fitStrengths: string[];
  gapRisks: string[];
}

export interface OptimizedBullet {
  original?: string;
  optimized: string;
  metricsAdded?: string;
  keywordsTargeted?: string[];
}

export interface OptimizedExperience {
  company: string;
  role: string;
  duration?: string;
  bullets: OptimizedBullet[];
}

export interface OptimizedProject {
  name: string;
  techStack: string[];
  description?: string;
  bullets: string[];
}

export interface CategorizedSkill {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  details?: string;
}

export interface OptimizedResume {
  targetRole: string;
  professionalSummary: string;
  optimizedExperience: OptimizedExperience[];
  optimizedProjects: OptimizedProject[];
  categorizedSkills: CategorizedSkill[];
  education?: EducationItem[];
  fullOptimizedMarkdown: string;
  improvementsSummary: string[];
}

export interface HistoryItem {
  id: string;
  date: string;
  targetJobTitle: string;
  overallScore: number;
  jobMatchScore?: number;
  resumePreview: string;
  analysis: AnalysisResult;
  jobMatch?: JobMatchResult;
}

export interface SampleResume {
  id: string;
  title: string;
  role: string;
  difficulty: string;
  content: string;
  targetJobDescription: string;
}

export interface ParsedResumeProfile {
  candidateName: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  detectedSkills: string[];
  sectionsFound: {
    summary: boolean;
    experience: boolean;
    education: boolean;
    skills: boolean;
    projects: boolean;
    certifications: boolean;
  };
  metricsCount: number;
  wordCount: number;
  estimatedExperienceYears: number;
  estimatedReadTimeSec: number;
}

export type ScanStage = "idle" | "scanning_resume" | "matching_jd" | "computing_score" | "completed";

