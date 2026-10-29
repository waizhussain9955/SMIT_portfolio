"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, MessageCircle, Copy, Check, Send, AlertCircle, ExternalLink } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback prompt
        window.prompt("Copy email address:", personal.email);
      }
    } catch {
      window.prompt("Copy email address:", personal.email);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email format.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct RFC-compliant mailto URI
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject.trim()}`);
    const bodyContent = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
    const bodyEncoded = encodeURIComponent(bodyContent);

    const mailtoUrl = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);

    // Launch visitor's email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Open for freelance opportunities, full-time engineering roles, and autonomous AI system consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111420] border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Communication
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to email me directly or send a message via WhatsApp. I typically reply within 24 hours.
              </p>

              {/* Email Card & Copy Action */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0D0F18] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {personal.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-[#0D0F18] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Direct</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {personal.whatsappNumber}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>
                  No servers store your messages here. The form opens your native email client to send messages securely and transparently.
                </span>
              </div>
            </div>
          </div>

          {/* Email Compose Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to generate a pre-formatted email message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0D0F18] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                        errors.name ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0D0F18] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                        errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0D0F18] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                      errors.subject ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, project scope, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0D0F18] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                      errors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose in Email Client</span>
                </button>

                {formSubmitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 mt-3 text-center">
                    Launching your email application... If your mail client does not open automatically, you can email directly at{" "}
                    <a href={`mailto:${personal.email}`} className="font-bold underline">
                      {personal.email}
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
