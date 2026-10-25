import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";
import audibleBudgetImage from "@/Assets/audible-budget.jpg";
import respiraCampaignImage from "@/Assets/respira-campaign.jpg";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  image?: string;
  imageAlt?: string;
  heroText: string;
  stats: { label: string; value: string }[];
  process: {
    research: string;
    design: string;
    prototype: string;
    outcome: string;
  };
  narrative: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "respira",
    company: "Respira",
    industry: "Packaging Design",
    image: respiraCampaignImage,
    imageAlt: "Respira campaign showing the pebble-inspired packaging in use",
    heroText: "Designing a packaging experience that slows the moment down and turns routine use into calm interaction.",
    stats: [
      { label: "Recognition", value: "Pentawards Bronze" },
      { label: "Focus", value: "Tactile UX" },
      { label: "Material", value: "Moulded Fibre" }
    ],
    process: {
      research: "Explored how packaging can act as part of the product experience, not just a container, with emotional and sensory cues at the centre of the concept.",
      design: "Developed a pebble-inspired form, soft breathing-wave embossing and a reduced visual language to create a calmer, more tactile interface.",
      prototype: "Built packaging concepts and presentation materials to test form, interaction and the emotional tone of opening and use.",
      outcome: "Created a distinctive healthcare-packaging concept that won a Bronze at Pentawards 2026, positioned around calm, touch and meaningful interaction."
    },
    narrative: "Respira is a concept-led packaging exploration that reframes packaging as an emotional and tactile interface for everyday product use."
  },
  {
    id: "audible-budget",
    company: "The Audible Budget",
    industry: "Speculative Civic Design",
    image: audibleBudgetImage,
    imageAlt: "The Audible Budget concept poster featuring a red sound device",
    heroText: "Making public spending accessible, audible and tangible through narrative sound and data storytelling.",
    stats: [
      { label: "Award", value: "Winner" },
      { label: "Platform", value: "Max/MSP" },
      { label: "Focus", value: "Accessibility" }
    ],
    process: {
      research: "Investigated how public budget information is communicated and why financial narratives often remain inaccessible or disengaging for the public.",
      design: "Designed a sound-based civic prototype where each spending category carried a distinct sonic identity, paired with visual data layers for readability.",
      prototype: "Developed a speculative installation concept with soundscapes and interactive public engagement, bringing together data, emotion and participation.",
      outcome: "Won the Future of Money Award 2026 and sparked a conversation around the role of sound, accessibility and civic communication in public information design."
    },
    narrative: "The Audible Budget is a speculative project that asks: what if public money could be heard, not just read? It turns financial information into an immersive experience."
  },
  {
    id: "dznstudeo",
    company: "DZNSTUDEO",
    industry: "Independent Creative Practice",
    heroText: "Building a multidisciplinary studio practice that turns stories into branding, motion, packaging and visual systems.",
    stats: [
      { label: "Practice", value: "Ongoing" },
      { label: "Disciplines", value: "5+" },
      { label: "Approach", value: "Story-led" }
    ],
    process: {
      research: "Started with the story and context before deciding which medium — identity, motion, packaging or editorial — best served the idea.",
      design: "Built a visual practice centred on storytelling, brand systems and multidisciplinary execution across graphic design and moving image.",
      prototype: "Translated concepts into portfolio, campaign and studio identity materials that connect the visual language to the narrative behind each project.",
      outcome: "Established DZNSTUDEO as a coherent creative practice rooted in rhythm, clarity and audience-focused communication."
    },
    narrative: "DZNSTUDEO reflects Bhanu’s studio identity — a design practice built around multiple disciplines, with each project shaped by the story it needs to tell."
  }
];

export default function UseCasesPage() {
  const [activeStudyId, setActiveStudyId] = useState<string>("dhruthzuci");
  const [activePhase, setActivePhase] = useState<"research" | "design" | "prototype" | "outcome">("research");

  const currentStudy = CASE_STUDIES.find((cs) => cs.id === activeStudyId) || CASE_STUDIES[0];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight text-white mb-4">
          Portfolio
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Selected projects from my work as a UI/UX designer — from enterprise platforms to freelance branding.
        </p>
      </div>

      {/* Navigation tabs with magnetic hover */}
      <div className="max-w-7xl mx-auto mb-8 pb-1 border-b border-zinc-900/80 flex gap-4 overflow-x-auto">
        {CASE_STUDIES.map((cs) => (
          <Magnetic key={cs.id} strength={0.2} bounce={0.25}>
            <button
              onClick={() => {
                setActiveStudyId(cs.id);
                setActivePhase("research");
              }}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-all relative shrink-0 focus:outline-none cursor-pointer ${
                activeStudyId === cs.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {activeStudyId === cs.id && (
                <motion.span
                  layoutId="case-tab-border"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {cs.company}
            </button>
          </Magnetic>
        ))}
      </div>

      {/* Main Study Details */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Narrative + Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-xs text-zinc-500">
              {currentStudy.industry}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-snug tracking-tight text-white">
              {currentStudy.heroText}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {currentStudy.narrative}
            </p>
          </div>

          {currentStudy.image && (
            <img
              src={currentStudy.image}
              alt={currentStudy.imageAlt}
              className="w-full max-h-[420px] rounded-2xl border border-zinc-900 bg-zinc-950 object-contain"
            />
          )}

          {/* Stats with 3D Anime tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentStudy.stats.map((stat, i) => (
              <AnimeTiltCard key={i} maxTilt={7} scale={1.02} glare={true}>
                <div className="min-w-0 p-4 rounded-xl bg-[#0d0d0f] border border-zinc-900 flex flex-col justify-center items-center text-center h-full">
                  <span className="max-w-full break-words text-lg sm:text-xl font-light leading-tight text-white">{stat.value}</span>
                  <span className="text-[11px] text-zinc-500 mt-2 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </AnimeTiltCard>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-4">
            <p className="text-sm text-zinc-400">
              More projects, ideas and experiments live on Behance.
            </p>
            <a
              href="https://www.behance.net/bhanupartap5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
            >
              Explore my Behance
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT: Process */}
        <div className="lg:col-span-7">
          <AnimeTiltCard maxTilt={3} scale={1.005} glare={false}>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0f] p-5 sm:p-7 relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white">
                  My process
                </h3>
              </div>

              {/* Phase buttons with magnetic micro-reactions */}
              <div className="grid grid-cols-4 gap-2 mb-6 border-b border-zinc-900 pb-4">
                {[
                  { id: "research", label: "Research" },
                  { id: "design", label: "Design" },
                  { id: "prototype", label: "Prototype" },
                  { id: "outcome", label: "Outcome" }
                ].map((phase) => {
                  const isActive = activePhase === phase.id;
                  return (
                    <Magnetic key={phase.id} strength={0.2} bounce={0.25}>
                      <button
                        onClick={() => setActivePhase(phase.id as any)}
                        className={`w-full text-center py-2.5 rounded-lg transition-all focus:outline-none text-xs cursor-pointer ${
                          isActive 
                            ? "bg-white text-black font-medium" 
                            : "bg-zinc-950 text-zinc-500 hover:text-zinc-300 border border-zinc-900"
                        }`}
                      >
                        {phase.label}
                      </button>
                    </Magnetic>
                  );
                })}
              </div>

            {/* Phase content */}
            <div className="h-32 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {currentStudy.process[activePhase]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            </div>
          </AnimeTiltCard>
        </div>

      </div>

    </div>
  );
}
