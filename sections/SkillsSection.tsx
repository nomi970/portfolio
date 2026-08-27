"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, CheckCircle2, Sparkles, Code2, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { IconMapper } from "@/components/IconMapper";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b14] light:bg-slate-50">
      {/* Subtle Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            Skills & <span className="gradient-text">Engineering Capabilities</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 leading-relaxed">
            A comprehensive overview of my core frontend technologies, integration expertise, and software engineering practices.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((category, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-xl shadow-cyan-500/25 scale-105"
                    : "bg-white/5 light:bg-white text-gray-300 light:text-gray-700 hover:text-white border border-white/10 light:border-slate-200"
                }`}
              >
                <span>{category.title}</span>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-black/20 font-mono">
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Description */}
        <p className="text-center text-sm text-gray-400 light:text-gray-600 max-w-xl mx-auto mb-10">
          {skillCategories[activeTab].description}
        </p>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                skill.highlight
                  ? "bg-gradient-to-b from-cyan-950/40 via-[#0e1628] to-[#090d16] border-cyan-500/40 shadow-lg shadow-cyan-500/5"
                  : "bg-white/5 light:bg-white border-white/10 light:border-slate-200 hover:border-cyan-500/30"
              }`}
            >
              {skill.highlight && (
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconMapper name={skill.iconName} className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-white light:text-gray-900 mb-1">
                  {skill.name}
                </h4>

                {skill.description && (
                  <p className="text-xs text-gray-400 light:text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Proficient</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
