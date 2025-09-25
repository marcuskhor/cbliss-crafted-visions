import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-manufacturing.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern precision manufacturing facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Bringing Tomorrow's 
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> 
            Possibilities 
          </span>
          to Life
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Your trusted partner in precision metal forming — delivering zero-defect quality, 
          on-time delivery, and sustainable manufacturing you can rely on.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-glow text-lg px-8 py-6"
          >
            Discover Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            Watch Our Story
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            <span className="text-primary font-semibold">30+ Years</span> of Engineering Excellence
          </p>
        </div>
      </div>

      {/* Video placeholder overlay - user can replace this with actual video */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
          <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;