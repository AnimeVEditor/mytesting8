import { motion } from 'framer-motion';
import { ChefHat, Leaf, Flame, Users, IndianRupee, Heart } from 'lucide-react';

const features = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Authentic Chinese",
    description: "Traditional recipes passed down through generations in Chinatown."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Fresh Ingredients",
    description: "Locally sourced produce and premium spices prepared daily."
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Live Wok Cooking",
    description: "Experience the true 'Wok Hei' flavour in every stir-fried dish."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family Friendly",
    description: "A warm, welcoming atmosphere perfect for family gatherings."
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    title: "Affordable Dining",
    description: "Premium quality meals starting at just ₹200-400 per person."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Loved By Thousands",
    description: "A neighborhood favorite with over 5,900 happy customer reviews."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section className="py-20 bg-card/50 relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">The Tung Nam Difference</h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto mt-4"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-background border border-border p-8 rounded-sm hover:-translate-y-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_rgba(196,30,58,0.3)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>
              
              <div className="text-secondary mb-6 p-3 bg-secondary/10 inline-block rounded-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
