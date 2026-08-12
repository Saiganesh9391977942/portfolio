import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-10 px-6 md:px-12 border-t border-stone-900/60 text-stone-400 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">


                <div className="font-sans font-light tracking-wide">
                    © 2026 Sai Ganesh. All rights reserved.
                </div>


                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-sans font-medium">
                    <a
                        href="https://github.com/Saiganesh9391977942"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                    >
                        <FaGithub className="w-4 h-4 text-white" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sai-ganesh-thenepalli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                    >
                        <FaLinkedin className="w-4 h-4 text-white" />
                        LinkedIn
                    </a>
                    {/* <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                    >
                        <FaTwitter className="w-4 h-4 text-white" />
                        Twitter
                    </a> */}

                </div>

            </div>
        </footer>
    );
};