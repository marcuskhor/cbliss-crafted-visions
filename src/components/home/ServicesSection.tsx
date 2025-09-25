import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import metalStampingImage from '@/assets/metal-stamping.jpg';
import cncMachiningImage from '@/assets/cnc-machining.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: 'Sheet Metal Fabrication',
      description: 'Precision sheet metal forming and fabrication services with advanced cutting and bending capabilities.',
      image: metalStampingImage,
    },
    {
      title: 'CNC Machining',
      description: 'High-precision computer-controlled machining for complex metal components and parts.',
      image: cncMachiningImage,
    },
    {
      title: 'Tool & Die Design/Fabrication',
      description: 'Custom tool and die design and manufacturing for specialized production requirements.',
      image: metalStampingImage,
    },
    {
      title: 'Mechanical Assembly',
      description: 'Complete mechanical assembly services for finished products and sub-assemblies.',
      image: cncMachiningImage,
    },
    {
      title: 'Aluminium Casting',
      description: 'Precision aluminum casting solutions for lightweight and durable components.',
      image: metalStampingImage,
    },
    {
      title: 'Metal Stamping',
      description: 'High-volume metal stamping operations with exceptional precision and consistency.',
      image: cncMachiningImage,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">CBliss Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision-engineered metal components through four key capabilities, each backed by 
            skilled craftsmanship and advanced equipment.
          </p>
        </div>

        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
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
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-border rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;