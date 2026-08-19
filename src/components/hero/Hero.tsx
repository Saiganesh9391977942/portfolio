import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary/10">
            {/* Background Image for all devices */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 mt-20 bg-[url(../public/sai.png)] xl:bg-[url(../public/g.png)] bg-cover bg-center xl:bg-left-top pointer-events-none z-0"
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 xl:px-16 flex flex-col justify-center min-h-screen pt-20 pb-16 xl:py-0">
                <div className="grid grid-cols-1 xl:grid-cols-12 w-full gap-8">
                    {/* Left spacer column for desktop layout so background shows */}
                    <div className="hidden xl:block xl:col-span-6" />

                    {/* Content Column */}
                    <div className="xl:col-span-6 flex flex-col justify-center">
                        {/* Glassmorphic card for mobile/tablet, plain text for desktop */}
                        <div className="  xl:backdrop-blur-none xl:bg-transparent xl:border-none rounded-2xl p-6 sm:p-10 xl:p-0  xl:shadow-none">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 0.6 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-serif font-light italic text-lg sm:text-xl xl:text-2xl tracking-wide text-neutral-800"
                            >
                                "Progress is built one commit at a time"
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold mt-4 xl:mt-5 text-neutral-900 leading-tight"
                            >
                                Sai Ganesh <br />
                                <span className="text-mauve-950">Full Stack Developer</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 0.8 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-sm sm:text-base xl:text-lg mt-6 xl:mt-8 font-mono text-neutral-700 max-w-xl leading-relaxed"
                            >
                                Building scalable web applications with React, Node.js, TypeScript and modern technologies.
                                Focused on performance, clean architecture, and exceptional user experience.
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mt-8 xl:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                            >
                                <a
                                    href="#projects"
                                    className="border border-black rounded-md bg-transparent text-black px-5 py-3 xl:px-6 xl:py-3 text-base xl:text-lg font-semibold shadow-md hover:shadow-xl cursor-pointer hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="border border-[#5c4738] rounded-md bg-neutral-900 text-white px-5 py-3 xl:px-6 xl:py-3 text-base xl:text-lg font-semibold shadow-md hover:shadow-xl cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto"
                                >
                                    Connect with Me
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

