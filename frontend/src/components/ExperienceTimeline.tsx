import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleExpand = (index: number) => {
    setExpandedMap(prev => ({ ...prev, [index]: !prev[index] }));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);
  };

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experiences');
        const data = await res.json();
        if (data.status === 'success') {
          setExperiences(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    if (loading || experiences.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline line progression
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        });
      }

      // Animate each milestone
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Dot animation
        const dot = item.querySelector('.timeline-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, backgroundColor: "#222222", boxShadow: "0 0 0 rgba(0,210,255,0)" },
            {
              scale: 1,
              backgroundColor: "#00d2ff",
              boxShadow: "0 0 20px rgba(0,210,255,0.5)",
              duration: 0.5,
              scrollTrigger: {
                trigger: item,
                start: "top center",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [loading, experiences]);

  if (loading) {
    return (
      <section id="experience" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-muted">Loading timeline...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Experience Journey</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto text-balance">
            A roadmap of engineering excellence, building scalable systems and impactful products.
          </p>
        </div>

        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 rounded-full" />

          {/* Animated Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] h-0 bg-gradient-to-b from-accent-blue to-accent-purple -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,210,255,0.5)] z-0"
          />

          <div className="space-y-10 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="glass-panel p-8 hover:border-accent-blue/30 transition-colors group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <span className="text-accent-blue text-sm font-mono mb-2 block">{exp.duration}</span>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <h4 className="text-lg text-text-muted mb-4 font-medium">{exp.company}</h4>

                        <p className="text-text-muted mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <AnimatePresence initial={false}>
                          {expandedMap[index] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mb-6">
                                <h5 className="text-sm font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Key Achievements</h5>
                                <ul className={`text-sm text-text-muted space-y-2 ${isEven ? "md:list-inside" : "list-inside"} list-disc`}>
                                  {exp.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className={`flex ${isEven ? "md:justify-end" : "md:justify-start"} mb-6 mt-2`}>
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-sm font-medium text-accent-blue hover:text-accent-purple transition-colors inline-flex items-center gap-1 group"
                          >
                            {expandedMap[index] ? "Read Less" : "Read More"}
                            <svg className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${expandedMap[index] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-surface-hover border border-border rounded-full text-xs text-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="timeline-dot w-4 h-4 rounded-full bg-border border-4 border-background z-20 transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
