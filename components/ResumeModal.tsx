"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Briefcase, Code } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { experienceData } from "@/data/experience";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1322] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 text-gray-100"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Resume Preview — {personalInfo.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {/* Download PDF */}
                <a
                  href="/api/download-cv"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
                  title="Download CV as PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download CV</span>
                </a>

                {/* Print */}
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/15 border border-white/10 rounded-lg transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4 text-gray-400" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Resume Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:text-black">
              {/* Personal Info Header */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                  <p className="text-cyan-400 font-medium text-lg mt-1">{personalInfo.title}</p>
                </div>
                <div className="space-y-1.5 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-sm uppercase font-bold text-cyan-400 tracking-wider mb-2">Professional Summary</h4>
                <p className="text-gray-300 leading-relaxed text-sm">{personalInfo.summary}</p>
              </div>

              {/* Core Technologies */}
              <div>
                <h4 className="text-sm uppercase font-bold text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "Tailwind CSS",
                    "HTML5 / CSS3",
                    "REST APIs",
                    "Git / GitHub",
                    "Bootstrap",
                    "Stripe Integration",
                    "DataTables",
                    "State Management",
                    "Responsive Web Design",
                    "UI/UX Implementation",
                    "Performance Optimization",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/20 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-sm uppercase font-bold text-cyan-400 tracking-wider mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Work Experience
                </h4>
                <div className="space-y-6">
                  {experienceData.map((exp, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-1">
                        <div>
                          <h5 className="text-base font-bold text-white">{exp.role}</h5>
                          <p className="text-sm text-gray-300 font-medium">{exp.company} — <span className="text-gray-400">{exp.location}</span></p>
                        </div>
                        <span className="px-2.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{exp.description}</p>
                      <ul className="space-y-1.5 text-xs text-gray-300 list-disc list-inside">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links inside Modal */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-gray-400 gap-2">
                <div className="flex items-center gap-4">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span>Available for Full-Time & Freelance Roles</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
