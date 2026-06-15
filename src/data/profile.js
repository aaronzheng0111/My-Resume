// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your landing page.
//  Everything below drives the content of the page.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Bolin Zheng (Aaron)',
  role: 'AI / Data Engineer',
  tagline: 'Agentic AI • Prompt Engineering • Full-Stack Development • Cloud Infrastructure',
  intro: 'Building AI data systems and turning ideas into production ：）',

  // Links — replace with your real URLs.
  links: {
    // Just the filename. Drop the matching PDF into the /public folder.
    // The page resolves it correctly for both local dev and GitHub Pages.
    resume: 'Aaron-Zheng-Resume.pdf',
    linkedin: 'https://www.linkedin.com/in/bolin-zheng-b75642193',
    github: 'https://github.com/aaronzheng0111',
    email: 'aaronzheng0111@gmail.com',
  },
}

// Section 2 — Current Focus (terminal style)
export const currentFocus = [
  'Agentic AI',
  'Full-Stack Development',
  'Cloud Infrastructure',
  'Data Engineering',
]

// Section 3 — Featured Projects (keep to 3)
export const projects = [
  {
    id: '01',
    name: 'Autonomous Audio Data Analysis Pipeline',
    description: 'A pipeline for extracting, analyzing, and visualizing audio features, delivering comprehensive, interactive insights and detailed audio diagnostics. Helping to generate a clean and useful dataset for AI training.',
    tags: ['Python', 'React.js', 'Django', 'FastAPI'],
    href: 'https://github.com/aaronzheng0111/Audio_inspect',
  },
  {
    id: '02',
    name: 'Enterprise Customized LLM Chatbot',
    description: 'Led the end-to-end development of a stylized, persona-driven enterprise chatbot tailored for massive unstructured datasets. Integrated prompt engineering, RLHF, and safety guardrails to align outputs with brand voice, achieving a 90% accuracy rate while minimizing hallucinations. Owned the full model lifecycle and DevOps pipeline, optimizing VRAM and inference latency to ensure stable, high-throughput performance under high concurrency.',
    tags: ['LLM', 'GenAI', 'RLHF','NLU','PromptEngineering','LLMOps','VRAMOptimization'],
    href: '',
  },
  {
    id: '03',
    name: 'Data Processing Pipeline',
    description: 'Process audio pipeline to get a clean audio dataset for TTS training.',
    tags: ['Python', 'Audio', 'TTS', 'Data Pipeline','Whisper','VLLM','VAD'],
    href: '',
    image: 'Data Pipeline Example.png',
  }
]
