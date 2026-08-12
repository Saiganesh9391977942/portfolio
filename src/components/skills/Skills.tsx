import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
    title: string;
    skills: string[];
}

export const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "FastAPI"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL", "Database Design & CRUD"]
        },
        {
            title: "Tools & Development",
            skills: ["Git & GitHub", "Postman", "JIRA", "VS Code"]
        },
        {
            title: "Programming & Concepts",
            skills: ["Java", "SQL", "Data Structures & Algorithms", "OOPs", "SDLC", "Agile", "API Testing"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-12 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto flex flex-col gap-5 overflow-hidden">

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4"
                >
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-[#5c4738]" />
                        <span className="text-xs uppercase font-mono tracking-widest text-[#5c4738] font-medium">
                            Technical Arsenal
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#5c4738] tracking-tight">
                        Tools of Execution
                    </h2>

                    {/* Subtitle */}
                    <p className="text-stone-500 text-sm md:text-base font-sans font-light max-w-xl leading-relaxed">
                        A curated selection of technologies chosen for their power, scalability, and developer experience.
                    </p>
                </motion.div>

                {/* Cards Row (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#faf9f6] rounded-sm pt-5 px-5 pb-3 flex flex-col items-start min-h-[285px] transition-transform duration-300 hover:bg-[#e8e4dd] hover:translate-y-1 hover:shadow-[#e8e4dd]"
                        >
                            {/* Card Category Title */}
                            <h3 className="text-xl font-serif font-normal text-[#1c1917] mb-4">
                                {category.title.split(' ')[0]} {/* Simplifies 'Tools & Development' -> 'Tools', etc. */}
                            </h3>

                            {/* Skill Badges (2-Column Grid) */}
                            <div className="grid grid-cols-2 gap-2 w-full">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[10px] px-1.5 py-2 bg-white border border-[#8c8275]/35 text-[#5c4738] rounded-md font-sans tracking-tight hover:bg-[#fcfbf9] hover:border-[#5c4738]/50 transition-all cursor-default text-center flex items-center justify-center min-h-[38px] leading-tight break-words w-full shadow-2xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

