import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-24 md:pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-bold tracking-wider text-gradient-gold">
                TUNG NAM
              </span>
              <span className="text-primary text-xl">龍</span>
            </div>
            <p className="text-muted-foreground font-serif max-w-sm mb-6 leading-relaxed">
              Serving the authentic taste of old Chinatown to generations of food lovers in Kolkata. Legendary flavours, honest prices.
            </p>
            <div className="flex gap-4">
              {/* TODO: Replace href with actual Instagram profile URL */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow Tung Nam on Instagram" className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              {/* TODO: Replace href with actual Facebook page URL */}
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow Tung Nam on Facebook" className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.google.com/maps/place/Tung+Nam+Eating+House/" target="_blank" rel="noopener noreferrer" aria-label="Find Tung Nam on Google Maps" className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Our Story</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Full Menu</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Gallery</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Customer Reviews</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase mb-6 text-foreground">Visit Us</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm font-serif">24 Chatta Wala Gully</li>
              <li className="text-muted-foreground text-sm font-serif">Tiretti Bazaar</li>
              <li className="text-muted-foreground text-sm font-serif">Kolkata, WB 700012</li>
              <li className="text-muted-foreground text-sm font-serif mt-4 text-primary">Open Daily: 11AM - 10:30PM</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tung Nam Eating House. All rights reserved.</p>
          <div className="bg-destructive/10 text-destructive border border-destructive/20 p-3 rounded-sm max-w-2xl text-center md:text-right">
            <strong>Disclaimer:</strong> This is an unofficial concept website created using publicly available information for demonstration purposes only and is not officially affiliated with Tung Nam Eating House.
          </div>
        </div>
      </div>
    </footer>
  );
}
