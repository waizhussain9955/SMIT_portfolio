import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Globe, Smartphone, Bot, Palette, CheckCircle2 } from "lucide-react";

export function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case "smartphone":
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case "bot":
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case "palette":
        return <Palette className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0B0D15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Services & Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Can Build For You
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From proof-of-concept prototypes to full-scale SaaS platforms and automated AI workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center mb-6">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Key Capabilities
                </span>
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
