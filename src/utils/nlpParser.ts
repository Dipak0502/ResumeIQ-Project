import * as pdfjsLib from "pdfjs-dist";

// Configure pdfjs worker if in browser
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
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

const COMMON_SKILLS_TAXONOMY = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin",
  "React", "React.js", "Next.js", "Vue.js", "Angular", "Svelte", "Node.js", "Express.js", "NestJS", "Django",
  "Flask", "Spring Boot", "FastAPI", "GraphQL", "REST API", "gRPC", "PostgreSQL", "MySQL", "MongoDB",
  "Redis", "Elasticsearch", "DynamoDB", "Cassandra", "Docker", "Kubernetes", "AWS", "Amazon Web Services",
  "Azure", "GCP", "Google Cloud", "CI/CD", "GitHub Actions", "Terraform", "Ansible", "Linux", "Tailwind CSS",
  "HTML5", "CSS3", "Sass", "Webpack", "Vite", "Redux", "Zustand", "Jest", "Cypress", "Playwright", "Selenium",
  "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "NLP", "Machine Learning", "Deep Learning",
  "Figma", "UI/UX", "Agile", "Scrum", "Jira", "Git", "Microservices", "System Design", "Prompt Engineering"
];

/**
 * Extracts structured profile details directly from raw text
 */
export function extractResumeProfile(text: string): ParsedResumeProfile {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lower = text.toLowerCase();

  // 1. Extract Candidate Name (usually the first non-empty line without email/phone/url)
  let candidateName = "Candidate";
  for (const line of lines.slice(0, 5)) {
    if (
      !line.includes("@") &&
      !line.includes("http") &&
      !line.includes("www.") &&
      !line.match(/\d{3}/) &&
      line.length >= 3 &&
      line.length <= 40 &&
      !line.toLowerCase().includes("resume") &&
      !line.toLowerCase().includes("curriculum")
    ) {
      candidateName = line.replace(/^[#*\-•\s]+/, "");
      break;
    }
  }

  // 2. Extract Contact Info
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const email = emailMatch ? emailMatch[0] : undefined;

  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  const phone = phoneMatch ? phoneMatch[0] : undefined;

  const linkedinMatch = text.match(/(?:linkedin\.com\/in\/|linkedin:\s*)([a-zA-Z0-9_-]+)/i);
  const linkedin = linkedinMatch ? `linkedin.com/in/${linkedinMatch[1]}` : undefined;

  const githubMatch = text.match(/(?:github\.com\/|github:\s*)([a-zA-Z0-9_-]+)/i);
  const github = githubMatch ? `github.com/${githubMatch[1]}` : undefined;

  // 3. Detect Skills
  const detectedSkills: string[] = [];
  for (const skill of COMMON_SKILLS_TAXONOMY) {
    const escaped = skill.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(^|[^a-zA-Z0-9])${escaped}([^a-zA-Z0-9]|$)`, "i");
    if (regex.test(text) && !detectedSkills.includes(skill)) {
      detectedSkills.push(skill);
    }
  }

  // 4. Sections Found
  const sectionsFound = {
    summary: /summary|objective|about me|profile/i.test(text),
    experience: /experience|work history|employment|career history/i.test(text),
    education: /education|degree|bachelor|master|phd|university|college/i.test(text),
    skills: /skills|technologies|proficiencies|tech stack/i.test(text),
    projects: /projects|portfolio|key projects/i.test(text),
    certifications: /certifications?|licenses?|credentials/i.test(text),
  };

  // 5. Estimated Years of Experience (from date spans)
  const yearsFound = text.match(/\b(19\d\d|20\d\d)\b/g);
  let estimatedExperienceYears = 2; // baseline
  if (yearsFound && yearsFound.length >= 2) {
    const numericYears = yearsFound.map((y) => parseInt(y, 10)).filter((y) => y >= 1995 && y <= new Date().getFullYear());
    if (numericYears.length >= 2) {
      const minYear = Math.min(...numericYears);
      const maxYear = Math.max(...numericYears);
      estimatedExperienceYears = Math.min(25, Math.max(1, maxYear - minYear));
    }
  }

  // 6. Quantifiable metrics count
  const metricsCount = (text.match(/\d+([.,]\d+)?%?|\$\d+|\b\d+\s*(?:users|k|m|ms|sec|x|engineers|clients|projects|million|thousand)\b/gi) || []).length;

  return {
    candidateName,
    email,
    phone,
    linkedin,
    github,
    detectedSkills: detectedSkills.slice(0, 20),
    sectionsFound,
    metricsCount,
    wordCount: words.length,
    estimatedExperienceYears,
    estimatedReadTimeSec: Math.ceil(words.length / 3.5),
  };
}

/**
 * Parses uploaded file (PDF, DOCX, TXT, MD) into plain text.
 */
export async function parseUploadedFile(file: File): Promise<{ text: string; fileName: string; fileType: string }> {
  const fileName = file.name;
  const fileExt = fileName.split(".").pop()?.toLowerCase() || "";

  if (fileExt === "txt" || fileExt === "md") {
    const text = await file.text();
    return { text, fileName, fileType: fileExt.toUpperCase() };
  }

  if (fileExt === "docx") {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const base64Data = btoa(binary);

      const response = await fetch("/api/parse-docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64Data }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.text) {
          return { text: data.text, fileName, fileType: "DOCX" };
        }
      }
    } catch (err) {
      console.warn("Server DOCX parsing failed, trying text fallback", err);
    }
  }

  if (fileExt === "pdf") {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      let fullText = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");
        fullText += pageText + "\n\n";
      }

      if (fullText.trim().length > 20) {
        return { text: fullText.trim(), fileName, fileType: "PDF" };
      }
    } catch (pdfErr) {
      console.warn("Client PDF extraction failed:", pdfErr);
    }
  }

  // Fallback to text reader
  try {
    const rawText = await file.text();
    return { text: rawText, fileName, fileType: fileExt.toUpperCase() || "FILE" };
  } catch (e) {
    throw new Error("Unable to read file content. Please copy and paste your resume text directly.");
  }
}

/**
 * Calculates basic document statistics
 */
export function getDocumentStats(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const chars = text.length;
  const lines = text.split("\n").length;
  const estimatedReadTimeSec = Math.ceil(words.length / 3.5); // ~200 wpm

  // Count quantifiable numbers / percentages
  const metricsCount = (text.match(/\d+([.,]\d+)?%?|\$\d+/g) || []).length;

  return {
    wordCount: words.length,
    characterCount: chars,
    lineCount: lines,
    estimatedReadTimeSec,
    metricsCount,
  };
}

