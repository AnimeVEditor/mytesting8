import { MessageSquare, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className={`w-12 h-12 bg-card border border-border text-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:border-secondary hover:text-secondary ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Float */}
        {/* TODO: Replace XXXXXXXXXX with actual WhatsApp number */}
        <a 
          href="https://wa.me/919876543210?text=Hi%2C+I%27d+like+to+enquire+about+Tung+Nam+Eating+House"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Contact on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border p-4 z-40">
        <a 
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-3 rounded-sm font-bold uppercase tracking-wider flex justify-center items-center gap-2 shadow-lg"
        >
          <MessageSquare className="w-5 h-5" /> Order via WhatsApp
        </a>
      </div>
    </>
  );
}
