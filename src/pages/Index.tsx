import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatisticsSection from '@/components/home/StatisticsSection';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ValuesSection from '@/components/home/ValuesSection';
import LocationSection from '@/components/home/LocationSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <IndustriesSection />
        <ValuesSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
