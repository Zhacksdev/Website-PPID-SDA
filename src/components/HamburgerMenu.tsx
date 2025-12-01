import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-3nolhqtit4";
import imgGeminiGeneratedImageJob4K8Job4K8Job42 from "figma:asset/ac28d6c2acbb46e09e029591850053ac27e9df7d.png";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Contact", "FAQ"];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col gap-1.5 p-2 lg:hidden"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-7 h-0.5 bg-white rounded-full"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-7 h-0.5 bg-white rounded-full"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-7 h-0.5 bg-white rounded-full"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full p-6 pt-20">
                {/* Logo in Menu */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="h-[60px] relative w-[46px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt="Logo"
                        className="absolute h-[163.04%] left-[-48.92%] max-w-none top-[-31.67%] w-[199.36%]"
                        src={imgGeminiGeneratedImageJob4K8Job4K8Job42}
                      />
                    </div>
                  </div>
                  <div className="h-[60px] relative w-[78px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 132 101"
                    >
                      <g>
                        <path d={svgPaths.p4c99b00} fill="white" />
                        <path d={svgPaths.p1ea77800} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="font-['Poppins:SemiBold',sans-serif] text-white text-lg py-4 px-4 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                {/* Footer in Menu */}
                <div className="mt-auto pt-8 border-t border-white/20">
                  <p className="font-['Poppins:Regular',sans-serif] text-white/70 text-sm text-center">
                    Portal PPID Kabupaten Sidoarjo
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
