"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Award, CheckCircle, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { whyMeCards } from "@/data/experience";
import { IconMapper } from "@/components/IconMapper";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14] light:bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            Bridging Design Fidelity with <span className="gradient-text">Technical Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 leading-relaxed">
            Discover my background, engineering principles, and what drives my passion for building modern web products.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-gray-300 light:text-gray-700 leading-relaxed"
          >
            <div className="p-8 rounded-3xl bg-white/5 light:bg-white border border-white/10 light:border-black/10 shadow-xl backdrop-blur-md space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Frontend Engineering at Scale</span>
              </h3>
              <p className="text-base text-gray-300 light:text-gray-700">
                {personalInfo.aboutDetailed}
              </p>
              <p className="text-sm text-gray-400 light:text-gray-600">
                Whether creating real-time analytical dashboards, high-converting e-commerce web apps, or AI-assisted SaaS platforms, I focus on clean component abstractions, strict responsive design, accessible markup, and Core Web Vitals optimization.
              </p>
            </div>

            {/* Personal Interests Pill Cloud */}
            <div className="p-6 rounded-3xl bg-white/5 light:bg-white border border-white/10 light:border-black/10 shadow-lg space-y-3">
              <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500" /> Beyond Coding — Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-white/5 light:bg-slate-100 text-gray-300 light:text-gray-800 border border-white/10 light:border-black/10 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Experience Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-cyan-950/40 via-[#0d1322] to-[#090d16] border border-cyan-500/20 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Current Position</h4>
                  <p className="text-xs text-cyan-400 font-semibold">{personalInfo.company}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span><strong>3+ Years Professional Experience</strong> developing commercial web projects.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span><strong>15+ Production Web Apps</strong> deployed and maintained across various domains.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span><strong>Full Lifecycle Dev</strong> from initial requirement gathering to API integration and production build.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span><strong>Agile & Remote Collaborative</strong> experience working directly with design and product stakeholders.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-102 transition-transform"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Work With Me Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white light:text-gray-900 text-center mb-8">
            Why Work With Me?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMeCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 light:bg-white border border-white/10 light:border-black/10 hover:border-cyan-500/40 transition-all duration-300 glow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <IconMapper name={card.icon} className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white light:text-gray-900 mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-400 light:text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
