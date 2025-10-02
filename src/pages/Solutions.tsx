import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cog, Wrench, Factory, FlaskConical, Boxes, PenTool } from 'lucide-react';
import metalStampingImg from '@/assets/metal-stamping.jpg';
import cncMachiningImg from '@/assets/cnc-machining.jpg';

const Solutions = () => {
  const solutions = [
    {
      title: 'Metal Stamping',
      description: 'High-speed press machines with precision part ejection and accuracy. We deliver consistent quality through advanced stamping technology for high-volume production.',
      icon: Cog,
      image: metalStampingImg,
      features: ['High-speed production', 'Precision tooling', 'Quality assurance', 'Cost-effective']
    },
    {
      title: 'CNC Machining',
      description: 'Close-ups of tooling process, 3D models vs final parts. Our CNC machining capabilities transform digital designs into precision components.',
      icon: Wrench,
      image: cncMachiningImg,
      features: ['Multi-axis machining', 'Tight tolerances', 'Complex geometries', 'Rapid prototyping']
    },
    {
      title: 'Sheet Metal Fabrication',
      description: 'Bending, cutting, and laser precision. We excel in transforming flat metal sheets into complex three-dimensional parts.',
      icon: Factory,
      image: null,
      features: ['Laser cutting', 'Precision bending', 'Welding services', 'Surface finishing']
    },
    {
      title: 'Aluminium Casting',
      description: 'Molten pour, mold release, and finishing. Our casting process delivers high-quality aluminum components with excellent surface finish.',
      icon: FlaskConical,
      image: null,
      features: ['Die casting', 'Sand casting', 'Investment casting', 'Post-processing']
    },
    {
      title: 'Mechanical Assembly',
      description: 'Technicians assembling components with comprehensive quality checks. We provide end-to-end assembly services with rigorous testing.',
      icon: Boxes,
      image: null,
      features: ['Complex assemblies', 'Quality testing', 'Packaging solutions', 'Logistics support']
    },
    {
      title: 'Tool & Die Design/Fabrication',
      description: 'CAD modeling, precision fitting, and final testing. Our tool and die capabilities ensure optimal production efficiency and quality.',
      icon: PenTool,
      image: null,
      features: ['Custom tooling', 'Die design', 'Maintenance', 'Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive manufacturing solutions designed to meet the most demanding standards across industries
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <solution.icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    {solution.image ? (
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <solution.icon className="text-muted-foreground" size={64} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can meet your manufacturing needs
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;