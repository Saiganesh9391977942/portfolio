import React from 'react';
import { User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experiance: React.FC = () => {
    return (
        <section id="experience" className="py-16 px-6 md:px-12 bg-[#faf9f6] border-stone-200/40">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 overflow-hidden">

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left flex flex-col gap-3"
                >
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#5c4738]">
                        Experience
                    </h2>
                    <p className="text-stone-500 text-sm md:text-base font-serif italic font-light tracking-wide">
                        "Started this journey with curiosity, converting lines of code into solutions. <br />Growing every day through continuous learning, building practical interfaces, and refining engineering skills step-by-step."
                    </p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start mt-8">

                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-col gap-6 w-full"
                    >
                        <div className="bg-white border border-stone-200/60 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                            <h3 className="text-xl font-serif font-semibold text-[#5c4738] mb-2">
                                EnterpriseKart
                            </h3>
                            <p className="text-stone-500 text-sm leading-relaxed font-light">
                                EnterpriseKart is an online marketplace in India designed for buying and selling existing businesses and startups. It connects entrepreneurs and investors with verified business listings while streamlining valuations and legal processes.                            </p>
                        </div>

                        <div className="bg-white border border-stone-200/60 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                            <h3 className="text-xl font-serif font-semibold text-[#5c4738] mb-2">
                                Hargharwala
                            </h3>
                            <p className="text-stone-500 text-sm leading-relaxed font-light">
                                a digital platform and mobile app ecosystem that connects local, daily-essential vendors like milkmen and newspaper suppliers directly to household customers.                            </p>
                        </div>
                    </motion.div>

                    <div className="hidden md:flex flex-col items-center justify-self-center h-full relative py-2">
                        <div className="w-[1px] bg-stone-200/80 absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="relative z-10 w-10 h-10 rounded-xl bg-[#faf9f6] border border-stone-200/85 flex items-center justify-center shadow-sm hover:border-[#5c4738] transition-colors duration-200"
                        >
                            <User className="w-4 h-4 text-[#5c4738]" />
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col gap-4 text-left w-full pl-0 md:pl-4"
                    >
                        <span className="text-xs uppercase font-mono tracking-widest text-[#5c4738] font-bold">
                            April 2026 - Present
                        </span>

                        <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-stone-600 flex-shrink-0" />
                            <h3 className="text-2xl font-serif font-normal text-[#292524]">
                                Software Developer Intern
                            </h3>
                        </div>

                        <p className="text-stone-600 text-base font-light">
                            DigiUniv Technologies Private Limited
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {['React', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1.5 bg-stone-100/60 border border-stone-200/40 text-stone-600 font-sans tracking-wide rounded"
                                >
                                    {tech}
                                </span>
                             ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}; 