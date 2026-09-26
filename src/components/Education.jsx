import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TiltCard from './TiltCard';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="education" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: 'var(--fz-xl)', marginBottom: '3rem', textAlign: 'center' }}>
                        Education & Certifications
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Degree Card */}
                        <TiltCard className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Degree</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '1rem 0 0.5rem 0', color: '#fff' }}>Bachelor of Commerce</h3>
                            <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>Computer Applications</p>
                            <p style={{ color: 'var(--text-secondary)' }}>Avinash College of Commerce • 2026</p>
                        </TiltCard>

                        {/* Stanford Card */}
                        <TiltCard className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Coursework</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '1rem 0 0.5rem 0', color: '#fff' }}>Stanford University</h3>
                            <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>Code in Place: CS106A</p>
                            <p style={{ color: 'var(--text-secondary)' }}>Programming Methodology • 2024</p>
                        </TiltCard>

                        {/* Certifications - Spanning Full Width if needed or just another card */}
                        <TiltCard className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', gridColumn: '1 / -1' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Professional Certifications</span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                                {[
                                    "Oracle Certified Gen AI Professional",
                                    "Azure AI Essentials",
                                    "Stanford Machine Learning",
                                    "DeepMind: Small Language Models",
                                    "Google: Gemini AI Apps"
                                ].map(cert => (
                                    <span key={cert} style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '100px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem'
                                    }}>
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </TiltCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
