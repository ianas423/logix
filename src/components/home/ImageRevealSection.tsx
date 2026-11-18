"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Code2, Zap, Shield, Globe } from "lucide-react";

/** ─── Image Reveal Animation Section ─── */

interface RevealCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  index: number;
}

function RevealCard({
  title,
  description,
  gradient,
  icon,
  index,
}: RevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Image reveal container */}
      <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-6">
        {/* Gradient background acting as "image" */}
        <div className={`absolute inset-0 ${gradient}`} />

        {/* Animated reveal curtain */}
        <motion.div
          className="absolute inset-0 bg-[#030014]"
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.2,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          style={{ transformOrigin: "right" }}
        />

        {/* Top reveal line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          style={{ transformOrigin: "left" }}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.5 + index * 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4"
          >
            {icon}
          </motion.div>

          {/* Animated mesh pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`grid-${index}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#grid-${index})`}
              />
            </svg>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-violet-600/20 to-transparent" />
      </div>

      {/* Text content with stagger reveal */}
      <motion.h3
        className="text-xl font-semibold text-white mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-sm leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

const capabilities = [
  {
    title: "Custom Development",
    description:
      "Full-stack solutions built from scratch with cutting-edge technologies, tailored precisely to your business needs.",
    gradient:
      "bg-gradient-to-br from-violet-600/40 via-purple-700/30 to-indigo-900/50",
    icon: <Code2 className="w-8 h-8 text-violet-300" />,
  },
  {
    title: "Lightning Performance",
    description:
      "Optimized applications that load instantly and scale effortlessly, delivering exceptional user experiences.",
    gradient:
      "bg-gradient-to-br from-fuchsia-600/40 via-pink-700/30 to-rose-900/50",
    icon: <Zap className="w-8 h-8 text-fuchsia-300" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security protocols and compliance standards built into every layer of your application.",
    gradient:
      "bg-gradient-to-br from-cyan-600/40 via-teal-700/30 to-emerald-900/50",
    icon: <Shield className="w-8 h-8 text-cyan-300" />,
  },
  {
    title: "Global Scale",
    description:
      "Cloud-native architectures designed to serve millions of users worldwide with zero downtime.",
    gradient:
      "bg-gradient-to-br from-amber-600/40 via-orange-700/30 to-red-900/50",
    icon: <Globe className="w-8 h-8 text-amber-300" />,
  },
];

export default function ImageRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-violet-400 text-sm font-mono uppercase tracking-[0.2em] mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Capabilities That{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Set Us Apart
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We combine technical excellence with creative thinking to deliver
            solutions that make a real impact.
          </motion.p>
        </div>

        {/* Reveal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, i) => (
            <RevealCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
