import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DockItem = ({ mouseX, children, href, onClick, target, rel }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [100, 140, 100]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const heightSync = useTransform(distance, [-150, 0, 150], [40, 55, 40]);
    const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height }}
            className="dock-item"
        >
            <a
                href={href}
                onClick={onClick}
                target={target}
                rel={rel}
                className="dock-link"
            >
                {children}
            </a>
        </motion.div>
    );
};

const Navbar = () => {
    const mouseX = useMotionValue(Infinity);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="dock-container">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="dock glass-premium"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {navLinks.map((link) => (
                    <DockItem key={link.name} mouseX={mouseX} href={link.href}>
                        {link.name}
                    </DockItem>
                ))}

                <div className="dock-divider"></div>

                <DockItem mouseX={mouseX} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    CV
                </DockItem>
            </motion.div>

            {/* Styles for this component specifically */}
            <style>{`
                .dock-container {
                    position: fixed;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    display: flex;
                    justify-content: center;
                }
                
                .dock {
                    display: flex;
                    gap: 1rem; // Gap between items
                    padding: 1rem;
                    align-items: flex-end;
                    border-radius: 24px; // var(--radius-dock)
                    height: 80px; // Fixed height for alignment
                    box-sizing: border-box;
                }

                .dock-item {
                    border-radius: 30px;
                    background: rgba(255, 255, 255, 0.05); /* Slight pill bg */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden; /* Keep text inside */
                }

                .dock-link {
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: color 0.2s;
                    user-select: none;
                    white-space: nowrap;
                    padding: 0 1rem;
                }
                
                .dock-link:hover {
                    color: var(--accent);
                }

                .dock-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    margin: 0 0.5rem;
                    align-self: center;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
