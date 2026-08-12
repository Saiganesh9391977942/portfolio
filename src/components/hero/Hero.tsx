import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className='absolute top-0 left-0 mt-17 w-full h-screen bg-[url(../public/sai.png)] bg-contain bg-no-repeat bg-top md:bg-[url(../public/g.png)] md:bg-cover pointer-events-none'
            />

            <div className='mt-[58vh] px-6 md:px-0 md:mt-50 md:ml-180 relative z-10'>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='font-serif font-light italic text-xl md:text-2xl mt-10 tracking-wide'
                >
                    "Progress is built one commit at a time"
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='text-4xl md:text-5xl font-serif font-extrabold mt-5'
                >
                    Sai Ganesh <br />
                    Full Stack Developer
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='hidden md:block text-base md:text-xl mt-8 font-mono max-w-xl'
                >
                    Building scalable web applications with
                    React, Node.js, TypeScript<br className="hidden md:inline" /> and modern technologies.
                    Focused on performance, clean architecture
                    exceptional user experience.
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='ml-6 md:ml-225 mt-8 md:mt-17 flex flex-col sm:flex-row gap-4 relative z-10 mr-6 sm:mr-0 pb-16 md:pb-0'
            >
                <a href="#projects" className='border border-black rounded-md bg-transparent text-black px-5 py-3 md:px-6 md:py-3 text-base md:text-lg font-semibold shadow-8xl cursor-pointer hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto'> View My Work  </a>
                <a href="#contact" className=' border border-[#5c4738] rounded-md bg-mauve-950 text-white px-5 py-3 md:px-6 md:py-3 text-base md:text-lg font-semibold shadow-8xl cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto'> Connect with Me </a>
            </motion.div>

        </section>
    );
};
