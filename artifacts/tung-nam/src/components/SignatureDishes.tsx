import { motion, type Variants } from 'framer-motion';
import { Star, Award } from 'lucide-react';

import hakkaNoodles from '@assets/generated_images/dish-hakka-noodles.jpg';
import chilliChicken from '@assets/generated_images/dish-chilli-chicken.jpg';
import friedRice from '@assets/generated_images/dish-fried-rice.jpg';
import sweetSourChicken from '@assets/generated_images/dish-sweet-sour-chicken.jpg';
import fishGarlic from '@assets/generated_images/dish-fish-garlic.jpg';
import dimSum from '@assets/generated_images/dish-dim-sum.jpg';
import manchurian from '@assets/generated_images/dish-manchurian.jpg';
import springRolls from '@assets/generated_images/dish-spring-rolls.jpg';

const signatureDishes = [
  {
    name: "Hakka Noodles",
    price: "120",
    desc: "Stir-fried egg noodles with crisp vegetables, soy sauce, and the signature wok hei",
    badge: "Best Seller",
    icon: <Award className="w-4 h-4" />,
    img: hakkaNoodles
  },
  {
    name: "Chilli Chicken",
    price: "220",
    desc: "Crispy fried chicken tossed in fiery chilli-garlic sauce — a Kolkata Chinese classic",
    badge: "Chef's Pick",
    icon: <Star className="w-4 h-4" />,
    img: chilliChicken
  },
  {
    name: "Mixed Fried Rice",
    price: "140",
    desc: "Fragrant wok-tossed rice with eggs, vegetables, and house sauces",
    badge: "Best Seller",
    icon: <Award className="w-4 h-4" />,
    img: friedRice
  },
  {
    name: "Sweet & Sour Chicken",
    price: "240",
    desc: "Tender chicken in vibrant sweet-sour sauce with bell peppers and pineapple",
    badge: "Chef's Pick",
    icon: <Star className="w-4 h-4" />,
    img: sweetSourChicken
  },
  {
    name: "Fish in Garlic Sauce",
    price: "280",
    desc: "Delicate fish fillets in aromatic garlic-ginger sauce, a house specialty",
    img: fishGarlic
  },
  {
    name: "Dim Sum (Steamed)",
    price: "160",
    desc: "Hand-crafted steamed dumplings filled with seasoned pork and vegetables",
    badge: "Chef's Pick",
    icon: <Star className="w-4 h-4" />,
    img: dimSum
  },
  {
    name: "Manchurian Gravy",
    price: "180",
    desc: "Fried vegetable/chicken balls in rich Manchurian sauce — comfort in a bowl",
    badge: "Best Seller",
    icon: <Award className="w-4 h-4" />,
    img: manchurian
  },
  {
    name: "Spring Rolls",
    price: "100",
    desc: "Crispy golden rolls stuffed with seasoned vegetables and glass noodles",
    img: springRolls
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SignatureDishes() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Today's Specials</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6 text-gradient-gold">Signature Dishes</h2>
            <p className="text-muted-foreground text-lg font-serif">
              Our most celebrated recipes, crafted with the perfect balance of spice, sweetness, and the unmistakable breath of the wok.
            </p>
          </div>
          <a 
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#menu');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="hidden md:inline-flex px-6 py-3 border border-border hover:border-secondary text-sm font-bold tracking-widest uppercase hover:text-secondary transition-all"
          >
            View Full Menu
          </a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {signatureDishes.map((dish, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group relative bg-card border border-border overflow-hidden rounded-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {dish.badge && (
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1 rounded-sm border border-border/50">
                    <span className={dish.badge === "Best Seller" ? "text-secondary" : "text-primary"}>
                      {dish.icon}
                    </span>
                    {dish.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 font-heading font-bold rounded-sm shadow-lg">
                  ₹{dish.price}
                </div>
              </div>
              
              <div className="p-6 relative z-10 bg-card">
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{dish.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {dish.desc}
                </p>
                
                <a 
                  href="https://wa.me/919876543210" // TODO: Replace with real WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                >
                  Order Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <a 
            href="#menu"
            className="inline-flex px-8 py-4 border border-border hover:border-secondary text-sm font-bold tracking-widest uppercase hover:text-secondary transition-all w-full justify-center"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
