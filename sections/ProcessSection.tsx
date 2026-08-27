"use client";

import React from "react";
import { motion } from "framer-motion";
import { Workflow, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/experience";
import { IconMapper } from "@/components/IconMapper";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#070b14] light:bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Development Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            How I <span className="gradient-text">Deliver Value</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 leading-relaxed">
            A structured, quality-driven engineering process from concept to production release.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 rounded-3xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group glow-card"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconMapper name={step.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white light:text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-gray-400 light:text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-5 h-5 text-cyan-500/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
