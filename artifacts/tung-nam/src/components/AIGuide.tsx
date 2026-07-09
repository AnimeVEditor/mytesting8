import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, ArrowRight, RotateCcw } from 'lucide-react';

type Step = 'start' | 'diet' | 'base' | 'spice' | 'result';

export default function AIGuide() {
  const [step, setStep] = useState<Step>('start');
  const [answers, setAnswers] = useState({
    diet: '',
    base: '',
    spice: ''
  });

  const handleAnswer = (key: keyof typeof answers, value: string, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(nextStep);
  };

  const getRecommendation = () => {
    const { diet, base, spice } = answers;
    
    if (diet === 'veg') {
      if (base === 'noodles') return { title: "Veg Hakka Noodles & Chilli Paneer", desc: "A classic combination of wok-tossed eggless noodles with spicy cottage cheese.", price: "₹300" };
      if (base === 'rice' && spice === 'spicy') return { title: "Schezwan Fried Rice & Veg Manchurian", desc: "Fiery red rice perfectly balanced with mixed vegetable dumplings in dark sauce.", price: "₹310" };
      return { title: "Veg Fried Rice & Mushroom Hot Garlic", desc: "Comforting rice paired with earthy mushrooms in a robust garlic sauce.", price: "₹310" };
    } else {
      if (base === 'noodles' && spice === 'spicy') return { title: "Chilli Garlic Noodles & Chilli Chicken", desc: "For the spice lovers! Burnt garlic noodles with our legendary dry chilli chicken.", price: "₹350" };
      if (base === 'noodles') return { title: "Mixed Chowmein & Sweet Sour Chicken", desc: "A hearty bowl of loaded noodles complemented by vibrant sweet and sour flavors.", price: "₹390" };
      if (base === 'rice' && spice === 'mild') return { title: "Egg Fried Rice & Lemon Chicken", desc: "Subtle, comforting egg rice with refreshing, tangy lemon chicken.", price: "₹350" };
      return { title: "Mixed Fried Rice & Fish in Garlic Sauce", desc: "The ultimate Chinatown feast. Loaded rice with delicate fish in aromatic sauce.", price: "₹440" };
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12 rounded-lg shadow-2xl relative z-10">
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full p-4 shadow-lg text-primary">
            <ChefHat className="w-8 h-8" />
          </div>

          <div className="text-center mt-6 mb-8">
            <h2 className="font-heading text-3xl font-bold mb-2">Not Sure What To Order?</h2>
            <p className="text-muted-foreground font-serif">Let our virtual chef guide you to the perfect meal based on your cravings.</p>
          </div>

          <div className="min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {step === 'start' && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <button 
                    onClick={() => setStep('diet')}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-transform hover:-translate-y-1"
                  >
                    Start The Guide <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 'diet' && (
                <motion.div
                  key="diet"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-center mb-6">What are you in the mood for?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleAnswer('diet', 'veg', 'base')} className="p-6 border border-border hover:border-secondary hover:bg-secondary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-green-500 text-3xl">🌿</span> Vegetarian
                    </button>
                    <button onClick={() => handleAnswer('diet', 'nonveg', 'base')} className="p-6 border border-border hover:border-primary hover:bg-primary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-red-500 text-3xl">🍗</span> Non-Vegetarian
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'base' && (
                <motion.div
                  key="base"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-center mb-6">Choose your base:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleAnswer('base', 'noodles', 'spice')} className="p-6 border border-border hover:border-secondary hover:bg-secondary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-3xl">🍜</span> Noodles
                    </button>
                    <button onClick={() => handleAnswer('base', 'rice', 'spice')} className="p-6 border border-border hover:border-secondary hover:bg-secondary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-3xl">🍚</span> Rice
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'spice' && (
                <motion.div
                  key="spice"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-center mb-6">Spice level?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleAnswer('spice', 'mild', 'result')} className="p-6 border border-border hover:border-secondary hover:bg-secondary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-3xl">🧂</span> Mild & Savory
                    </button>
                    <button onClick={() => handleAnswer('spice', 'spicy', 'result')} className="p-6 border border-border hover:border-primary hover:bg-primary/5 rounded-sm transition-all text-lg font-heading font-bold flex flex-col items-center gap-3">
                      <span className="text-3xl">🌶️</span> Bring the Heat
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <span className="text-secondary font-bold uppercase tracking-wider text-sm">Chef Recommends</span>
                  <h3 className="text-3xl font-heading font-bold mt-2 mb-4 text-gradient-gold">{getRecommendation().title}</h3>
                  <p className="text-muted-foreground italic font-serif mb-6">{getRecommendation().desc}</p>
                  <p className="text-2xl font-bold mb-8">Approx: {getRecommendation().price}</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'd like to order the Chef's Recommendation: ${getRecommendation().title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider rounded-sm hover:-translate-y-1 transition-transform"
                    >
                      Order on WhatsApp
                    </a>
                    <button 
                      onClick={() => setStep('start')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-secondary/10 hover:border-secondary font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" /> Start Over
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
