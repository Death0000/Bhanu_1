import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import brandLogo from "../../Assets/brand-logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="verta-footer" className="relative border-t border-zinc-900 bg-black text-zinc-500 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Left Side: Brand */}
        <span className="flex items-center gap-3">
          <img src={brandLogo} alt="B'zn" className="h-5 w-auto" />
          <span className="text-xs text-zinc-500">Design Beyond the Obvious.</span>
        </span>

        {/* Center: Copyright */}
        <span className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Bhanu Partap. All rights reserved.
        </span>

        {/* Right Side: Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-signal cursor-pointer transition-colors duration-300"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </footer>
  );
}
