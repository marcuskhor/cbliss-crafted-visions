import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';
import diverseTeam from '@/assets/diverse-team.jpg';
import sustainability from '@/assets/sustainability-hero.jpg';
import dataCenter from '@/assets/data-centre.jpg';
import { ArrowRight } from 'lucide-react';

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const employees = useCountUp(isVisible ? 11000 : 0, 2500);

  const values = [
    {
      title: 'GLOBAL',
      subtitle: 'PRESENCE',
      stat: `OVER ${employees.toLocaleString()}`,
      statLabel: 'EMPLOYEES',
      description: 'As a long-time innovator and trusted supplier to key industries from Medical to Information & Communications, Inteprindus is creating a go-to source and key enabler in developing critical product technologies for efficient interconnects.',
      image: diverseTeam,
      imagePosition: 'left' as const,
      bgColor: 'bg-background',
    },
    {
      title: 'MAKING',
      subtitle: 'SUSTAINABILITY',
      subtitleExtra: 'A REALITY TODAY',
      description: 'Creative Bliss is leading the way in sustainable manufacturing practices, integrating eco-conscious approaches at every step. From renewable energy adoption to responsible material sourcing, our approach to giving back to society drives us forward.',
      image: sustainability,
      imagePosition: 'right' as const,
      bgColor: 'bg-muted',
    },
    {
      title: 'OPERATIONAL',
      subtitle: 'EXCELLENCE',
      stat: 'END-TO-END',
      statLabel: 'SOLUTIONS',
      description: 'Our comprehensive one-stop solution encompasses the entire manufacturing lifecycle. With in-house software development capabilities and ISO-certified processes, we deliver seamless integration from design to delivery, ensuring quality at every stage.',
      image: dataCenter,
      imagePosition: 'left' as const,
      bgColor: 'bg-background',
    },
  ];

  return (
    <section ref={sectionRef} className="py-0">
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">WHAT MAKES US</h2>
          <h3 className="text-5xl font-bold mb-6">
            <span className="text-foreground">DIFFERENT</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We create value by helping our customers reduce their Total Cost of Ownership through reliability and quality culture. We focus on zero defect policy with global footprint and innovative technologies enabling us to deliver interconnect products shaping the fields of Medical, and Information & Communications.
          </p>
        </div>
      </div>

      {values.map((value, index) => (
        <div key={index} className={`${value.bgColor}`}>
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${value.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`relative h-[400px] lg:h-auto overflow-hidden ${value.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
              <img 
                src={value.image} 
                alt={value.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center p-12">
                {value.stat && (
                  <div className="text-center text-white">
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                      {value.stat}
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-wider">
                      {value.statLabel}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className={`flex items-center p-8 lg:p-16 ${value.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
              <div className="max-w-xl">
                <h4 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-foreground">{value.title}</span>
                </h4>
                <h5 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  {value.subtitle}
                  {value.subtitleExtra && (
                    <span className="block">{value.subtitleExtra}</span>
                  )}
                </h5>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {value.description}
                </p>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all group">
                  DISCOVER MORE
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ValuesSection;