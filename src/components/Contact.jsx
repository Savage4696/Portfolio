import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10vh 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p style={{ color: 'var(--accent)', fontSize: 'var(--fz-md)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        What's Next?
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(50px, 15vw, 200px)',
                        lineHeight: '0.8',
                        marginBottom: '1rem',
                        background: 'linear-gradient(180deg, #fff, transparent)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800',
                        letterSpacing: '-0.05em'
                    }}>
                        SAY HELLO
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
                        <motion.a
                            href="mailto:krishcompanies@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-block',
                                padding: '1.5rem 4rem',
                                fontSize: '1.5rem',
                                borderRadius: '100px',
                                background: 'var(--accent)',
                                color: 'var(--bg-dark)',
                                fontWeight: '700',
                                textDecoration: 'none'
                            }}
                        >
                            Let's Talk
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/saikrish2004/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="LinkedIn profile"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-primary)',
                                textDecoration: 'none'
                            }}
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                <div style={{ marginTop: '10vh', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <p>© {new Date().getFullYear()} Saikrishna Pendem.</p>
                    <p>San Francisco / Remote</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
