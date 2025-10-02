import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import electronicTechImage from '@/assets/electronic-technology.jpg';
import medicalDevicesImage from '@/assets/medical-devices.jpg';
import automotiveImage from '@/assets/automotive.jpg';
import semiconductorImage from '@/assets/semiconductor.jpg';
import dataCentreImage from '@/assets/data-centre.jpg';
import industrialElectronicsImage from '@/assets/industrial-electronics.jpg';
import consumerElectronicsImage from '@/assets/consumer-electronics.jpg';

const IndustriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const industries = [
    {
      title: 'Electronic Technology',
      description: 'Advanced components for electronic systems and cutting-edge technology applications.',
      image: electronicTechImage,
    },
    {
      title: 'Medical Devices',
      description: 'Precision manufacturing for critical medical equipment and healthcare devices.',
      image: medicalDevicesImage,
    },
    {
      title: 'Automotive',
      description: 'High-quality automotive components for modern vehicle manufacturing.',
      image: automotiveImage,
    },
    {
      title: 'Semiconductor',
      description: 'Ultra-precise components for semiconductor manufacturing and testing equipment.',
      image: semiconductorImage,
    },
    {
      title: 'Data Centre',
      description: 'Robust infrastructure components for data center and server applications.',
      image: dataCentreImage,
    },
    {
      title: 'Industrial Electronics & Mechatronics',
      description: 'Specialized components for industrial automation and mechatronic systems.',
      image: industrialElectronicsImage,
    },
    {
      title: 'Consumer Electronics',
      description: 'Precision parts for consumer electronic devices and smart technologies.',
      image: consumerElectronicsImage,
    },
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = 288 + 24; // card width + gap
        const currentScroll = container.scrollLeft;
        const maxScroll = (industries.length - 1) * cardWidth;
        
        if (currentScroll >= maxScroll) {
          // Reset to start
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
          setCurrentIndex(0);
        } else {
          // Scroll to next card
          const newIndex = Math.round(currentScroll / cardWidth) + 1;
          container.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth'
          });
          setCurrentIndex(newIndex);
        }
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, [industries.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Industries Served</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From automotive to green energy, we deliver precision manufacturing solutions 
            across diverse industries with specialized expertise.
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div className="overflow-hidden pb-6">
          <div ref={scrollRef} className="flex space-x-6 overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {industries.map((industry, index) => {
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                    >
                      Discover Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {industries.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;