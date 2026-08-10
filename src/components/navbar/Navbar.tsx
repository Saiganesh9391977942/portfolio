import { useState } from "react";

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const navItems = ['HOME', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'CONTACT'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/80 backdrop-blur-sm border-b border-stone-200/40 py-4 px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#home" className="text-2xl font-semibold text-[#5c4738] font-serif tracking-wide hover:opacity-85 transition-opacity">
          SAI GANESH THENEPALLI
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeItem === item;
            return (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive ? 'text-[#3d2e24]' : 'text-stone-500 hover:text-stone-800'
                  }`}
              >
                {item}
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3d2e24]"></span>}
              </button>
            );
          })}
        </nav>

        <a href="./public/SaiGanesh.docx" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#5c4738] hover:bg-[#4a392d] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm">
          My Resume
        </a>
      </div>
    </header>
  );
};