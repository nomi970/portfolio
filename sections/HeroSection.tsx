"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText, Send, Code, Terminal, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { ResumeModal } from "@/components/ResumeModal";

export const HeroSection: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center bg-grid-pattern"
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md shadow-lg shadow-cyan-500/10"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>Available for Global Remote & Relocation</span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-gray-900 tracking-tight leading-[1.15]">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-gray-300 light:text-gray-700">
                  {personalInfo.title}
                </p>
                <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  {personalInfo.summary}
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                >
                  <span>Explore 15+ Live Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-200 light:text-gray-800 bg-white/5 light:bg-black/5 hover:bg-white/10 border border-white/10 light:border-black/10 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Contact Me</span>
                </a>
              </motion.div>

              {/* Stats Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 light:border-black/10"
              >
                {personalInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/5 light:bg-black/5 border border-white/5 light:border-black/5 backdrop-blur-sm text-center lg:text-left"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-400 light:text-gray-600 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-40 animate-pulse" />

                {/* Main Card */}
                <div className="relative bg-[#0d1322]/90 light:bg-white border border-white/15 light:border-black/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                  {/* IDE-style Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 light:border-black/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>DeveloperProfile.ts</span>
                    </div>
                  </div>

                  {/* Code snippet simulation */}
                  <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-300 light:text-gray-800">
                    <div className="text-purple-400">
                      <span className="text-blue-400">const</span> engineer = {"{"}
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-cyan-300">name</span>:{" "}
                        <span className="text-emerald-400">"{personalInfo.name}"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-300">role</span>:{" "}
                        <span className="text-emerald-400">"Associate Software Engineer"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-300">company</span>:{" "}
                        <span className="text-emerald-400">"{personalInfo.company}"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-300">experience</span>:{" "}
                        <span className="text-amber-400">"3+ Years"</span>,
                      </div>
                      <div>
                        <span className="text-cyan-300">specialties</span>: [
                      </div>
                      <div className="pl-4 text-emerald-400">
                        "React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"
                      </div>
                      <div>],</div>
                      <div>
                        <span className="text-cyan-300">codeQuality</span>:{" "}
                        <span className="text-amber-400">"Pixel-Perfect"</span>,
                      </div>
                    </div>
                    <div className="text-purple-400">{"};"}</div>
                  </div>

                  {/* Floating Skill Badges */}
                  <div className="mt-6 pt-4 border-t border-white/10 light:border-black/10 flex flex-wrap gap-2">
                    {["React.js", "Next.js", "TypeScript", "Tailwind", "REST APIs"].map((badge, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
