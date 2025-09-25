import { Target, Shield, Leaf } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      title: 'Precision',
      description: 'Every cut, every measurement, every detail matters. We maintain the highest standards of accuracy in every project.',
      icon: Target,
    },
    {
      title: 'Trustworthiness',
      description: 'Long-term relationships built on integrity, transparency, and accountability. Your success is our commitment.',
      icon: Shield,
    },
    {
      title: 'Sustainability',
      description: 'Eco-conscious production methods that support both efficiency and the environment for future generations.',
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core values that drive everything we do and set us apart in precision manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;