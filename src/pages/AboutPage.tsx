import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Lightbulb, 
  Target, 
  Layers,
  Award,
  Sparkles
} from "lucide-react";
import { AnimeCounter } from "@/components/ui/anime-counter";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";
import exhibitionProfile from "@/Assets/exhibition-profile.jpg";
import aboutProfile from "@/Assets/about-profile.jpg";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

const DESIGN_VALUES = [
  {
    icon: <Target className="h-5 w-5 text-zinc-100" />,
    title: "Story-Led",
    description: "I begin with the narrative behind a brand or project, ensuring the design communicates the right feeling before the visual system is developed."
  },
  {
    icon: <Heart className="h-5 w-5 text-zinc-100" />,
    title: "Emotion-Driven",
    description: "Strong design should create a connection. I focus on audience experience, tactile cues and memorable interaction points that feel human and considered."
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-zinc-100" />,
    title: "Conceptual",
    description: "I enjoy exploring ideas beyond the obvious, testing material language, symbolism and visual narratives that make a brand or product memorable."
  },
  {
    icon: <Layers className="h-5 w-5 text-zinc-100" />,
    title: "Systematic",
    description: "Great execution depends on consistency. I build cohesive design systems that remain flexible across digital, print and motion applications."
  }
];

const QUICK_STATS = [
  { label: "Years of Experience", target: 3, suffix: "+", description: "Creative practice" },
  { label: "Projects Delivered", target: 20, suffix: "+", description: "Brand & packaging work" },
  { label: "Awards", target: 2, suffix: "", description: "Recognised in 2026" },
  { label: "Client Focus", target: 100, suffix: "%", description: "Story-first communication" }
];

const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    role: "Freelance Graphic Designer & Video Editor",
    company: "The Digite",
    location: "Remote / India",
    description: "Provided creative support across branding, event communication and motion-led design projects, translating briefs into strong visual concepts and ready-to-use assets.",
    highlights: [
      "Event branding",
      "Visual storytelling",
      "Creative asset development",
      "Client feedback management"
    ]
  },
  {
    period: "2024 – 2025",
    role: "Graphic Designer",
    company: "42Works",
    location: "Mohali, India",
    description: "Developed visual communication assets for client projects, refining layouts, typography and imagery to satisfy strategic and creative requirements across digital and print formats.",
    highlights: ["Brand assets", "Event visuals", "Creative refinement", "Project delivery"]
  },
  {
    period: "2023 – 2024",
    role: "Graphic Designer & Video Editor",
    company: "Crestbell",
    location: "India",
    description: "Created static and motion content to communicate brand messages across visual and digital formats, working on graphic design and video content in parallel to build a consistent creative voice.",
    highlights: [
      "Brand communication",
      "Video editing",
      "Creative consistency",
      "Freelance continuation"
    ]
  }
];

const EDUCATION_HISTORY: EducationItem[] = [
  {
    period: "2025 – 2026",
    degree: "MA Design (Graphics)",
    institution: "Sheffield Hallam University, UK",
    location: "Sheffield, UK",
    description: "Postgraduate design practice focused on graphic communication, visual systems, concept development and research-led design.",
    highlights: ["Graphic Communication", "Research-led design", "Visual systems"]
  },
  {
    period: "2021 – 2024",
    degree: "BSc Animation & Game Design",
    institution: "RIMT University, India",
    location: "India",
    description: "Developed a foundation in animation, visual storytelling, creative production and digital design, graduating with strong academic recognition.",
    highlights: ["Animation", "Visual storytelling", "Creative production"]
  }
];

const SKILLS = [
  "Brand Identity",
  "Graphic Design",
  "Event Branding",
  "Packaging Concepts",
  "Typography",
  "Layout",
  "Visual Storytelling",
  "Presentation Design",
  "Video Editing",
  "Motion Graphics",
  "Photography",
  "Adobe Creative Suite"
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [photoMode, setPhotoMode] = useState<"exhibition" | "studio">("studio");

  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-signal selection:text-black overflow-hidden">

      {/* Hero Intro with Senior UI/UX Portrait Showcase */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Editorial Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span>Available for freelance & design opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal tracking-tight text-white">
              Designing stories that move <br className="hidden sm:inline" />
              <span className="font-serif italic text-zinc-300">
                brands, people & ideas.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light">
              I'm Bhanu Partap, a multidisciplinary graphic designer exploring the intersection of brand identity, packaging, motion and speculative design.
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>Sheffield, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <GraduationCap className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>MA Design (Graphics)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>Brand & Packaging Design</span>
              </div>
            </div>
          </div>

          {/* Right: Senior UI/UX Designer Portrait Showcase Card */}
          <div className="lg:col-span-5">
            <AnimeTiltCard maxTilt={5} scale={1.01} glare={true} className="w-full">
              <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2.5 shadow-2xl overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-900 shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={photoMode}
                      src={photoMode === "exhibition" ? exhibitionProfile : aboutProfile}
                      alt={photoMode === "exhibition" ? "Bhanu Partap presenting Respira" : "Bhanu Partap in Creative Studio"}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105 ${
                        photoMode === "exhibition" ? "object-[60%_50%]" : "object-[50%_20%]"
                      }`}
                    />
                  </AnimatePresence>

                  {/* Top Edge Shadow for Badge Readability */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Top Bar: Status & Mode Switcher */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${photoMode === "exhibition" ? "bg-signal" : "bg-signal"}`} />
                      <span>{photoMode === "exhibition" ? "Exhibition Showcase" : "Studio Workspace"}</span>
                    </div>

                    {/* Segmented Switcher */}
                    <div className="flex items-center bg-black/70 backdrop-blur-md border border-white/10 rounded-full p-0.5">
                      <button
                        onClick={() => setPhotoMode("exhibition")}
                        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
                          photoMode === "exhibition" 
                            ? "bg-white text-black shadow-sm" 
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Exhibition
                      </button>
                      <button
                        onClick={() => setPhotoMode("studio")}
                        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
                          photoMode === "studio" 
                            ? "bg-white text-black shadow-sm" 
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Studio
                      </button>
                    </div>
                  </div>

                  {/* Bottom Vignette for Caption */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

                  {/* Bottom Metadata Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-base tracking-wide">
                        Bhanu Partap
                      </h3>
                      <p className="text-zinc-300 text-xs mt-0.5 font-light">
                        {photoMode === "exhibition" 
                          ? "Respira · Pentawards 2026 Bronze" 
                          : "Graphic Design • Packaging • Motion"}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/10">
                      {photoMode === "exhibition" ? "2025–Now" : "Studio"}
                    </span>
                  </div>
                </div>

                {/* Micro Sub-card Footer with Quick Status */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="text-zinc-500">Focus:</span>
                    <strong className="text-zinc-200 font-medium">Brand Identity & Packaging</strong>
                  </span>
                  <span className="text-zinc-500 font-mono">Sheffield, UK</span>
                </div>

              </div>
            </AnimeTiltCard>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* LEFT: Story & Values */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Story */}
          <div className="rounded-xl bg-surface border border-zinc-900 p-6 sm:p-8 space-y-5">
            <h2 className="text-sm font-semibold text-white">
              My story
            </h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                I'm <strong className="text-white font-medium">Bhanu Partap</strong>, a multidisciplinary graphic designer exploring the intersection of brand identity, packaging, motion and speculative design. My practice combines visual storytelling with research-led thinking to create meaningful design experiences that communicate ideas, challenge conventions and connect with people.
              </p>
              <p>
                Originally from Ludhiana, India, and now based in Sheffield, UK, I bring together industry experience, freelance practice and postgraduate design research. My work has been recognised by the Future of Money Design Awards 2026, where I was named a winner, and the Pentawards 2026, where I received a Bronze award in Student Concepts.
              </p>
              <p>
                From building visual identities and event branding to exploring future-facing concepts, I'm interested in how design can make complex ideas tangible, human and memorable. I approach each project as an opportunity to question the expected, experiment with new perspectives and create visual systems with purpose.
              </p>
            </div>
          </div>

          {/* Design Values */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-white">
              What I value in design
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESIGN_VALUES.map((val, idx) => (
                <AnimeTiltCard key={idx} maxTilt={6} scale={1.015} glare={true} className="h-full">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900/60 transition-all duration-300 hover:border-zinc-800 flex flex-col justify-between h-full group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-zinc-900 group-hover:bg-zinc-800 transition-colors rounded-lg border border-zinc-800">
                        {val.icon}
                      </div>
                      <h3 className="font-medium text-[15px] text-white">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">
                      {val.description}
                    </p>
                  </div>
                </AnimeTiltCard>
              ))}
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-900/80 pb-3">
              <h2 className="text-sm font-semibold text-white">
                Experience & Education
              </h2>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 focus:outline-none ${
                    activeTab === "experience" 
                      ? "bg-white text-black font-medium" 
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <Briefcase className="h-3 w-3" />
                  <span>Work</span>
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 focus:outline-none ${
                    activeTab === "education" 
                      ? "bg-white text-black font-medium" 
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <GraduationCap className="h-3 w-3" />
                  <span>Education</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="exp-timeline"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {WORK_EXPERIENCE.map((exp, idx) => (
                      <div 
                        key={idx}
                        className="rounded-xl bg-surface border border-zinc-900 p-5 relative overflow-hidden transition-all duration-300 hover:border-zinc-800"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                          <div>
                            <span className="text-xs text-zinc-500 block mb-1">
                              {exp.period}
                            </span>
                            <h3 className="text-base font-semibold text-white">
                              {exp.role}
                            </h3>
                            <span className="text-xs text-zinc-400">
                              {exp.company} · {exp.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-400 leading-normal mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
                          {exp.highlights.map((hlt, hIdx) => (
                            <span 
                              key={hIdx} 
                              className="px-2.5 py-1 text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-300 rounded"
                            >
                              {hlt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="edu-timeline"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {EDUCATION_HISTORY.map((edu, idx) => (
                      <div 
                        key={idx}
                        className="rounded-xl bg-surface border border-zinc-900 p-5 relative overflow-hidden transition-all duration-300 hover:border-zinc-800"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                          <div>
                            <span className="text-xs text-zinc-500 block mb-1">
                              {edu.period}
                            </span>
                            <h3 className="text-base font-semibold text-white">
                              {edu.degree}
                            </h3>
                            <span className="text-xs text-zinc-400">
                              {edu.institution} · {edu.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-400 leading-normal mb-4">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
                          {edu.highlights.map((hlt, hIdx) => (
                            <span 
                              key={hIdx} 
                              className="px-2.5 py-1 text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-300 rounded"
                            >
                              {hlt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* RIGHT: Stats & Skills */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Stats */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">
              At a glance
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {QUICK_STATS.map((stat, idx) => (
                <AnimeTiltCard key={idx} maxTilt={8} scale={1.02} glare={true} className="h-full">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between items-start text-left group hover:border-zinc-800 transition-colors h-full">
                    <span className="text-4xl sm:text-5xl font-light text-white select-none">
                      <AnimeCounter target={stat.target} suffix={stat.suffix} duration={1600} />
                    </span>
                    
                    <div className="mt-3.5 space-y-0.5">
                      <span className="text-xs text-zinc-400 block font-medium">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-zinc-600 block leading-tight">
                        {stat.description}
                      </span>
                    </div>
                  </div>
                </AnimeTiltCard>
              ))}
            </div>
          </div>

          {/* Skills — simple tag cloud with magnetic spring physics */}
          <div className="rounded-xl border border-zinc-800 bg-surface p-6 relative overflow-hidden">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-white">
                Skills & tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, idx) => (
                  <Magnetic key={idx} strength={0.18} bounce={0.25}>
                    <span
                      className="inline-block px-3 py-1.5 text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 rounded-lg hover:border-zinc-700 hover:text-white transition-colors cursor-default select-none"
                    >
                      {skill}
                    </span>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* CV Download */}
          <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl text-center space-y-3 group">
            <Award className="h-5 w-5 text-zinc-400 mx-auto group-hover:text-white transition-colors" />
            <div>
              <h4 className="text-sm font-medium text-white">Looking for my CV?</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-normal mt-1">
                Download a copy of my resume with project details and references.
              </p>
            </div>
            <Magnetic strength={0.3} bounce={0.3} className="w-full">
              <button 
                onClick={() => alert("CV download coming soon! Please reach out via email for now.")}
                className="px-4 py-2 w-full text-xs bg-signal text-black hover:bg-white transition-all cursor-pointer focus:outline-none rounded-lg font-medium shadow-md hover:shadow-white/10"
              >
                Download CV
              </button>
            </Magnetic>
          </div>

        </div>
      </div>

    </div>
  );
}
