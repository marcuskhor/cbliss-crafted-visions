import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Leaf, Users, Shield, Sun, Recycle, Award } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Designing for Circularity',
      description: 'We innovate new technologies that enhance the removal, reconnection, and recycling of components.',
      icon: Recycle
    },
    {
      title: 'Harnessing Solar Power',
      description: 'With the installation of 5,756 MWh of sustainable power generation, every ray of sunlight brings us closer to a brighter tomorrow.',
      icon: Sun
    },
    {
      title: 'Empowering Change',
      description: 'We take pride in our commitment to gender equality. By 2022, 42.4% of our workforce comprises female employees.',
      icon: Users
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
      icon: Users
    },
    {
      title: 'Environmental Stewardship',
      description: 'Minimizing our environmental footprint through innovative processes',
      icon: Leaf
    },
    {
      title: 'Good Governance',
      description: 'Maintaining transparency, compliance, and ethical business practices',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - The World is On FIRE */}
        <section className="py-20 bg-gradient-to-br from-destructive/20 to-destructive/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The World is On FIRE!
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                1.3 billion tons of food is lost or wasted every year. With this growing amount of food wastage, eventually water shortages, deforestation, pollution, loss of biodiversity, and climate change will lead to an unsustainable system collapse by 2050 if the current system is not transformed.
              </p>
              <div className="bg-card border border-border rounded-lg p-8">
                <p className="text-5xl font-bold text-primary mb-2">4,320,361,019</p>
                <p className="text-xl text-muted-foreground">Tons of Food Wasted in 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* What CBliss Does */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What CBliss Does</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In 2022, we revitalized our sustainability approach to focus on strategic pillars that prioritize driving innovation, environmental quality, stewardship, people excellence, sustainable procurement, and good governance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
              <p className="text-lg text-muted-foreground italic mb-2">
                "Our sustainability journey is about creating lasting value for all stakeholders while protecting our planet."
              </p>
              <p className="text-sm font-semibold text-foreground">— Leadership Team, Creative Bliss</p>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Initiatives</h2>
              <p className="text-xl text-muted-foreground">
                A showcase of our ongoing and completed sustainability initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <initiative.icon className="text-primary" size={64} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                    <button className="text-primary hover:underline font-medium">Learn More →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Reports */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Achievements for a Resilient Tomorrow
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A greener future starts with us. Learn more about our environmental initiatives and achievements in 2022.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center"
                >
                  <div className="mb-2">
                    <Award className="text-primary mx-auto" size={32} />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Download Sustainability Report
              </button>
            </div>
          </div>
        </section>

        {/* Our Way Forward */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Way Forward</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are committed to continuous improvement in our sustainability practices, working towards a future where precision manufacturing and environmental responsibility go hand in hand.
            </p>
            <a
              href="/contact"
              className="inline-block bg-card border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;