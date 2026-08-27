"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, Send, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { ResumeModal } from "./ResumeModal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#090d16]/80 light:bg-white/80 backdrop-blur-xl border-b border-white/10 light:border-black/5 shadow-lg shadow-black/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#090d16] light:bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-base">
                    {personalInfo.shortName}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white light:text-gray-900 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                  Frontend Eng.
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 light:bg-black/5 p-1.5 rounded-full border border-white/10 light:border-black/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-semibold text-gray-300 light:text-gray-700 hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Quick Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 text-gray-300 light:text-gray-700 hover:text-white light:hover:text-black bg-white/5 light:bg-black/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              )}

              {/* Resume Trigger */}
              <button
                onClick={() => setResumeOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>

              {/* Hire Me CTA */}
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-black" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 text-gray-300 light:text-gray-700 bg-white/5 light:bg-black/5 border border-white/10 rounded-lg"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 light:text-gray-700 bg-white/5 light:bg-black/5 border border-white/10 rounded-lg"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-white/10 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-xl"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  View Resume
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Hire Me Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
