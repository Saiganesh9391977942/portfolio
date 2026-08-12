import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
    return (
        <section id="about" className="py-28 px-6 md:px-12 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start overflow-hidden">

                {/* Left Column: Heading + First Paragraph */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#5c4738]">
                        About Me
                    </h2>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                        I'm <strong className="font-semibold text-stone-850">Sai Ganesh</strong>, a B.Tech Computer Science graduate (2025) and Software Developer focused on building modern, scalable web applications. I work primarily with <span className="text-[#5c4738] font-medium">React.js, TypeScript, Node.js, Express.js, MongoDB, and Tailwind CSS</span>, with hands-on experience developing full-stack applications and REST APIs.
                    </p>
                </motion.div>

                {/* Right Column: Second Paragraph + Accent Line */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-8 md:pt-20"
                >
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                        I enjoy turning ideas into clean, responsive, and practical digital products. Currently, I'm expanding my expertise in <span className="text-[#5c4738] font-medium">full-stack development, AI/LLM integrations, API development, and software architecture</span>, while working on real-world applications and continuously improving my engineering skills.
                    </p>

                    {/* Decorative Horizontal Accent Line */}
                    <div className="w-16 h-[2px] bg-[#5c4738]/30 rounded-full" />
                </motion.div>

            </div>
        </section>
    );
};
