import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Leaf, Users, Shield, Sun, Recycle, Award, ArrowRight } from 'lucide-react';
import worldOnFire from '@/assets/world-on-fire.jpg';
import solarPanels from '@/assets/solar-panels.jpg';
import circularEconomy from '@/assets/circular-economy.jpg';
import diverseTeam from '@/assets/diverse-team.jpg';
import environmentalStewardship from '@/assets/environmental-stewardship.jpg';
import governance from '@/assets/governance.jpg';
import { useCountUp } from '@/hooks/useCountUp';

const Sustainability = () => {
  const foodWasteCount = useCountUp(4320361019, 3000);
  const initiatives = [
    {
      title: 'Designing for Circularity',
      description: 'We innovate new technologies that enhance the removal, reconnection, and recycling of components.',
      icon: Recycle,
      image: circularEconomy
    },
    {
      title: 'Harnessing Solar Power',
      description: 'With the installation of 5,756 MWh of sustainable power generation, every ray of sunlight brings us closer to a brighter tomorrow.',
      icon: Sun,
      image: solarPanels
    },
    {
      title: 'Empowering Change',
      description: 'We take pride in our commitment to gender equality. By 2022, 42.4% of our workforce comprises female employees.',
      icon: Users,
      image: diverseTeam
    }
  ];

  const achievements = [
    { label: 'EcoVadis Rating', value: 'Platinum' },
    { label: 'Solar Energy', value: '5,756 MWh' },
    { label: 'Women in Workforce', value: '42.4%' },
    { label: 'Plastic Avoided Yearly', value: '2.15 T' }
  ];

  const pillars = [
    {
      title: 'People Excellence',
      description: 'Investing in our workforce and fostering a culture of continuous improvement',
      icon: Users,
      image: diverseTeam
    },
    {
      title: 'Environmental Stewardship',
      description: 'Minimizing our environmental footprint through innovative processes',
      icon: Leaf,
      image: environmentalStewardship
    },
    {
      title: 'Good Governance',
      description: 'Maintaining transparency, compliance, and ethical business practices',
      icon: Shield,
      image: governance
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={worldOnFire} 
              alt="Climate crisis and environmental urgency" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-red-500">
              The World is On FIRE!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              1.3 billion tons of food is lost or wasted every year. With this growing amount of food wastage, eventually water shortages, deforestation, pollution, loss of biodiversity, and climate change will lead to an unsustainable system collapse by 2050 if the current system is not transformed.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-5xl md:text-6xl font-bold text-red-500 mb-2">
                {foodWasteCount.toLocaleString()}
              </p>
              <p className="text-xl">Tons of Food Wasted in 2021</p>
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Sustainability Strategy</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In 2022, we revitalized our sustainability approach to focus on strategic pillars that prioritize driving innovation, environmental quality, stewardship, people excellence, and good governance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                        <pillar.icon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Measurable Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tracking our progress towards a more sustainable future through concrete metrics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Award className="text-primary mx-auto animate-scale-in" size={40} />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-3">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground italic mb-4">
                "Our sustainability journey is about creating lasting value for all stakeholders while protecting our planet for future generations."
              </p>
              <p className="text-sm font-semibold text-foreground">— Leadership Team, Creative Bliss</p>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Download Sustainability Report <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={environmentalStewardship} 
              alt="Sustainability vision" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-500/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed font-light">
              In 2022, we revitalized our sustainability approach to focus on six strategic pillars that prioritize driving innovation, quality excellence, environmental stewardship, people excellence, sustainable procurement, and good governance.
            </p>
            <p className="text-lg font-semibold mb-8 tracking-wide">
              — Leadership Team, Creative Bliss
            </p>
            <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-xl">
              Download Report
            </button>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Measurable Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tracking our progress towards a more sustainable future through concrete metrics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Award className="text-primary mx-auto animate-scale-in" size={40} />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-3">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground italic mb-4">
                "Our sustainability journey is about creating lasting value for all stakeholders while protecting our planet for future generations."
              </p>
              <p className="text-sm font-semibold text-foreground">— Leadership Team, Creative Bliss</p>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Download Sustainability Report <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={environmentalStewardship} 
              alt="Environmental commitment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Us on Our Sustainability Journey</h2>
            <p className="text-xl mb-10 leading-relaxed">
              We are committed to continuous improvement in our sustainability practices, working towards a future where precision manufacturing and environmental responsibility go hand in hand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/about"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Learn More About Us <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;