import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do you take reservations?",
    a: "We operate primarily on a first-come, first-served basis due to high footfall. However, for large family groups (8+), you can call ahead."
  },
  {
    q: "Is there parking available?",
    a: "Being in the heart of historic Tiretti Bazaar, parking is very limited. We recommend using cab services or parking at nearby designated street parking zones."
  },
  {
    q: "Do you have vegetarian options?",
    a: "Absolutely! We have an extensive vegetarian menu including Hakka Noodles, Manchurian, Chilli Paneer, and several starters that are highly rated."
  },
  {
    q: "What's the average cost per person?",
    a: "Tung Nam is known for affordable dining. A fulfilling meal typically costs between ₹200 to ₹400 per person."
  },
  {
    q: "Do you offer home delivery?",
    a: "You can place pickup orders directly via our WhatsApp number. For delivery, we are available on major food delivery platforms in Kolkata."
  }
];

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form / Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Get in touch</span>
            <h2 className="font-heading text-4xl font-bold mt-2 mb-8">Reach Out To Us</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 p-4 border border-border bg-card rounded-sm">
                <MessageSquare className="text-primary w-6 h-6 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">WhatsApp Orders</p>
                  {/* TODO: Add restaurant phone number when publicly confirmed */}
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 border border-border bg-card rounded-sm">
                <Phone className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">General Enquiry</p>
                  <p className="text-xl font-bold text-muted-foreground">Contact via WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 border border-border bg-card rounded-sm">
                <Mail className="text-primary w-6 h-6 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-bold text-muted-foreground">hello@tungnam.concept</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border p-6 rounded-sm">
              <h3 className="font-bold text-lg mb-4">Join our Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">Get updates on new menu items and special holiday menus (like Chinese New Year specials).</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                />
                <button type="submit" className="bg-secondary text-secondary-foreground px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border bg-card rounded-sm overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-background/50 transition-colors"
                  >
                    <span className="font-bold pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-secondary' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-muted-foreground font-serif border-t border-border/50 bg-background/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
