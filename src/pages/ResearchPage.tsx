import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

interface ResearchProject {
  id: string;
  tab: string;
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  stats: { label: string; value: string }[];
  question: { heading: string; text: string };
  findings: { title: string; source?: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  insight: { heading: string; text: string };
  link?: { label: string; href: string };
}

const PROJECTS: ResearchProject[] = [
  {
    id: "respira",
    tab: "Respira",
    label: "Pentawards 2026 Bronze · Student Concepts",
    title: "Respira — designing calm before healing",
    subtitle: "Speculative healthcare packaging · MA Design research",
    summary:
      "Respira is a speculative healthcare packaging concept that asks whether packaging can begin healing before the medicine is touched. Formed from biodegradable moulded fibre, it uses a pebble-like sleeve and an embossed breathing wave to turn touch into a quiet cue for slow breathing.",
    stats: [
      { label: "Category", value: "Sustainable design" },
      { label: "Material", value: "Moulded fibre" },
      { label: "Recognition", value: "Pentawards Bronze" },
      { label: "Status", value: "Ongoing MA research" },
    ],
    question: {
      heading: "What is the problem?",
      text: "Before treatment begins, people often feel uncertainty, stress or anxiety, yet pharmaceutical packaging is designed to protect, inform and meet regulation, not to acknowledge how the person holding it feels. Rather than asking \"How should a medicine box look?\", the project asks \"How should it make people feel?\"",
    },
    findings: [
      {
        title: "Touch as an interface",
        source: "Haynes et al. (2022)",
        text: "A tactile breathing aid reduced pre-test anxiety across 129 participants, comparable to guided meditation. Breathing can be experienced through a physical interface, not only described visually or verbally.",
      },
      {
        title: "Touch and stress",
        source: "Dreisoerner et al. (2021)",
        text: "Self-soothing touch was linked to lower cortisol responses, but heart rate and self-reported stress did not differ. Respira is therefore framed as a tactile exploration of touch and guided breathing, not a product that reduces anxiety.",
      },
      {
        title: "Breathing and anxiety",
        source: "Balban et al. (2023)",
        text: "A review of 58 studies found 54 breathing interventions with significant reductions in stress or anxiety, while noting limits in the evidence.",
      },
      {
        title: "Graphic design as experience",
        text: "A raised breathing line works as a visual graphic, a tactile pathway, a movement instruction and a rhythm at once. The graphic is no longer only seen; it is experienced through the body.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovering the problem",
        text: "Observed the hidden emotional gap between receiving medicine and opening it, a moment nobody designs for.",
      },
      {
        step: "02",
        title: "Understanding people",
        text: "Connected emotional wellbeing, breathing, tactile interaction and sustainability to set the design principles.",
      },
      {
        step: "03",
        title: "Designing Respira",
        text: "Developed the pebble-like form, soft matte textures, warm neutral tones and Scandinavian-inspired minimalism through form, scale and layering studies and a physical model.",
      },
      {
        step: "04",
        title: "Prototype to impact",
        text: "Round two used high-quality conceptual renderings. Material testing compares recycled paper pulp with agricultural fibre such as bagasse before a final formulation is chosen.",
      },
    ],
    insight: {
      heading: "Critical reflection",
      text: "The project moved from designing a package to designing a moment of care, calm and connection. Sustainability became more than a biodegradable material: it meant emotional value and avoiding unnecessary complexity. Peer and user feedback validated the emotional direction and showed where the concept could become more accessible and realistic.",
    },
    link: { label: "Pentawards 2026", href: "https://pentawards.com/live/en/page/pentawards-shortlist-2026" },
  },
  {
    id: "audible-budget",
    tab: "The Audible Budget",
    label: "Future of Money Design Awards 2026 · Winner",
    title: "The Audible Budget — what if money could be heard?",
    subtitle: "Speculative civic design · Stage One research and Stage Two pop-up exhibition",
    summary:
      "Responding to the Future of Money open call on music and money, this project explores money as a shared cultural value rather than a transaction. Stage One covers research, experimentation and concept development; Stage Two turns the idea into an interactive pop-up exhibition that translates public value into sound and interaction.",
    stats: [
      { label: "Brief", value: "Music + Money" },
      { label: "Stages", value: "Research → Exhibition" },
      { label: "Platform", value: "Max/MSP" },
      { label: "Recognition", value: "Winner" },
    ],
    question: {
      heading: "Why this project?",
      text: "The brief asked whether money and music could be reinvented as one relationship: what if money behaved like music, and music like money? The project asks how money might be experienced, understood and felt differently in the future.",
    },
    findings: [
      {
        title: "Millennium Gallery visit",
        source: "Bidney Framework · Dr Austin Houldsworth",
        text: "Objects carry meaning beyond appearance, shaped by ideas, values, institutions and social systems. The penny press machine showed money changing from a form of value into emotion and experience: value is never lost, only transformed into memory and meaning.",
      },
      {
        title: "St Luke's Hospice Death Café",
        text: "Open conversations about death and end-of-life care showed that value is rooted in memories, relationships and shared experience, not money. This supported the idea of turning financial value into emotional currency through music.",
      },
      {
        title: "Design for Life and Living",
        source: "Ursula Ankeny, Lab4Living",
        text: "In health-focused design, value is measured through impact, empathy and change rather than money.",
      },
      {
        title: "Community and ideology",
        source: "Graham Nesbitt · Carlos Peralta",
        text: "Design can improve connection and community, and every design decision carries an ideology. The Coca-Cola Life case showed how branding, culture and trust drive a product's rise and fall.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research",
        text: "Gallery, hospice and Superproposition talk visits built a critical view of how value becomes meaning.",
      },
      {
        step: "02",
        title: "Concept",
        text: "Imagined a futuristic artefact where value is converted into sound rather than metal, linking to an interest in audio design.",
      },
      {
        step: "03",
        title: "Prototype",
        text: "Gave each spending category a distinct sonic identity, paired with visual data layers for readability.",
      },
      {
        step: "04",
        title: "Pop-up exhibition",
        text: "Presented the concept as a tangible public experience that turns public budgets into something people can hear.",
      },
    ],
    insight: {
      heading: "Key takeaway",
      text: "Value is never lost. It is simply transformed into memory, meaning and experience. The Audible Budget turns financial information into an immersive, participatory experience that makes public money more accessible.",
    },
    link: { label: "Future of Money Award", href: "https://www.futuremoneyaward.com/" },
  },
];

export default function ResearchPage() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const project = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-32 relative font-sans antialiased selection:bg-signal selection:text-black">
      <div className="fixed top-20 left-1/4 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            Research & Practice
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400">
            Graphic design / Packaging / Civic storytelling
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
          Designing for emotion, accessibility and public understanding.
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed font-normal mb-8">
          Bhanu Partap's research-led design practice explores how visual storytelling, material language and sound can turn complex ideas into meaningful experiences that people can feel, understand and remember.
        </p>

        <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-zinc-950/80 border border-zinc-900 w-fit max-w-full">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer focus:outline-none ${
                activeId === p.id ? "bg-white text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10"
        >
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6 bg-zinc-950/60 p-6 rounded-2xl border border-zinc-900 backdrop-blur-md">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">{project.label}</p>
              <h2 className="text-2xl font-serif text-white leading-snug">{project.title}</h2>
              <p className="text-xs text-zinc-500">{project.subtitle}</p>
              <p className="text-sm leading-relaxed text-zinc-400">{project.summary}</p>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-900">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{s.label}</span>
                    <p className="text-sm font-medium text-zinc-200 mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8 space-y-8">
            <section className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Research question</p>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-white">{project.question.heading}</h3>
              <p className="text-base leading-relaxed text-zinc-300">{project.question.text}</p>
            </section>

            <section>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Key research</p>
              <div className="grid gap-4 md:grid-cols-2">
                {project.findings.map((f) => (
                  <article key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                    <h4 className="text-lg font-serif text-white mb-1">{f.title}</h4>
                    {f.source && <p className="text-[11px] font-mono text-zinc-500 mb-3">{f.source}</p>}
                    <p className="text-sm leading-relaxed text-zinc-400">{f.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">Process</p>
              <div className="grid gap-5 sm:grid-cols-2">
                {project.process.map((p) => (
                  <div key={p.step} className="flex gap-4">
                    <span className="font-mono text-sm text-zinc-600 pt-0.5">{p.step}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                      <p className="text-sm leading-relaxed text-zinc-400">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">{project.insight.heading}</p>
              <p className="max-w-3xl text-base leading-relaxed text-zinc-300">{project.insight.text}</p>
            </section>


            <div className="flex flex-wrap gap-3 pt-2">
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-500 transition-colors"
                >
                  {project.link.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <a
                href="https://www.behance.net/bhanupartap5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-500 transition-colors"
              >
                Behance Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
