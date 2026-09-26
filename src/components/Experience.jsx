import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceItem = ({ job, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                x,
                display: 'flex',
                flexDirection: 'column',
                alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start',
                width: '100%',
                marginBottom: '5rem',
                position: 'relative'
            }}
        >
            <div style={{
                width: '45%',
                padding: '2rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                backdropFilter: 'blur(10px)',
                textAlign: 'left' // Always align text left inside card for readability
            }}>
                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                    {job.range}
                </span>
                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0', color: '#fff' }}>{job.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{job.company}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {job.details[0]}
                </p>
            </div>

            {/* Timeline Node */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                transform: 'translate(-50%, 0)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 20px var(--accent)'
            }} />
        </motion.div>
    );
};

const Experience = () => {
    const jobs = [
        {
            title: "Chief Executive Officer (Founder)",
            company: "Stealth Startup",
            range: "2025–Present",
            details: ["Leading development of an AI-powered financial intelligence SaaS for retail and institutional analytics."]
        },
        {
            title: "Full Stack & AI Developer",
            company: "Firebase Studio",
            range: "2025–Present",
            details: ["Developed AI-driven B2B/B2C SaaS components using React, Node.js, Python, and REST APIs."]
        },
        {
            title: "Gen AI Trainee",
            company: "spectoV",
            range: "2025",
            details: ["Built RLHF-based models and RAG applications for AR/VR startup use cases."]
        },
        {
            title: "Foreign Exchange Trader",
            company: "FundedNext",
            range: "2024–2025",
            details: ["Traded EUR/USD, GBP/USD using scalping strategies and algorithmic execution."]
        }
    ];

    return (
        <section id="experience" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'var(--fz-xl)' }}>The Journey</h2>
                </div>

                <div style={{ position: 'relative', padding: '2rem 0' }}>
                    {/* Center Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '1px',
                        background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
                        transform: 'translateX(-50%)'
                    }} />

                    {jobs.map((job, index) => (
                        <ExperienceItem key={index} job={job} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
