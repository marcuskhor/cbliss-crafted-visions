import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check } from 'lucide-react';
import metalStamping from '@/assets/metal-stamping.jpg';

const About = () => {
  const philosophyPrinciples = [
    {
      title: 'Precision',
      description: 'Every cut, every measurement, every detail matters.'
    },
    {
      title: 'Trustworthiness',
      description: 'Long-term relationships built on integrity, transparency, and accountability.'
    },
    {
      title: 'Sustainability',
      description: 'Eco-conscious production methods that support both efficiency and the environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Text Side */}
            <div className="flex items-center justify-center bg-background px-8 lg:px-16 py-12">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
                  Someone You Can
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Trust,
                  <br />
                  <span className="text-primary">Delivers</span>
                </h1>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-full">
              <img 
                src={metalStamping} 
                alt="Precision Manufacturing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent lg:from-transparent" />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
              At Creative Bliss, we believe that precision engineering is more than just accuracy — it's a commitment to excellence, reliability, and innovation. For years, we have been the trusted partner of leading industries across automotive, medical, electronics, and advanced manufacturing, delivering high-quality parts, assemblies, and solutions that meet the most demanding standards.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our expertise lies in bridging artistry with engineering precision, turning complex challenges into seamless solutions. Every project we take on is backed by cutting-edge equipment, skilled craftsmanship, and rigorous quality control — ensuring that our clients receive not only superior products, but also the confidence that comes with working with a partner who truly cares.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a world leader in designing and manufacturing precision metal forming products, we solve complex customer challenges and bring ideas to life. With over 30 years of experience, we deliver lasting value by helping our customers reduce their Total Cost of Ownership through utilizing our technical expertise, vertically integrated manufacturing, and innovative technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted-foreground px-8 text-center">Manufacturing Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Philosophy</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We stand by three core principles that guide every decision we make
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophyPrinciples.map((principle, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <Check className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Global Presence</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Headquartered in Singapore
              </p>
              <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                As a long-time innovator and trusted supplier to key industries from Medical to Information & Communications, Creative Bliss is a go-to-source and key enabler in developing critical product technologies for efficient interconnects and precision manufacturing solutions.
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">11,000+</p>
                  <p className="text-sm text-muted-foreground">Employees</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-3xl font-bold text-primary">Global</p>
                  <p className="text-sm text-muted-foreground">Footprint</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;