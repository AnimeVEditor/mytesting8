import { motion } from 'framer-motion';
import aboutImage from '@assets/generated_images/about.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Heritage</span>
              <div className="h-0.5 w-12 bg-secondary mt-2"></div>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              A Taste of Old Chinatown, <br />
              <span className="text-gradient-gold">Preserved in Time.</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg font-serif">
              <p>
                Nestled in the historic lanes of Tiretti Bazaar, Tung Nam Eating House stands as a guardian of authentic Chinese culinary traditions in Kolkata. For generations, we have served the neighborhood with recipes that have crossed oceans and stood the test of time.
              </p>
              <p>
                Our philosophy is simple: uncompromising quality, fresh ingredients daily, and the unmistakable <span className="italic">wok hei</span> (breath of the wok) that brings every dish to life. 
              </p>
              <p>
                Whether you're craving our legendary Hakka Noodles or seeking comfort in a warm bowl of Soup, stepping into Tung Nam is more than a meal—it's a journey into the heart of India's oldest Chinatown.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="text-3xl font-bold font-heading text-secondary">30+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Years of Legacy</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <h4 className="text-3xl font-bold font-heading text-secondary">5.9k+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Happy Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <div className="absolute inset-0 border border-secondary/20 z-10 m-4 pointer-events-none rounded-sm transition-transform duration-500 hover:scale-[0.98]"></div>
              <img 
                src={aboutImage} 
                alt="Wok cooking in authentic Chinese kitchen" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-sm shadow-2xl z-20 max-w-[200px]">
              <p className="font-heading font-bold text-lg mb-1">Authentic Flavour</p>
              <div className="flex text-secondary text-sm">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
