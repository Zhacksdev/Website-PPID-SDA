import { motion } from "motion/react";
import svgPaths from "../imports/svg-3nolhqtit4";
import imgGeminiGeneratedImageJob4K8Job4K8Job42 from "figma:asset/ac28d6c2acbb46e09e029591850053ac27e9df7d.png";

// Particle component for magical effect
function Particle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: "50%",
        y: "50%"
      }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        x: x,
        y: y,
      }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }}
      className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full"
      style={{
        boxShadow: "0 0 10px rgba(255,255,255,0.8)"
      }}
    />
  );
}

export default function VideoIntro() {
  const text = "SIDOARJO";
  const letters = text.split("");

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: 1.8 + (i * 0.05),
    duration: 1.5 + Math.random(),
    x: `${(Math.random() - 0.5) * 400}%`,
    y: `${(Math.random() - 0.5) * 400}%`,
  }));

  return (
    <div className="relative size-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background video placeholder - using a gradient animation to simulate video */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
      />

      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="size-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Sidoarjo Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 md:gap-6 px-4"
      >
        {/* Logo Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-1 md:gap-2 relative"
        >
          <div className="h-[100px] md:h-[120px] lg:h-[150px] relative w-[77px] md:w-[92px] lg:w-[115px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt="Sidoarjo Logo"
                className="absolute h-[163.04%] left-[-48.92%] max-w-none top-[-31.67%] w-[199.36%]"
                src={imgGeminiGeneratedImageJob4K8Job4K8Job42}
              />
            </div>
          </div>
          <div className="h-[100px] md:h-[120px] lg:h-[150px] relative w-[131px] md:w-[157px] lg:w-[196px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 101">
              <g>
                <path d={svgPaths.p4c99b00} fill="white" />
                <path d={svgPaths.p1ea77800} fill="white" />
              </g>
            </svg>
          </div>

          {/* Glow effect from monument */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              delay: 1.8,
              duration: 1.2,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-white rounded-full blur-3xl"
          />

          {/* Magical particles emanating from monument */}
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              delay={particle.delay}
              duration={particle.duration}
              x={particle.x}
              y={particle.y}
            />
          ))}

          {/* Ring pulse effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 2, 3],
              opacity: [0.6, 0.3, 0]
            }}
            transition={{
              delay: 1.9,
              duration: 1.5,
              ease: "easeOut"
            }}
            className="absolute inset-0 border-2 border-white rounded-full"
          />
        </motion.div>

        {/* Text - Animated from monument */}
        <motion.div
          className="text-center relative"
        >
          {/* Main Title with letter-by-letter animation */}
          <div className="relative mb-2">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-['Poppins:Bold',sans-serif] tracking-wider">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: -50,
                    scale: 0.5,
                    filter: "blur(10px)",
                    rotateX: -90
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    rotateX: 0
                  }}
                  transition={{
                    delay: 2 + (index * 0.1),
                    duration: 0.6,
                    ease: [0.6, 0.05, 0.01, 0.9]
                  }}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3), 0 0 60px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            {/* Underline glow effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 2.8,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent w-full"
              style={{
                boxShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg lg:text-xl font-['Poppins:Regular',sans-serif]"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.3)"
            }}
          >
            Portal PPID Kabupaten Sidoarjo
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Closing animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ delay: 4.5, duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-white z-20"
      />
    </div>
  );
}