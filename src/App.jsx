import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
    return (
        <div className="app">
            <Background />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <footer>
                <div className="container flex-center" style={{ padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Saikrishna Pendem. Built with React & AI.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
