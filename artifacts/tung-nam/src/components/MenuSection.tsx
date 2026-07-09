import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  "Soups": [
    { name: "Sweet Corn Soup", price: "90", desc: "Classic thick soup with sweet corn kernels", veg: true },
    { name: "Hot & Sour Soup", price: "100", desc: "Spicy and tangy broth with tofu and bamboo shoots", veg: true },
    { name: "Manchow Soup", price: "110", desc: "Dark brown soup topped with crispy fried noodles", veg: false },
    { name: "Clear Chicken Soup", price: "100", desc: "Light, healthy broth with minced chicken", veg: false },
    { name: "Lung Fung Soup", price: "120", desc: "Thick soup with mushrooms and coriander", veg: false },
  ],
  "Starters": [
    { name: "Crispy Chilli Baby Corn", price: "150", desc: "Batter-fried baby corn tossed in sweet & spicy sauce", veg: true },
    { name: "Dry Chilli Chicken", price: "210", desc: "Kolkata's favourite dry starter with green chillies", veg: false },
    { name: "Pan Fried Chilli Fish", price: "260", desc: "Sliced fish pan-fried with onions and bell peppers", veg: false },
    { name: "Golden Fried Prawns", price: "320", desc: "Crispy battered prawns served with hot garlic sauce", veg: false },
    { name: "Drums of Heaven", price: "220", desc: "Spicy chicken wings tossed in schezwan sauce", veg: false },
  ],
  "Chicken": [
    { name: "Garlic Chicken", price: "230", desc: "Tender chicken cooked in strong garlic-infused gravy", veg: false },
    { name: "Kung Pao Chicken", price: "250", desc: "Spicy stir-fry with peanuts, vegetables, and chilli peppers", veg: false },
    { name: "Schezwan Chicken", price: "240", desc: "Fiery red gravy prepared with authentic schezwan peppercorns", veg: false },
    { name: "Lemon Chicken", price: "230", desc: "Tangy and refreshing lemon flavored chicken", veg: false },
    { name: "Chicken Manchurian", price: "220", desc: "Minced chicken balls in dark soy-based gravy", veg: false },
  ],
  "Vegetarian": [
    { name: "Veg Manchurian", price: "160", desc: "Mixed vegetable dumplings in classic dark gravy", veg: true },
    { name: "Chilli Paneer", price: "190", desc: "Cottage cheese cubes tossed with bell peppers and soy sauce", veg: true },
    { name: "Stir Fried Asian Greens", price: "180", desc: "Broccoli, bok choy, and mushrooms in mild garlic sauce", veg: true },
    { name: "Mushroom in Hot Garlic", price: "200", desc: "Button mushrooms cooked in spicy garlic sauce", veg: true },
    { name: "Hakka Chilli Potato", price: "160", desc: "Crispy potato wedges tossed with spring onions", veg: true },
  ],
  "Noodles": [
    { name: "Veg Hakka Noodles", price: "110", desc: "Classic stir-fried eggless noodles", veg: true },
    { name: "Chicken Hakka Noodles", price: "130", desc: "Stir-fried egg noodles with shredded chicken", veg: false },
    { name: "Mixed Chowmein", price: "150", desc: "Noodles with chicken, prawns, and egg", veg: false },
    { name: "Pan Fried Noodles", price: "170", desc: "Crispy noodle bed topped with savory gravy", veg: false },
    { name: "Chilli Garlic Noodles", price: "140", desc: "Spicy noodles tossed with burnt garlic", veg: false },
  ],
  "Rice": [
    { name: "Veg Fried Rice", price: "110", desc: "Wok-tossed rice with finely chopped vegetables", veg: true },
    { name: "Egg Fried Rice", price: "120", desc: "Simple and comforting rice tossed with scrambled egg", veg: false },
    { name: "Chicken Fried Rice", price: "140", desc: "Classic preparation with diced chicken", veg: false },
    { name: "Mixed Fried Rice", price: "160", desc: "Loaded with chicken, prawns, and egg", veg: false },
    { name: "Schezwan Fried Rice", price: "150", desc: "Spicy red rice preparation", veg: false },
  ],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Soups");
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Culinary Heritage</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">The Full Menu</h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 text-sm font-bold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-background border border-border text-muted-foreground hover:border-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full max-w-5xl min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              >
                {(menuData as any)[activeTab].map((item: any, i: number) => (
                  <div key={i} className="group flex flex-col relative pb-4 border-b border-border/50">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-bold font-heading flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-sm border ${item.veg ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'} flex items-center justify-center`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </span>
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-secondary">₹{item.price}</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-muted-foreground text-sm font-serif italic line-clamp-2 pr-4">
                        {item.desc}
                      </p>
                      <a 
                        href="https://wa.me/919876543210" // TODO: Replace with actual WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-border hover:bg-secondary hover:text-secondary-foreground text-xs font-bold uppercase rounded-sm cursor-pointer"
                      >
                        Add
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-secondary text-secondary-foreground font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all rounded-sm shadow-xl shadow-secondary/20 hover:-translate-y-1"
            >
              Order Full Menu on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
