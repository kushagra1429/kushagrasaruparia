"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-sm font-medium text-text-muted"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight"
          >
            Full Stack Engineer & <br />
            <span className="gradient-accent">AI Systems Builder</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-muted max-w-xl font-light leading-relaxed text-balance"
          >
            I architect scalable products, engineer intelligent AI systems, and craft modern digital experiences that feel world-class, fast, and emotionally powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-all"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground font-medium hover:bg-surface-hover transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative lg:ml-auto w-full max-w-[500px] aspect-square"
        >
          {/* Decorative container */}
          <div className="absolute inset-0 rounded-full border border-foreground/10 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-foreground/5 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full border border-dashed border-foreground/10 animate-[spin_80s_linear_infinite]" />

          <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-accent-blue/10 to-accent-purple/10 backdrop-blur-3xl" />

          <div className="absolute inset-12 rounded-full overflow-hidden border border-foreground/10 p-2 shadow-[0_0_80px_rgba(122,34,255,0.2)]">
            <div className="w-full h-full rounded-full bg-surface-hover/80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <Image
                src="/profile.png"
                alt="Profile Picture"
                fill
                priority
                className="object-cover rounded-full z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
