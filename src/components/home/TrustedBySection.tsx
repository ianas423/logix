"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** ─── Trusted By / Clients Marquee Section ─── */

const clients = [
  "TechVista",
  "NovaStar",
  "QuantumLeap",
  "DataForge",
  "CloudNine",
  "SynapseAI",
  "NexGen",
  "PulseDigital",
  "VelocityIO",
  "HorizonX",
];

export default function TrustedBySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 text-sm uppercase tracking-[0.2em]"
        >
          Trusted by innovative companies worldwide
        </motion.p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex"
        >
          {/* First set */}
          <div className="flex shrink-0 gap-16 marquee-scroll">
            {clients.map((client) => (
              <span
                key={client}
                className="shrink-0 text-2xl font-bold text-gray-700/50 hover:text-gray-500 transition-colors duration-300 cursor-default select-none"
              >
                {client}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div
            className="flex shrink-0 gap-16 marquee-scroll ml-16"
            aria-hidden="true"
          >
            {clients.map((client) => (
              <span
                key={`${client}-dup`}
                className="shrink-0 text-2xl font-bold text-gray-700/50 hover:text-gray-500 transition-colors duration-300 cursor-default select-none"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
