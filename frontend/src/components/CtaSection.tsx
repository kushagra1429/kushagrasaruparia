"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-blue/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-accent-purple/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8">
            Let&apos;s build something <br />
            <span className="gradient-accent">ambitious.</span>
          </h2>

          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto text-balance">
            Whether you&apos;re looking to architect a new AI system, scale an existing product, or build a world-class digital experience, I&apos;m ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-2xl hover:opacity-90 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="mailto:kushagrasaruparia14@gmail.com"
                className="p-4 bg-surface border border-border rounded-2xl text-text-muted hover:text-foreground hover:border-accent-blue/50 transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/kushagra1429"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-surface border border-border rounded-2xl text-text-muted hover:text-foreground hover:border-accent-blue/50 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kushagra-saruparia-a62966200/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-surface border border-border rounded-2xl text-text-muted hover:text-foreground hover:border-accent-blue/50 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
