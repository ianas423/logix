"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/** ─── 3D Parallax Scrolling Section ─── */

const stats = [
  { label: "Projects Delivered", value: "200+", icon: CheckCircle2 },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Years Experience", value: "8+", icon: Clock },
  { label: "Awards Won", value: "25+", icon: Award },
];

const processes = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, users, and goals to define the perfect strategy.",
    color: "from-violet-500 to-purple-500",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Craft intuitive interfaces and experiences that users love to interact with.",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Build robust, scalable solutions using cutting-edge technologies and best practices.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    step: "04",
    title: "Deployment",
    description:
      "Launch with confidence — monitored, optimized, and ready for the world.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const floatingY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const floatingY3 = useTransform(scrollYProgress, [0, 1], [100, -60]);
  const rotateCard = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const scaleSection = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-violet-600/5 blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px]" />
      </motion.div>

      {/* Floating 3D elements */}
      <motion.div
        style={{ y: floatingY1 }}
        className="absolute top-32 right-[15%] w-20 h-20 rounded-xl border border-violet-500/10 bg-violet-500/5 backdrop-blur-sm hidden lg:block"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-violet-400/50" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: floatingY2 }}
        className="absolute top-60 left-[10%] w-16 h-16 rounded-full border border-purple-500/10 bg-purple-500/5 backdrop-blur-sm hidden lg:block"
      />

      <motion.div
        style={{ y: floatingY3 }}
        className="absolute bottom-40 right-[20%] w-24 h-24 rounded-2xl border border-fuchsia-500/10 bg-fuchsia-500/5 backdrop-blur-sm rotate-12 hidden lg:block"
      />

      <motion.div style={{ scale: scaleSection }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Row with 3D perspective */}
          <div className="mb-32">
            <motion.div
              style={{ rotateX: rotateCard }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-500 hover:bg-white/[0.04] text-center overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-violet-500/5 to-transparent" />

                    <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-4" />
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-white mb-2"
                      initial={{ scale: 0.5 }}
                      animate={sectionInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block text-violet-400 text-sm font-mono uppercase tracking-[0.2em] mb-4"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              From Vision to{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Reality
              </span>
            </motion.h2>
          </div>

          {/* Process Cards with Parallax */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, i) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 60 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.7 + i * 0.15,
                  ease: "easeOut",
                }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all duration-500 hover:bg-white/[0.04] h-full overflow-hidden">
                  {/* Step number */}
                  <div
                    className={`text-6xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent opacity-20 mb-4`}
                  >
                    {process.step}
                  </div>

                  {/* Connecting line */}
                  {i < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                  )}

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {process.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-violet-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${process.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-3xl`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mt-16"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors group"
            >
              Learn more about our approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
