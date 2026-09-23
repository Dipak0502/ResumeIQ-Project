# ResumeIQ

**AI-Powered Resume Analyzer & ATS Optimization System**

ResumeIQ parses resumes, scores their ATS (Applicant Tracking System) compatibility across seven weighted dimensions, compares them against a target job description, and uses generative AI to rewrite weak bullet points using Google's XYZ formula — all with a privacy-first, client-rendered architecture.

![status](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)
![node](https://img.shields.io/badge/node-%3E%3D18-green)

---

## ✨ Features

- 📄 **Multi-format parsing** — Upload resumes as PDF, DOCX, TXT, or Markdown
- 📊 **7-factor ATS score (0–100)** — Keyword Match, Experience Impact, Technical Skills, Project Depth, Formatting & Layout, Education & Certs, Action Verbs
- 🔍 **Keyword Gap Matrix** — Missing / Weak / Strong keyword breakdown against a job description
- 🎯 **1:1 Job Match Score** — Direct compatibility percentage against a pasted job description
- ✍️ **AI Bullet Optimizer** — Rewrites weak bullets using Google's XYZ formula (*Accomplished [X] as measured by [Y] by doing [Z]*)
- 📝 **Full Resume Optimizer** — Generates a complete, ATS-ready rewritten draft
- 📤 **Multi-format export** — Markdown, plain text, and print-ready PDF
- 🕓 **Local scan history** — Tracked entirely in the browser via `localStorage`
- 🔌 **Offline fallback engine** — Rule-based heuristic scoring when no AI key is configured

---

## 🏗️ Architecture

```
User Ingestion (PDF / DOCX / TXT / Paste)
            │
            ▼
Client-Side Parsing (PDF.js / Mammoth.js)
            │
            ▼
Express API Gateway
 /api/analyze-resume   /api/match-job   /api/optimize-resume
            │
   ┌────────┴────────┐
   ▼                  ▼
Google Gemini      Rule-Based Heuristic
LLM API             Fallback Engine
(Structured JSON)   (Regex / Dictionaries)
   └────────┬────────┘
            ▼
   Unified React Dashboard
   ┌────────┼────────┐
   ▼        ▼        ▼
Radial   Keyword   XYZ Bullet
Score    Gap       Optimizer
Panel    Matrix
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Tailwind CSS |
| Backend | Node.js, Express |
| AI Engine | Google Gemini 3.7 Flash (`@google/genai`) |
| Document Parsing | `pdfjs-dist`, `mammoth` |
| Icons / UX | `lucide-react`, `canvas-confetti` |
| Persistence | Browser `localStorage` (no server-side resume storage) |

---

## 📂 Project Structure

```
resumeiq/
├── src/
│   ├── components/
│   │   ├── ResumeUploader.tsx        # File upload + client-side text extraction
│   │   ├── JobTargetSection.tsx      # Target job title & JD input
│   │   ├── AtsScoreDashboard.tsx     # Radial score + category breakdown
│   │   ├── KeywordGapAnalysis.tsx    # Missing / Weak / Strong keyword matrix
│   │   ├── JobMatchCard.tsx          # 1:1 job match percentage
│   │   ├── BulletOptimizer.tsx       # Single-bullet XYZ rewrite sandbox
│   │   └── FullResumeOptimizer.tsx   # Full resume rewrite & export
│   ├── lib/
│   │   └── nlpParser.ts              # PDF/DOCX text extraction utilities
│   └── App.tsx
├── server/
│   └── server.ts                     # Express API endpoints + Gemini client
├── public/
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- A [Google Gemini API key](https://aistudio.google.com/) (optional — the app falls back to an offline heuristic engine without one)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/resumeiq.git
cd resumeiq

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=3000
```

> Omit `GEMINI_API_KEY` to run entirely on the offline rule-based heuristic engine.

### Run Locally

```bash
# Start the backend API server
npm run server

# In a separate terminal, start the frontend dev server
npm run dev
```

The app will be available at `http://localhost:5173` (frontend) with the API running on `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/analyze-resume` | Runs the full 7-factor ATS analysis on a resume |
| `POST` | `/api/match-job` | Computes job match % and keyword gaps against a job description |
| `POST` | `/api/optimize-resume` | Rewrites bullet points / full resume using the XYZ formula |
| `POST` | `/api/optimize-bullet` | Rewrites a single bullet point in the sandbox |

---

## 📊 ATS Scoring Model

The overall ATS score is a weighted sum of seven sub-metrics:

| Sub-Metric | Weight |
|---|---|
| Keyword Match | 20% |
| Experience Impact (quantified metrics) | 20% |
| Technical Skills | 15% |
| Project Depth | 15% |
| Formatting & Layout | 15% |
| Education & Certifications | 10% |
| Action Verbs | 5% |

```
Overall ATS Score = 0.20·Keyword + 0.20·Impact + 0.15·Skills
                   + 0.15·Projects + 0.15·Formatting
                   + 0.10·Education + 0.05·ActionVerbs
```

---

## 🔒 Privacy & Security

- Resumes are parsed **client-side** — raw files are not persisted on the server.
- Scan history is stored only in the user's own browser (`localStorage`), never on a central server.
- The Gemini API key lives only on the backend and is never exposed to the client.
- Automatic fallback to the offline heuristic engine if the AI service is unavailable or unauthorized.

---

## 🗺️ Roadmap

- [ ] Multi-language resume support
- [ ] OCR support for scanned/image-based resumes
- [ ] LinkedIn profile sync
- [ ] AI-generated cover letters tailored to the target job description

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss significant changes before submitting a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
