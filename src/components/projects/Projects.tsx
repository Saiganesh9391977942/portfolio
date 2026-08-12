import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

const PROJECTS_DATA: Project[] = [
    {
        title: 'CuraLink',
        description: 'Curalink is an AI-powered healthcare information platform that helps users discover medical research, academic publications, and clinical trials through a single interface. I worked with React, Node.js, Express, FastAPI, MongoDB, LLM integration, and healthcare research APIs such as PubMed, OpenAlex, and ClinicalTrials.gov.',
        image: 'public/curalink.png',
        tags: ['Reactjs', 'Nodejs', 'MongoDB', 'FastAPI'],
        link: 'https://github.com/Saiganesh9391977942/curalink',
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 overflow-hidden">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-3"
                >
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#5c4738] tracking-tight">
                        Selected Works.
                    </h2>
                    <p className="text-stone-500 text-sm md:text-base font-sans font-light max-w-2xl leading-relaxed">
                        A curated collection of technical explorations, high-performance systems, and refined digital experiences.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-12 mt-4">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-white border border-stone-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-stretch min-h-[400px]"
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-[50%] relative min-h-[250px] md:min-h-full bg-stone-100 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                />
                                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-[50%] p-8 md:p-12 flex flex-col justify-center items-start bg-white">
                                <h3 className="text-3xl md:text-4.5xl font-serif font-normal text-[#1c1917] tracking-tight mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light mb-6 max-w-xl">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 border border-[#8c8275]/35 text-[#5c4738] bg-[#f5efe6] font-mono tracking-wide rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-1.5 text-sm font-serif font-normal text-[#1c1917] border-b border-[#1c1917]/30 pb-0.5 hover:border-[#1c1917] transition-all hover:gap-2.5 duration-200"
                                >
                                    View on github <FaGithub /><span className="font-sans">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
