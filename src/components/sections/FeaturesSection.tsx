import React from "react";
import { ArrowUpRight } from "lucide-react";
import thinkBiggerImg from "@/Assets/think-bigger.png";
import multitaskerImg from "@/Assets/multitasker.png";
import photographerImg from "@/Assets/photographer.png";
import { Magnetic } from "@/components/ui/anime-magnetic";

export default function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const row1Icons = [
    { name: "Adobe Photoshop", label: "Ps" },
    { name: "Adobe Illustrator", label: "Ai" },
    { name: "Adobe InDesign", label: "Id" },
    { name: "Adobe Premiere Pro", label: "Pr" },
    { name: "Adobe After Effects", label: "Ae" }
  ];

  const row2Icons = [
    { name: "Adobe After Effects", label: "Ae" },
    { name: "Adobe Premiere Pro", label: "Pr" },
    { name: "Adobe InDesign", label: "Id" },
    { name: "Adobe Illustrator", label: "Ai" },
    { name: "Adobe Photoshop", label: "Ps" }
  ];

  const renderIcon = (item: { name: string; label: string }) => (
    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md border-[1.5px] border-white/90 text-[11px] sm:text-xs font-bold leading-none tracking-tight text-white/90">
      {item.label}
    </span>
  );

  return (
    <section
      id="bhanu-features-section"
      ref={containerRef}
      className="w-full bg-black text-white font-sans antialiased relative overflow-hidden lg:h-screen flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 selection:bg-signal selection:text-black"
    >
      {/* Top Header Row Block */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 lg:mb-10 w-full z-10 relative">
        <div className="max-w-3xl flex flex-col gap-3">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight text-white font-sans">
            How I Think About Design
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60">
            I see design as a way to turn ideas into memorable visual experiences. My process starts with the story, the audience, and the emotional tone behind the work before I translate that into brand systems, packaging concepts, and motion-led communication.
          </p>
        </div>
        
        {/* Action CTA Button */}
        <Magnetic strength={0.3} bounce={0.3}>
          <button className="bg-signal text-black text-[13px] sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white transition-all duration-300 active:scale-95 flex items-center gap-2 group shrink-0 self-start lg:self-center mt-2 lg:mt-0 cursor-pointer">
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2} />
          </button>
        </Magnetic>
      </div>

      {/* Responsive Grid System: 3 columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1 items-stretch min-h-0 w-full z-10 relative mb-2">
        
        {/* COLUMN 1: BACKGROUND CARD */}
        <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[350px] lg:h-full shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={photographerImg}
              alt="Photographer"
              className="absolute inset-0 object-cover w-full h-full opacity-85 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/45" />
          </div>

          {/* Section label — clean, no sparkles */}
          <div className="flex items-center justify-center z-10 relative">
            <span className="text-[12px] text-white/60 font-medium tracking-wide">
              Background
            </span>
          </div>

          {/* Career Journey Timeline bottom */}
          <div className="z-10 relative mt-auto border-t border-white/10 pt-5">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-3.5 text-xs text-white/80">
              {/* Row 1 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2024–Now</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">MA Graphic Design</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">Sheffield</span>

              {/* Row 2 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2024–2025</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">Graphic Designer</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">42Works</span>

              {/* Row 3 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2021–2024</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">BSc Animation & Game Design</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">RIMT</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: STACKED DOUBLE CARDS */}
        <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-[auto_1fr] gap-4 md:gap-5 h-full">
          {/* Top: Philosophy Card */}
          <div className="rounded-2xl bg-concrete p-5 md:p-6 relative overflow-hidden flex flex-col justify-between gap-4 border border-black/10 shadow-md">
            <div className="flex items-center gap-2 z-10 relative justify-start">
              <span className="text-[12px] text-black/70 font-medium tracking-wide">
                Philosophy
              </span>
            </div>

            <blockquote className="text-[13px] sm:text-[13.5px] leading-[1.65] text-black/90 z-10 relative font-sans font-medium my-1.5">
              "Design starts with a story. The work becomes stronger when the message, the audience and the emotion are all anchored in the same idea."
            </blockquote>

            <div className="z-10 relative text-xs text-black/75 font-sans mt-auto">
              <strong className="text-black font-semibold">Bhanu Partap</strong>, Graphic Designer
            </div>
          </div>

          {/* Bottom: Image Card — replaced fake 10M+ stat */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[170px] sm:min-h-0 lg:h-full shadow-lg">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={multitaskerImg}
                alt="Multitasker"
                className="absolute inset-0 object-cover object-[center_28%] sm:object-center w-full h-full opacity-85 group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/30" />
            </div>

            <div className="m-auto grid grid-cols-2 gap-4 text-center z-10 relative w-full">
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white select-none drop-shadow-md font-bold">
                  50+
                </span>
                <p className="text-white/80 text-[12px] font-medium tracking-wide mt-1">
                  Projects delivered
                </p>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white select-none drop-shadow-md font-bold">
                  50+
                </span>
                <p className="text-white/80 text-[12px] font-medium tracking-wide mt-1">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: STACKED DOUBLE CARDS */}
        <div className="grid grid-rows-1 lg:grid-rows-[1fr_auto] gap-4 md:gap-5 h-full">
          {/* Top: Daily Software Skills Card */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[220px] lg:h-full shadow-lg">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={thinkBiggerImg}
                alt="Think Bigger"
                className="absolute inset-0 object-cover w-full h-full opacity-85 group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/35" />
            </div>

            <div className="flex items-center justify-center z-10 relative w-full">
              <span className="text-[12px] text-white/60 font-medium tracking-wide">
                Tools I use daily
              </span>
            </div>

            {/* Seamless Double-layer Scrolling Marquees */}
            <div className="z-10 relative mt-auto space-y-3.5 pt-8 overflow-hidden w-full">
              {/* Row 1: Leftward infinite marquee */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-3 w-max animate-marquee-left">
                  {row1Icons.map((item, idx) => (
                    <div
                      key={`row1-orig-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                  {row1Icons.map((item, idx) => (
                    <div
                      key={`row1-dup-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Rightward infinite marquee */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-3 w-max animate-marquee-right">
                  {row2Icons.map((item, idx) => (
                    <div
                      key={`row2-orig-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                  {row2Icons.map((item, idx) => (
                    <div
                      key={`row2-dup-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Contact Card */}
          <div className="rounded-2xl bg-concrete p-5 md:p-6 relative overflow-hidden flex flex-col justify-between border border-black/10 min-h-[160px] shadow-md gap-4">
            <div className="flex items-center justify-between w-full z-10 relative">
              <span className="text-[12px] text-black/70 font-medium tracking-wide">
                Get in touch
              </span>

              <Magnetic strength={0.35} bounce={0.3}>
                <a
                  href="mailto:Bhanupartap1711@gmail.com"
                  className="h-9 w-9 rounded-full bg-black hover:bg-black/80 flex items-center justify-center transition-all border border-black active:scale-95 group focus:outline-none cursor-pointer"
                >
                  <ArrowUpRight className="h-4 w-4 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
                </a>
              </Magnetic>
            </div>

            {/* Direct personal details */}
            <div className="z-10 relative mt-auto flex flex-col gap-1.5 pt-4">
              <a
                href="mailto:Bhanupartap1711@gmail.com"
                className="text-[15px] sm:text-[17px] font-medium text-black/90 font-sans hover:text-black hover:underline transition-colors block w-fit max-w-full break-all select-all"
              >
                Bhanupartap1711@gmail.com
              </a>
              <a
                href="tel:+447352664141"
                className="text-[14px] sm:text-base text-black/70 font-sans hover:text-black/80 transition-colors block w-fit whitespace-nowrap select-all"
              >
                +44 7352 664141
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
