import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('ABOUT');
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'EDUCATION', 'CONTACT'];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setActiveItem(item);
    setIsOpen(false);

    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-stone-200/40 py-4 px-6 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'HOME')}
          className="text-xl md:text-2xl font-semibold text-[#5c4738] font-serif tracking-wide hover:opacity-85 transition-opacity"
        >
          SAI GANESH THENEPALLI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeItem === item;
            const targetId = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive ? 'text-[#3d2e24]' : 'text-stone-500 hover:text-stone-800'
                  }`}
              >
                {item}
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3d2e24]"></span>}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href="/Sai_Ganesh.docx" download className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#5c4738] hover:bg-[#4a392d] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm">
            My Resume
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#5c4738] hover:text-[#3d2e24] cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf9f6] border-b border-stone-200/50 shadow-md py-6 px-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              const targetId = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-base font-medium py-1 transition-colors ${isActive ? 'text-[#3d2e24] border-l-2 border-[#3d2e24] pl-2' : 'text-stone-500 pl-2'}`}
                >
                  {item}
                </a>
              );
            })}
          </nav>
          <a href="/Sai_Ganesh.docx" download className="inline-flex sm:hidden items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#5c4738] hover:bg-[#4a392d] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm w-full text-center">
            My Resume
          </a>
        </div>
      )}
    </header>
  );
};