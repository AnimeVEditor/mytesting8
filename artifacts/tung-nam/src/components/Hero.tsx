import { motion } from 'framer-motion';
import heroImage from '@assets/generated_images/hero.jpg';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Tung Nam Eating House authentic atmosphere" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      </div>

      {/* Floating Lanterns (CSS Animation simulated with Framer Motion) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: '110vh', 
              x: `${Math.random() * 100}vw`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: '-10vh',
              x: `${Math.random() * 100}vw`
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/80 blur-[2px]"
            style={{
              boxShadow: '0 0 10px 2px rgba(196, 30, 58, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-secondary text-sm">⭐⭐⭐⭐☆</span>
            <span className="text-sm font-medium tracking-wide">4.3 Rating · 5,900+ Reviews</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-gradient-gold drop-shadow-2xl max-w-5xl"
        >
          Experience the Authentic Taste of Chinatown
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 font-serif italic"
        >
          Legendary Chinese Flavours · Tiretti Bazaar · Loved Across Kolkata
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl"
        >
          <a 
            href="#menu"
            onClick={(e) => scrollToSection(e, '#menu')}
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all hover:-translate-y-1 rounded-sm w-full sm:w-auto"
          >
            Explore Menu
          </a>
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-4 border border-secondary text-secondary font-bold tracking-widest uppercase hover:bg-secondary hover:text-secondary-foreground transition-all hover:-translate-y-1 rounded-sm w-full sm:w-auto"
          >
            Reserve Table
          </a>
          <a 
            href="https://wa.me/919876543210" // TODO: Replace with real WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary text-primary font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 rounded-sm w-full sm:w-auto"
          >
            Order Now
          </a>
          <a 
            href="#location"
            onClick={(e) => scrollToSection(e, '#location')}
            className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-all hover:-translate-y-1 rounded-sm w-full sm:w-auto"
          >
            Directions
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-secondary transition-colors"
          onClick={(e) => scrollToSection(e as any, '#about')}
        >
          <div className="w-1 h-3 bg-secondary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
