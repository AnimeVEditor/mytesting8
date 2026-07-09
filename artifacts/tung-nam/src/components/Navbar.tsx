import { Link } from 'wouter';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'glass-nav-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-gradient-gold group-hover:scale-105 transition-transform duration-300">
              TUNG NAM
            </span>
            <span className="text-primary text-xl" aria-hidden="true">龍</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium tracking-widest uppercase hover:text-secondary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold tracking-wider transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              RESERVE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-30 pt-24 bg-background/95 backdrop-blur-xl flex flex-col items-center gap-6"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-lg font-medium tracking-widest uppercase hover:text-secondary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </>
  );
}
