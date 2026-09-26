import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = [
        "Python", "FastAPI", "React", "Node.js", "LangChain",
        "TensorFlow", "GCP", "Kubernetes", "PostgreSQL",
        "RAG Systems", "Algorithmic Trading", "Docker",
        "Redis", "TypeScript", "TailwindCSS", "Figma"
    ];

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ textAlign: 'center', margin: '0 0 5rem 0' }}
                >
                    <h2 style={{ fontSize: 'var(--fz-xl)', marginBottom: '2rem' }}>Technical Arsenal</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fz-md)' }}>
                        A comprehensive suite of tools for building intelligent, scalable systems.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: index * 0.05
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                borderColor: 'var(--accent)',
                                color: 'var(--accent)',
                                boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
                            }}
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                padding: '1rem 2rem',
                                borderRadius: '100px',
                                border: '1px solid var(--border)',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'var(--text-secondary)',
                                cursor: 'default',
                                backdropFilter: 'blur(5px)',
                                fontWeight: '500'
                            }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
