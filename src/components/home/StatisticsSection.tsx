import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const years = useCountUp(isVisible ? 20 : 0, 2000);
  const facilities = useCountUp(isVisible ? 8 : 0, 2000);
  const employees = useCountUp(isVisible ? 650 : 0, 2500);
  const sales = useCountUp(isVisible ? 50 : 0, 2000);

  const stats = [
    { value: years, label: 'Year Business Experience', suffix: '' },
    { value: facilities.toString().padStart(2, '0'), label: 'Manufacturing Facilities', suffix: '+' },
    { value: employees, label: 'Employees Worldwide', suffix: '+' },
    { value: sales, label: 'Million Forecasted 2025 Sales', suffix: '' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-5xl font-bold text-primary mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
