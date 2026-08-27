"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Search, ExternalLink, Globe, Sparkles, Filter, Info } from "lucide-react";
import { projectsData, projectCategories, Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section
        id="projects"
        className="py-24 relative overflow-hidden bg-[#090d16] light:bg-white border-t border-white/5"
      >
        {/* Background Radial Glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
              Featured <span className="gradient-text">Projects & Web Apps</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 light:text-gray-600 leading-relaxed">
              Explore 15 production web applications, real-time dashboards, corporate websites, and AI tools built with React.js, Next.js, and modern styling solutions.
            </p>
          </div>

          {/* Controls Bar: Search & Category Filter Tabs */}
          <div className="space-y-6 mb-12">
            {/* Search Input Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project name, description or tech (e.g. React, Next.js)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-sm bg-white/5 light:bg-gray-100 text-white light:text-gray-900 border border-white/10 light:border-gray-300 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {projectCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20 scale-105"
                        : "bg-white/5 light:bg-gray-100 text-gray-300 light:text-gray-700 hover:text-white light:hover:text-black hover:bg-white/10 border border-white/10 light:border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Filter Count Summary */}
            <div className="text-center text-xs text-gray-400">
              Showing <span className="font-bold text-cyan-400">{filteredProjects.length}</span> of {projectsData.length} total projects
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between rounded-3xl bg-[#0c1220] light:bg-white border border-white/10 light:border-gray-200 hover:border-cyan-500/40 shadow-xl overflow-hidden glow-card transition-all duration-300"
                >
                  {/* Top Gradient Accent Bar */}
                  <div
                    className={`h-2.5 w-full bg-gradient-to-r ${project.gradient}`}
                  />

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg text-white bg-white/10 border border-white/10"
                          style={{ borderColor: project.accentColor }}
                        >
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" /> Featured
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white light:text-gray-900 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-gray-400 light:text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-4 pt-3 border-t border-white/5 light:border-gray-100">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[11px] font-medium bg-white/5 light:bg-gray-100 text-gray-300 light:text-gray-700 border border-white/10 light:border-gray-200 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 text-[11px] font-medium text-gray-500">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-md shadow-cyan-500/20 hover:scale-102 transition-all"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-2 text-gray-300 light:text-gray-700 hover:text-white light:hover:text-black bg-white/5 light:bg-gray-100 hover:bg-white/10 border border-white/10 light:border-gray-200 rounded-xl transition-colors"
                          title="View Full Details"
                        >
                          <Info className="w-4 h-4 text-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <Filter className="w-10 h-10 text-gray-500 mx-auto" />
              <h4 className="text-lg font-bold text-white">No projects found</h4>
              <p className="text-xs text-gray-400">
                Try adjusting your search query or filter categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 text-xs font-bold text-black bg-cyan-400 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
