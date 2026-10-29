import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Code2, Smartphone, Cpu, ShieldCheck, MapPin, CheckCircle } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Agentic AI & Automation",
      description: "Deep expertise in LLMs, Gemini APIs, autonomous task execution, and smart offline-first agent workflows.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Full-Stack Web Architecture",
      description: "Engineered scalable SaaS web applications with Next.js App Router, React, Node.js, and TypeScript.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title: "Mobile App Development",
      description: "Proven track record delivering native Android and Flutter mobile apps with download managers and OCR.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Spec-Driven Development",
      description: "Clean code discipline with strict typing, accessible UI patterns, and robust verification before deployment.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-500 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Real-World Digital Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111420] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-cyan-500/20">
                  {personal.monogram}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personal.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span>Based in {personal.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {personal.bio}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Proven delivery of production-grade SaaS and mobile utilities</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Hands-on mastery from UI/UX design to backend API orchestration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Autonomous system builders with agentic LLM workflows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strengths Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111420]/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800/80 flex items-center justify-center mb-4">
                  {strength.icon}
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
