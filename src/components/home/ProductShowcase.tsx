"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Bot,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

/** ─── Product Showcase Section ─── */

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
}

const products: Product[] = [
  {
    id: "web",
    title: "Web Applications",
    subtitle: "Modern & Responsive",
    description:
      "Full-stack web applications built with React, Next.js, and Node.js. Lightning-fast, SEO-optimized, and beautifully designed.",
    features: [
      "Progressive Web Apps",
      "E-Commerce Platforms",
      "SaaS Dashboards",
      "CMS Solutions",
    ],
    icon: <Monitor className="w-7 h-7" />,
    gradient: "from-violet-600 to-indigo-600",
    accentColor: "violet",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on every device.",
    features: [
      "React Native",
      "Flutter Apps",
      "Native iOS/Android",
      "App Store Optimization",
    ],
    icon: <Smartphone className="w-7 h-7" />,
    gradient: "from-fuchsia-600 to-pink-600",
    accentColor: "fuchsia",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure",
    description:
      "Cloud-native architectures on AWS, Azure, and GCP that scale automatically and reduce costs.",
    features: [
      "Microservices",
      "Serverless Functions",
      "Container Orchestration",
      "CI/CD Pipelines",
    ],
    icon: <Cloud className="w-7 h-7" />,
    gradient: "from-cyan-600 to-teal-600",
    accentColor: "cyan",
  },
  {
    id: "design",
    title: "UI/UX Design",
    subtitle: "Human-Centered",
    description:
      "Research-driven design that creates intuitive, accessible, and delightful user experiences.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    icon: <Palette className="w-7 h-7" />,
    gradient: "from-amber-500 to-orange-600",
    accentColor: "amber",
  },
  {
    id: "data",
    title: "Data Engineering",
    subtitle: "Insights That Matter",
    description:
      "End-to-end data solutions from ETL pipelines to real-time analytics dashboards and ML integration.",
    features: [
      "Data Pipelines",
      "Analytics Dashboards",
      "Real-time Processing",
      "ML Integration",
    ],
    icon: <Database className="w-7 h-7" />,
    gradient: "from-emerald-600 to-green-600",
    accentColor: "emerald",
  },
  {
    id: "ai",
    title: "AI Solutions",
    subtitle: "Intelligent Automation",
    description:
      "Custom AI and machine learning solutions that automate workflows and unlock new possibilities.",
    features: [
      "Custom LLM Integration",
      "Computer Vision",
      "NLP Solutions",
      "Predictive Analytics",
    ],
    icon: <Bot className="w-7 h-7" />,
    gradient: "from-rose-600 to-red-600",
    accentColor: "rose",
  },
];

function ProductCard({
  product,
  index,
  isActive,
  onClick,
}: {
  product: Product;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`relative cursor-pointer group rounded-2xl border transition-all duration-500 overflow-hidden ${
        isActive
          ? "border-violet-500/30 bg-white/[0.04] scale-[1.02]"
          : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
      }`}
    >
      <div className="p-6 sm:p-8">
        {/* Icon & Title Row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg`}
          >
            {product.icon}
          </div>
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-colors" />
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-1">
          {product.title}
        </h3>
        <p className="text-violet-400/80 text-sm font-medium mb-3">
          {product.subtitle}
        </p>

        {/* Expandable content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + fi * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <ChevronRight className="w-3 h-3 text-violet-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom gradient line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState<string>("web");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const activeData = products.find((p) => p.id === activeProduct)!;

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-violet-400 text-sm font-mono uppercase tracking-[0.2em] mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Solutions We{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From concept to deployment, we offer comprehensive digital solutions
            that drive your business forward.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isActive={activeProduct === product.id}
              onClick={() => setActiveProduct(product.id)}
            />
          ))}
        </div>

        {/* Featured Product Display */}
        <motion.div
          layout
          className="relative rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Visual */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${activeData.gradient} opacity-20`}
                />
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${activeData.gradient} flex items-center justify-center text-white shadow-2xl`}
                  >
                    <div className="scale-150">{activeData.icon}</div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating dots */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/10"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Right: Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-violet-400 text-sm font-mono uppercase tracking-[0.15em] mb-2 block">
                    {activeData.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {activeData.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {activeData.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {activeData.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 group"
                  >
                    Explore Service
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
