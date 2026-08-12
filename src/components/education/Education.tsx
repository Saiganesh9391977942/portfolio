import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    grade: string;
    details?: string;
    coursework?: string[];
}

const EDUCATION_DATA: EducationItem[] = [
    {
        degree: "B.Tech – Computer Science Engineering",
        institution: "IIIT(RGUKT), Srikakulam",
        duration: "2021 – 2025",
        grade: "CGPA: 7.6/10",
        coursework: ["Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems", "Computer Network"],
        details: "Focusing on software engineering principles, core computer science concepts, and full-stack development."
    },
    {
        degree: "Pre-University Course (MPC)",
        institution: "RGUKT Srikakulam",
        duration: "2019 – 2021",
        grade: "GPA: 8.4/10",
        details: "Specialized in Mathematics, Physics, and Chemistry, building a strong analytical foundation for higher education."
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "ZP High School, Nampalli",
        duration: "Completed 2019",
        grade: "GPA: 9.8/10",
        details: "Completed secondary school education with high academic achievement, setting the groundwork for technical studies."
    }
];

export const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12 bg-[#faf9f6] border-stone-200/40">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-3 text-left"
                >
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#5c4738] tracking-tight">
                        Education
                    </h2>
                    <p className="text-stone-500 text-sm md:text-base font-sans font-light max-w-2xl leading-relaxed">
                        My academic background, key coursework, and qualifications.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative mt-8">
                    {/* Center line (only md and up) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone-200/80 -translate-x-1/2"></div>

                    {/* Timeline items */}
                    <div className="space-y-12 md:space-y-20">
                        {EDUCATION_DATA.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row items-stretch relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Mobile-only unified layout card */}
                                    <div className="md:hidden w-full px-2 pb-6">
                                        <div className="w-full bg-white border border-stone-200/60 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                            <span className="text-xs uppercase font-mono tracking-wider text-stone-400 font-medium">
                                                {item.duration} | {item.grade}
                                            </span>
                                            <h3 className="text-lg font-serif font-semibold text-[#5c4738] flex items-center gap-2 mt-1 mb-0.5">
                                                {item.degree.includes("B.Tech") ? (
                                                    <GraduationCap className="text-[#5c4738] h-4.5 w-4.5 flex-shrink-0" />
                                                ) : (
                                                    <School className="text-[#5c4738] h-4.5 w-4.5 flex-shrink-0" />
                                                )}
                                                {item.degree}
                                            </h3>
                                            <p className="text-stone-500 font-sans font-medium text-xs">
                                                {item.institution}
                                            </p>

                                            <p className="text-stone-500 text-xs leading-relaxed font-light mt-3 pt-3 border-t border-stone-100">
                                                {item.details}
                                            </p>

                                            {item.coursework && (
                                                <div className="mt-3 pt-3 border-t border-stone-100">
                                                    <span className="text-[9px] uppercase font-mono tracking-wider text-stone-400 font-medium block mb-2">Relevant Coursework</span>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.coursework.map((course, idx) => (
                                                            <span key={idx} className="text-[10px] px-2 py-1 bg-stone-100/60 border border-stone-200/40 text-stone-600 font-sans tracking-wide rounded">
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className={`hidden md:flex w-full md:w-1/2 items-center justify-end px-4 ${isEven ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'}`}
                                    >
                                        {isEven ? (
                                            /* Description block for even index on the right (so aligned left visually, but text layout matches) */
                                            <div className="w-full bg-white border border-stone-200/60 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                                <p className="text-stone-500 text-sm leading-relaxed font-light">
                                                    {item.details}
                                                </p>
                                                {item.coursework && (
                                                    <div className="mt-4 pt-4 border-t border-stone-100">
                                                        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 font-medium block mb-2">Relevant Coursework</span>
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.coursework.map((course, idx) => (
                                                                <span key={idx} className="text-xs px-3 py-1.5 bg-stone-100/60 border border-stone-200/40 text-stone-600 font-sans tracking-wide rounded">
                                                                    {course}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            /* Degree details block */
                                            <div className="w-full text-left md:text-right flex flex-col gap-1">
                                                <span className="text-xs uppercase font-mono tracking-wider text-stone-400 font-medium">
                                                    {item.duration} | {item.grade}
                                                </span>
                                                <h3 className="text-xl font-serif font-semibold text-[#5c4738] flex items-center md:justify-end gap-2">
                                                    {item.degree.includes("B.Tech") ? (
                                                        <GraduationCap className="text-[#5c4738] h-5 w-5 flex-shrink-0" />
                                                    ) : (
                                                        <School className="text-[#5c4738] h-5 w-5 flex-shrink-0" />
                                                    )}
                                                    {item.degree}
                                                </h3>
                                                <span className="text-stone-500 font-sans font-medium text-sm md:text-base">
                                                    {item.institution}
                                                </span>
                                            </div>
                                        )}
                                    </motion.div>



                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className={`hidden md:flex w-full md:w-1/2 items-center justify-start px-4 ${isEven ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'}`}
                                    >
                                        {!isEven ? (
                                            /* Description block for odd index */
                                            <div className="w-full bg-white border border-stone-200/60 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                                <p className="text-stone-500 text-sm leading-relaxed font-light">
                                                    {item.details}
                                                </p>
                                            </div>
                                        ) : (
                                            /* Degree details block for even index */
                                            <div className="w-full text-left md:text-right flex flex-col gap-1">
                                                <span className="text-xs uppercase font-mono tracking-wider text-stone-400 font-medium">
                                                    {item.duration} | {item.grade}
                                                </span>
                                                <h3 className="text-xl font-serif font-semibold text-[#5c4738] flex items-center md:justify-end gap-2">
                                                    {item.degree.includes("B.Tech") ? (
                                                        <GraduationCap className="text-[#5c4738] h-5 w-5 flex-shrink-0" />
                                                    ) : (
                                                        <School className="text-[#5c4738] h-5 w-5 flex-shrink-0" />
                                                    )}
                                                    {item.degree}
                                                </h3>
                                                <span className="text-stone-500 font-sans font-medium text-sm md:text-base">
                                                    {item.institution}
                                                </span>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};