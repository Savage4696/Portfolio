import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import me from '../assets/IMG_8001.jpg';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = ['Python', 'JavaScript (ES6+)', 'React', 'Node.js', 'FastAPI', 'PyTorch', 'LangChain', 'GCP', 'PostgreSQL'];

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem', fontSize: '2rem' }}>
                        About Me
                        <span style={{ height: '1px', background: 'rgba(255,255,255,0.2)', flex: '1', marginLeft: '20px' }}></span>
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                        <div style={{ color: 'var(--text-secondary)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                My journey bridges the gap between <b>Complex Systems</b> and <b>Strategic Finance</b>. I don't just build software; I engineer intelligent agents that understand markets and data.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Currently building a <b>Stealth Startup</b> focused on institutional-grade AI financial analytics. Previously, I've deployed production RAG systems and high-frequency trading algorithms.
                            </p>

                            <p>Here are a few technologies I've been working with recently:</p>
                            <ul style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(140px, 200px) minmax(140px, 200px)',
                                gap: '10px',
                                padding: '0',
                                margin: '20px 0 0 0',
                                listStyle: 'none'
                            }}>
                                {skills.map(skill => (
                                    <li key={skill} style={{ position: 'relative', paddingLeft: '20px', fontSize: '13px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="image-wrapper" style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                maxWidth: '300px',
                                height: 'auto',
                                aspectRatio: '1',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>

                                <img
                                    src={me}
                                    alt="Saikrishna Pendem"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        filter: 'grayscale(100%) contrast(1.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />

                                {/* Overlay/Tint */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'var(--accent)',
                                    opacity: 0.2,
                                    pointerEvents: 'none',
                                    mixBlendMode: 'multiply'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
