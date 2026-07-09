import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import SignatureDishes from './components/SignatureDishes';
import MenuSection from './components/MenuSection';
import AIGuide from './components/AIGuide';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import ContactFAQ from './components/ContactFAQ';
import FloatingElements from './components/FloatingElements';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="min-h-screen bg-background w-full selection:bg-primary/30 text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <SignatureDishes />
      <MenuSection />
      <AIGuide />
      <Gallery />
      <Reviews />
      <Location />
      <ContactFAQ />
      <Footer />
      <FloatingElements />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
