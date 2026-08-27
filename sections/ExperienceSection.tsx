"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Code2 } from "lucide-react";
import { experienceData } from "@/data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090d16] light:bg-white">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 leading-relaxed">
            Proven track record of engineering scalable frontend web applications for global clients.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 sm:pl-12 border-l-2 border-cyan-500/30 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Main Card */}
              <div className="p-8 rounded-3xl bg-[#0d1322] light:bg-slate-50 border border-white/10 light:border-slate-200 shadow-2xl space-y-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 light:border-slate-200">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white light:text-gray-900">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" /> {exp.company}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="flex items-center gap-1.5 text-gray-400 light:text-gray-600">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold shrink-0">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 light:text-gray-700 text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-4">
                    Key Responsibilities & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-white/5 light:bg-white border border-white/5 light:border-slate-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 light:text-gray-700 leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Tech Stack */}
                <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-gray-400 mr-2 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Technologies:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
