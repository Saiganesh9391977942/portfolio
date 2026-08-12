import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { Experiance } from '../components/experiance/Experiance';
import { Projects } from '../components/projects/Projects';
import { About } from '../components/about/About';
import { Footer } from '../components/footer/Footer';
import { Skills } from '../components/skills/Skills';
import { Education } from '../components/education/Education';
import { ContactForm } from '../components/contact/ContactForm';

export const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experiance />
            <Projects />
            <Skills />
            <Education />
            <ContactForm />
            <Footer />

        </>
    );
};
