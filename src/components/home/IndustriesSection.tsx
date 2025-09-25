import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Heart, Car, Zap, Server, Cog, Smartphone } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      title: 'Electronic Technology',
      description: 'Advanced components for electronic systems and cutting-edge technology applications.',
      icon: Cpu,
    },
    {
      title: 'Medical Devices',
      description: 'Precision manufacturing for critical medical equipment and healthcare devices.',
      icon: Heart,
    },
    {
      title: 'Automotive',
      description: 'High-quality automotive components for modern vehicle manufacturing.',
      icon: Car,
    },
    {
      title: 'Semiconductor',
      description: 'Ultra-precise components for semiconductor manufacturing and testing equipment.',
      icon: Zap,
    },
    {
      title: 'Data Centre',
      description: 'Robust infrastructure components for data center and server applications.',
      icon: Server,
    },
    {
      title: 'Industrial Electronics & Mechatronics',
      description: 'Specialized components for industrial automation and mechatronic systems.',
      icon: Cog,
    },
    {
      title: 'Consumer Electronics',
      description: 'Precision parts for consumer electronic devices and smart technologies.',
      icon: Smartphone,
    },
  ];

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

        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group p-6"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
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
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {industries.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-border rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;