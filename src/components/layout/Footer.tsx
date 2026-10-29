"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "message-circle":
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#07080D] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20">
              {personal.monogram}
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm">
                {personal.name}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personal.role}
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#services" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All rights reserved. Crafted with Next.js & Spec-Driven Development.
        </div>
      </div>
    </footer>
  );
}
