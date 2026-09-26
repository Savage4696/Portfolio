import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Parallax Layers
    const yBackground = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "80%"]), springConfig);
    const yText = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "120%"]), springConfig);
    const yCode = useSpring(useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]), springConfig);

    return (
        <section ref={ref} id="hero" style={{
            height: '110vh', /* Extra height for smooth parallax exit */
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '10vh'
        }}>
            {/* Background Gradients - Deepest Layer */}
            <motion.div style={{ y: yBackground, position: 'absolute', top: '-20%', right: '-10%', opacity: 0.15, zIndex: 0 }}>
                <div style={{
                    width: '800px', height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
                    filter: 'blur(80px)'
                }}></div>
            </motion.div>
            <motion.div style={{ y: yBackground, position: 'absolute', bottom: '0%', left: '-10%', opacity: 0.1, zIndex: 0 }}>
                <div style={{
                    width: '1000px', height: '1000px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #3b82f6 0%, transparent 60%)',
                    filter: 'blur(100px)'
                }}></div>
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    {/* Main Text Content */}
                    <motion.div style={{ y: yText }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                fontSize: 'clamp(3rem, 6vw, 6rem)',
                                fontWeight: '800',
                                lineHeight: '0.95',
                                marginBottom: '1.5rem',
                                letterSpacing: '-0.02em',
                                color: 'white'
                            }}>
                            <span style={{
                                background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>ARCHITECTING</span>
                            <br />
                            <span className="gradient-text">INTELLIGENCE</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                fontSize: '1.5rem',
                                color: 'var(--text-primary)',
                                fontWeight: '500',
                                marginBottom: '0.5rem'
                            }}>
                            Saikrishna Pendem
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '500px',
                                lineHeight: '1.5',
                                marginBottom: '3rem'
                            }}>
                            CEO (Founder) & AI Engineer.<br />
                            Specializing in Agentic RAG, FinTech, and<br />
                            Quantitative Systems.
                        </motion.p>


                    </motion.div>

                    {/* Floating Glass Element (Right Side) */}
                    <motion.div
                        style={{ y: yCode, x: 50, position: 'relative' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="glass-premium"
                    >
                        <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a8b2d1' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <div style={{ opacity: 0.7 }}>
                                <span style={{ color: '#c792ea' }}>const</span> <span style={{ color: '#addb67' }}>future</span> = <span style={{ color: '#c792ea' }}>await</span> <span style={{ color: '#82aaff' }}>AI</span>.<span style={{ color: '#82aaff' }}>evolve</span>(<span style={{ color: '#f78c6c' }}>currentState</span>);<br />
                                <br />
                                <span style={{ color: '#89ddff' }}>if</span> (future.<span style={{ color: '#82aaff' }}>isSingularity</span>) &#123;<br />
                                &nbsp;&nbsp;<span style={{ color: '#82aaff' }}>deploy</span>(<span style={{ color: '#ecc48d' }}>"Nova"</span>);<br />
                                &#125; <span style={{ color: '#89ddff' }}>else</span> &#123;<br />
                                &nbsp;&nbsp;<span style={{ color: '#82aaff' }}>optimize</span>(<span style={{ color: '#f78c6c' }}>metrics</span>);<br />
                                &#125;
                            </div>
                        </div>
                        {/* Reflection/Glare */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(120deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 100%)',
                            pointerEvents: 'none',
                            borderRadius: 'inherit'
                        }}></div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}
            >
                <div style={{
                    width: '24px',
                    height: '40px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '6px'
                }}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '4px',
                            height: '4px',
                            background: '#fff',
                            borderRadius: '50%'
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
