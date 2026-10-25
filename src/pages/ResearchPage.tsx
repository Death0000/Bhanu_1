import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  ExternalLink,
  Palette,
  Sparkles,
  Volume2,
} from "lucide-react";

const researchPillars = [
  {
    title: "Design as communication",
    description:
      "Bhanu explores how visual language can make complex ideas feel human, clear and emotionally resonant.",
    icon: Palette,
  },
  {
    title: "Accessibility & narrative",
    description:
      "His work considers how information can be experienced through form, sound and interaction, not just text or charts.",
    icon: Volume2,
  },
  {
    title: "Research-led practice",
    description:
      "Each project begins with context, audience and meaning — translating research into a strong visual and material story.",
    icon: Compass,
  },
];

const standoutWork = [
  {
    label: "Future of Money Award 2026",
    title: "The Audible Budget",
    description:
      "A speculative civic-design concept that turns public-budget data into an audible, participatory experience for a broader audience.",
  },
  {
    label: "Pentawards 2026 Bronze",
    title: "Respira",
    description:
      "A healthcare packaging concept shaped by touch, calm and emotional interaction — reframing packaging as part of the product experience.",
  },
  {
    label: "Independent practice",
    title: "DZNSTUDEO",
    description:
      "An ongoing multidisciplinary studio practice blending branding, packaging, motion and story-led visual systems.",
  },
];

const researchNotes = [
  "Story-led concept development sits at the centre of Bhanu's design practice.",
  "The work balances research, emotion and clarity across branding, packaging and public communication.",
  "Accessibility, audience experience and tactile interaction remain core to each project direction.",
];

export default function ResearchPage() {
  return (
    <div className="w-full min-h-screen bg-[#070708] text-white pt-28 pb-32 relative font-sans antialiased selection:bg-white/10 selection:text-white">
      <div className="fixed top-20 left-1/4 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Focus</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Brand & Packaging</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Method</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Research-led</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Award</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Future of Money</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Studio</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">DZNSTUDEO</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-6 bg-zinc-950/60 p-6 rounded-2xl border border-zinc-900 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Research Themes</span>
              <BookOpen className="w-4 h-4 text-zinc-500" />
            </div>

            <div className="space-y-3">
              {researchPillars.map((item) => (
                <div key={item.title} className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-3">
                  <div className="flex items-center gap-2 text-sm text-white mb-2">
                    <item.icon className="w-4 h-4 text-zinc-300" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-8">
          <section className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Research focus</p>
            <h2 className="text-2xl sm:text-3xl font-serif mb-5 text-white">Turning information into experience.</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {researchNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm leading-relaxed text-zinc-300">
                  {note}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {standoutWork.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500 mb-3">{project.label}</p>
                <h3 className="text-xl font-serif text-white mb-3">{project.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>
              </motion.article>
            ))}
          </section>

          <section className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Key insight</p>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">
              The strongest design does not just present a message — it makes people feel it.
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
              Bhanu's practice combines theory, visual systems and creative experimentation to develop work that is both communicative and memorable. Whether the context is civic data, product packaging or a studio identity, the goal remains consistent: create experience-led design that communicates with clarity, emotion and intention.
            </p>
          </section>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.futuremoneyaward.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-500 transition-colors"
            >
              Future of Money Award
              <ArrowUpRight className="w-4 h-4" />
            </a>
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
      </div>
    </div>
  );
}
