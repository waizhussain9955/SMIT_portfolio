import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Github, Linkedin, MessageCircle, Mail, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const { personal, socials } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "message-circle":
        return <MessageCircle className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm shadow-sm animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            {personal.availability}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6 flex items-center justify-center gap-2 flex-wrap">
            <span>{personal.role}</span>
            <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-normal">
              Autonomous Systems Specialist
            </span>
          </h2>

          {/* Positioning statement */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {personal.tagline} Focused on scalable SaaS products, cross-platform mobile apps, and autonomous AI-assisted workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <Terminal className="w-4 h-4" />
              Explore Verified Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 text-sm sm:text-base hover:border-cyan-500/50"
            >
              <Sparkles className="w-4 h-4 text-cyan-500" />
              Get In Touch
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-2">
              Connect:
            </span>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#111420] border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 active:scale-95"
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Highlights row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 w-full max-w-3xl">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111420]/70 border border-slate-200 dark:border-slate-800/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-500 dark:text-cyan-400">12+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Verified Projects</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111420]/70 border border-slate-200 dark:border-slate-800/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-500 dark:text-indigo-400">99%</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Agentic AI Mastery</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111420]/70 border border-slate-200 dark:border-slate-800/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-500 dark:text-purple-400">Multi</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Web, Mobile & AI</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111420]/70 border border-slate-200 dark:border-slate-800/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 dark:text-emerald-400">Active</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Ready for Hire</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
