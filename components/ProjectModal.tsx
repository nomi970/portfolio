"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Sparkles, CheckCircle } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#0e1626] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 text-gray-100"
        >
          {/* Header Banner */}
          <div
            className={`relative p-8 bg-gradient-to-br ${project.gradient} border-b border-white/10 flex flex-col justify-between min-h-[160px]`}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-black/40 hover:bg-black/70 text-gray-300 hover:text-white rounded-full transition-colors backdrop-blur-md border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-white bg-white/10 backdrop-blur-md border border-white/15"
                style={{ borderColor: project.accentColor }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Featured
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
                Project Overview
              </h4>
              <p className="text-gray-200 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-xl text-cyan-300 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
              >
                Close Preview
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
