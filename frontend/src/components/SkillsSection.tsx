"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Layers,
  Server,
  Rocket,
  Zap,
  Cloud,
  Briefcase,
  Webhook,
  LineChart
} from "lucide-react";

const skills = [
  {
    title: "AI & RAG Systems",
    description: "Building scalable retrieval-augmented generation pipelines and integrating LLMs into robust product architectures.",
    icon: <BrainCircuit className="text-accent-blue" size={24} />
  },
  {
    title: "Full Stack Development",
    description: "Crafting end-to-end web applications with Next.js, Node.js, and modern serverless paradigms.",
    icon: <Layers className="text-accent-purple" size={24} />
  },
  {
    title: "System Design Thinking",
    description: "Architecting resilient, distributed systems designed for high availability and long-term scalability.",
    icon: <Server className="text-foreground" size={24} />
  },
  {
    title: "Startup Execution",
    description: "Navigating ambiguity to ship MVPs quickly, iterating on feedback, and driving rapid growth.",
    icon: <Rocket className="text-accent-blue" size={24} />
  },
  {
    title: "Performance Optimization",
    description: "Refactoring bottlenecks, optimizing database queries, and reducing latency for fluid user experiences.",
    icon: <Zap className="text-accent-purple" size={24} />
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying and managing infrastructure on AWS, Vercel, and GCP with CI/CD automation.",
    icon: <Cloud className="text-foreground" size={24} />
  },
  {
    title: "Product + Business Thinking",
    description: "Aligning technical decisions with business goals to deliver true value to users and stakeholders.",
    icon: <Briefcase className="text-accent-blue" size={24} />
  },
  {
    title: "API Architecture",
    description: "Designing RESTful and GraphQL APIs with clean documentation and secure access controls.",
    icon: <Webhook className="text-accent-purple" size={24} />
  },
  {
    title: "Analytics & Data",
    description: "Implementing complex data pipelines and building dashboards to empower data-driven decisions.",
    icon: <LineChart className="text-foreground" size={24} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function SkillsSection() {
  return (
    <section className="py-32 bg-surface/30 border-y border-border relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Edge</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto text-balance">
            A diverse toolkit built from building real-world products, scaling systems, and driving startup execution.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6 group-hover:border-accent-blue/50 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{skill.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
