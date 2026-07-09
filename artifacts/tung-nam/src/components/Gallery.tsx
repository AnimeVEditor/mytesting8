import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import gal1 from '@assets/generated_images/gallery-1.jpg';
import gal2 from '@assets/generated_images/gallery-2.jpg';
import gal3 from '@assets/generated_images/gallery-3.jpg';
import gal4 from '@assets/generated_images/gallery-4.jpg';
import gal5 from '@assets/generated_images/gallery-5.jpg';
import gal6 from '@assets/generated_images/gallery-6.jpg';
import gal7 from '@assets/generated_images/gallery-7.jpg';
import gal8 from '@assets/generated_images/gallery-8.jpg';
import gal9 from '@assets/generated_images/gallery-9.jpg';
import gal10 from '@assets/generated_images/gallery-10.jpg';
import gal11 from '@assets/generated_images/gallery-11.jpg';
import gal12 from '@assets/generated_images/gallery-12.jpg';

const images = [
  { src: gal1, alt: "Spicy Chinese Noodles" },
  { src: gal2, alt: "Traditional Rice Bowl" },
  { src: gal4, alt: "Heritage Interior" },
  { src: gal3, alt: "Kung Pao Chicken" },
  { src: gal6, alt: "Wok Cooking Flames" },
  { src: gal8, alt: "Steamed Dim Sum" },
  { src: gal5, alt: "Chinatown Atmosphere" },
  { src: gal7, alt: "Chef Tossing Food" },
  { src: gal9, alt: "Crispy Wontons" },
  { src: gal11, alt: "Steamed Whole Fish" },
  { src: gal10, alt: "Spicy Soup" },
  { src: gal12, alt: "Mapo Tofu" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Visual Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">Through Our Lens</h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border border-border w-full text-left"
              onClick={() => setSelectedImg(img.src)}
              aria-label={`Open ${img.alt} in lightbox`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImg(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 30 }}
              src={selectedImg}
              alt="Gallery large"
              className="max-w-full max-h-[90vh] object-contain rounded-sm border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
