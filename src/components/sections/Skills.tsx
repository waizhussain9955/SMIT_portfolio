"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Cpu, Layout, Smartphone, Wrench } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: null },
    { id: "core-ai", label: "Agentic AI & Core", icon: <Cpu className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4" /> },
    { id: "mobile-backend", label: "Mobile & Backend", icon: <Smartphone className="w-4 h-4" /> },
    { id: "tools", label: "Tools & DevOps", icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0B0D15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Production Stacks
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Proficiencies across modern web frameworks, cross-platform mobile SDKs, and autonomous AI systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25 scale-105"
                  : "bg-slate-200/80 dark:bg-[#111420] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                      Core
                    </span>
                  )}
                </div>
                {skill.proficiency && (
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono">
                    {skill.proficiency}%
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              {skill.proficiency && (
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
