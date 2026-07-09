import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  { name: "A. Sharma", date: "2 weeks ago", text: "Tung Nam never disappoints. Their Mixed Fried Rice and Chilli Chicken is the definition of Kolkata Chinese comfort food. The portions are huge and the price is unbeatable." },
  { name: "R. Chatterjee", date: "1 month ago", text: "Been coming here since my college days. The authenticity hasn't dropped a single bit. You must try their Hakka Noodles — perfectly wok tossed with that smoky flavor." },
  { name: "S. Bose", date: "3 months ago", text: "Hidden gem in Tiretti Bazaar! The ambiance is old-school and the food is Michelin level for a fraction of the price. The Garlic Fish is a revelation." },
  { name: "K. Das", date: "2 weeks ago", text: "Sunday family lunches are incomplete without Tung Nam. Very courteous staff, quick service even when packed, and the Sweet Corn Soup hits the soul." },
  { name: "P. Mukherjee", date: "1 month ago", text: "The Dim Sums here are just wow! Hand crafted and generously filled. Do not miss the pan-fried noodles either. 5 stars!" },
  { name: "M. Gupta", date: "2 months ago", text: "No fancy decor, just pure unadulterated Chinese food the way it was meant to be. The Wok Hei is strong with this one." },
  { name: "V. Singh", date: "3 weeks ago", text: "If you want authentic Chinatown experience, this is the place. The Manchurian gravy was rich and flavorful. Highly recommended for foodies." },
  { name: "D. Banerjee", date: "1 week ago", text: "Still the best Chinese restaurant in central Kolkata. Affordable, delicious, and consistent. Their crispy chilli baby corn is the best starter." }
];

// Counter animation component
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count.toLocaleString()}</>;
};

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Word of Mouth</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">Loved by Kolkata</h2>
            <div className="h-0.5 w-16 bg-secondary mt-6"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-card border border-border p-6 rounded-sm shadow-xl"
          >
            <div>
              <div className="text-4xl font-heading font-bold text-gradient-gold">4.3</div>
              <div className="flex text-secondary text-sm my-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold">
                <Counter value={5900} />+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Google Reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-card border border-border p-8 rounded-sm h-full flex flex-col relative group hover:border-secondary/50 transition-colors">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    <div className="flex items-center gap-1 text-secondary mb-4">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground font-serif italic mb-6 flex-grow leading-relaxed">
                      "{review.text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={scrollPrev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              aria-label="Next review"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
