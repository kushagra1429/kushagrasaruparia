"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6">
            Let&apos;s start a <br />
            <span className="gradient-accent">conversation.</span>
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-lg text-balance">
            I&apos;m always open to discussing product design work, scalable architecture, or partnership opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent-blue">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <a href="mailto:kushagrasaruparia14@gmail.com" className="text-lg font-medium text-foreground hover:text-accent-blue transition-colors">
                  kushagrasaruparia14@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/kushagra" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hover:bg-surface-hover border border-border rounded-xl text-text-muted hover:text-foreground transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/kushagra" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hover:bg-surface-hover border border-border rounded-xl text-text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com/kushagra" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hover:bg-surface-hover border border-border rounded-xl text-text-muted hover:text-foreground transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-text-muted">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-all overflow-hidden"
            >
              Send Message
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
