import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Find Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-8">Heart of Chinatown</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Tung Nam Eating House</h4>
                  <p className="text-muted-foreground font-serif leading-relaxed">
                    24 Chatta Wala Gully, Poddar Court,<br />
                    Tiretti Bazaar, Kolkata,<br />
                    West Bengal 700012
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground font-serif leading-relaxed">
                    Monday – Sunday<br />
                    11:00 AM – 10:30 PM
                  </p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a 
                  href="https://www.google.com/maps/place/Tung+Nam+Eating+House/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider rounded-sm hover:bg-secondary/90 transition-all hover:-translate-y-1"
                >
                  <Navigation className="w-4 h-4" /> Open in Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-video rounded-sm overflow-hidden border border-border shadow-2xl p-2 bg-background"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1!2d88.3497!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027684cb79abe3%3A0x0!2sTung+Nam+Eating+House!5e0!3m2!1sen!2sin!4v1"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' /* Pseudo dark mode for iframe */ }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-sm"
              title="Tung Nam Map Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
