"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const projects = [
  {
    title: "HouseManager — Operations Platform",
    description: "Built a modern full-stack platform focused on simplifying and structuring household operations, task management, workforce coordination, and service workflows through scalable technology.",
    tags: ["Next.js", "TypeScript", "Flask", "APIs", "TailwindCSS"],
    liveUrl: "https://household-manager-87a5b.web.app/",
    githubUrl: "https://github.com/kushagra1429/housemanager",
    colSpan: "md:col-span-2",
    imagePlaceholder: "HouseManager Dashboard"
  },
  {
    title: "Terrain Recognition Research",
    description: "Designed and developed a machine learning-based terrain recognition system that progressed from Smart India Hackathon participation into an internationally published Springer research paper.",
    tags: ["Machine Learning", "Python", "Computer Vision"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-1",
    imagePlaceholder: "Terrain ML Model"
  },
  {
    title: "Movie Recommendation Engine",
    description: "Built an NLP-powered recommendation engine leveraging vectorization and similarity analysis to generate intelligent movie recommendations.",
    tags: ["Python", "NLP", "scikit-learn", "Streamlit"],
    liveUrl: "#",
    githubUrl: "https://github.com/kushagra1429/Movie-Recommendation-System",
    colSpan: "md:col-span-1",
    imagePlaceholder: "Recommendation Matrix"
  },
  {
    title: "AI/RAG Enterprise System",
    description: "A highly scalable retrieval-augmented generation pipeline that processes millions of documents to deliver millisecond-latency query responses for enterprise clients.",
    tags: ["Python", "FastAPI", "Pinecone", "LangChain"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-2",
    imagePlaceholder: "AI System Architecture"
  },
  {
    title: "Modern Portfolio",
    description: "A cinematic, highly optimized personal portfolio showcasing engineering and design capabilities.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-2",
    imagePlaceholder: "Portfolio Preview"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform handling thousands of concurrent events with zero perceived latency.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    colSpan: "md:col-span-1",
    imagePlaceholder: "Dashboard UI"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6">
            Selected <span className="gradient-accent">Works</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl text-balance">
            A showcase of complex systems, modern interfaces, and scalable architectures I&apos;ve built over the years.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden glass-panel border border-border flex flex-col ${project.colSpan}`}
            >
              {/* Image / Visual Placeholder Area */}
              <div className="absolute inset-0 bg-surface-hover/50 transition-colors duration-500 group-hover:bg-surface-hover z-0" />

              <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                {/* Abstract visualization placeholder */}
                <div className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 border border-foreground/5 rounded-xl flex items-center justify-center text-foreground/20 font-mono text-sm group-hover:border-foreground/10 transition-colors duration-500">
                  [{project.imagePlaceholder}]
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full p-8 justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-foreground/10 backdrop-blur-md rounded-full text-xs font-medium text-foreground/80 border border-foreground/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors text-foreground" aria-label="View Source">
                        <GithubIcon size={18} />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground text-background hover:opacity-90 rounded-full transition-all" aria-label="Live Demo">
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-text-muted line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
