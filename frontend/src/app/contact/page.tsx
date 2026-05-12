"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Failed to send message", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl transition-all overflow-hidden ${
                status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed to Send" : "Send Message"}
              {status === "idle" && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
