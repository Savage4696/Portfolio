import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Folder, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Financial Agentic Research Assistant",
            tech: ["Python", "LangChain", "VectorDB", "FastAPI"],
            description: "Autonomous LLM agent that ingests market news, filings, and macro data to generate institutional-grade risk narratives and price reasoning reports.",
            links: { github: "#", external: "https://marketsage-omega.vercel.app" },
            size: "large" // Spans 2 cols
        },
        {
            title: "Trading Signal Engine",
            tech: ["Python", "Pandas", "WebSockets"],
            description: "Real-time scalping engine with custom indicators and backtesting.",
            links: { github: "#", external: "#" },
            size: "medium"
        },
        {
            title: "Hospital Management System",
            tech: ["Flutter", "Next.js", "React"],
            description: "AI-driven hospital platform for patient records, appointment scheduling, and intelligent clinical decision support.",
            links: { github: "https://github.com/Savage4696/studio", external: "https://sunrisee-hms.vercel.app/login" },
            size: "medium"
        },
        {
            title: "Eva AI",
            tech: ["Python", "LLM", "React"],
            description: "Multimodal LLM tool for code generation, debugging, audio, image, and text generation with humanizer for professional and academic work and research.",
            links: { github: "#", external: "https://eva-ai-dun.vercel.app/" },
            size: "wide" // Spans full width or 2 cols
        }
    ];

    return (
        <section id="projects" className="section" ref={ref} style={{ paddingBottom: '5vh' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    style={{
                        fontSize: 'var(--fz-xl)',
                        marginBottom: '5vh',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1rem'
                    }}
                >
                    Selected Works <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '400' }}>(04)</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    gridAutoFlow: 'dense'
                }}>
                    {projects.map((project, index) => {
                        const isLarge = project.size === 'large';
                        const isWide = project.size === 'wide';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{
                                    gridColumn: isLarge || isWide ? 'span 2' : 'span 1',
                                    gridRow: isLarge ? 'span 2' : 'span 1',
                                    minHeight: '300px'
                                }}
                            >
                                <TiltCard
                                    className="glass"
                                    style={{
                                        padding: '2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        borderRadius: 'var(--radius-lg)',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Decorative gradient blob */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-20%',
                                        right: '-20%',
                                        width: '300px',
                                        height: '300px',
                                        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
                                        filter: 'blur(50px)',
                                        pointerEvents: 'none'
                                    }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', zIndex: 2 }}>
                                        <Folder size={24} style={{ color: 'var(--accent)' }} />
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <a href={project.links.github} className="icon-link"><Github size={20} /></a>
                                            <a href={project.links.external} className="icon-link"><ArrowUpRight size={20} /></a>
                                        </div>
                                    </div>

                                    <div style={{ flex: 1, zIndex: 2 }}>
                                        <h3 style={{
                                            fontSize: isLarge ? '2rem' : '1.5rem',
                                            marginBottom: '1rem',
                                            color: '#fff',
                                            letterSpacing: '-0.02em'
                                        }}>{project.title}</h3>

                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            maxWidth: '90%'
                                        }}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div style={{ marginTop: '2rem', zIndex: 2 }}>
                                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', listStyle: 'none' }}>
                                            {project.tech.map(t => (
                                                <li key={t} style={{
                                                    fontSize: '0.8rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '100px',
                                                    color: '#fff',
                                                    border: '1px solid rgba(255,255,255,0.1)'
                                                }}>
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
