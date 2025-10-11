import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import electronicTechImg from '@/assets/electronic-technology.jpg';
import semiconductorImg from '@/assets/semiconductor.jpg';
import dataCentreImg from '@/assets/data-centre.jpg';
import automotiveImg from '@/assets/automotive.jpg';
import medicalDevicesImg from '@/assets/medical-devices.jpg';
import industrialElectronicsImg from '@/assets/industrial-electronics.jpg';
import consumerElectronicsImg from '@/assets/consumer-electronics.jpg';

const Industries = () => {
  const industries = [
    {
      title: 'Data Centre / Cloud Storage',
      description: 'In the ever-evolving landscape of data storage, reliability and efficiency are paramount. Creative Bliss provides cutting-edge solutions designed to meet the demands of this dynamic industry.',
      image: dataCentreImg,
    },
    {
      title: 'Electronic Technology',
      description: 'Precision components for cutting-edge electronic systems and devices, supporting the rapid evolution of technology with unmatched quality and performance.',
      image: electronicTechImg,
    },
    {
      title: 'Semiconductor',
      description: 'Ultra-precise manufacturing solutions for semiconductor equipment and components requiring the highest standards of quality and precision.',
      image: semiconductorImg,
    },
    {
      title: 'Automotive',
      description: 'High-volume precision parts for automotive applications, meeting stringent safety and quality standards for the future of mobility.',
      image: automotiveImg,
    },
    {
      title: 'Medical Devices',
      description: 'Biocompatible precision components for medical devices and surgical instruments with zero-defect quality and regulatory compliance.',
      image: medicalDevicesImg,
    },
    {
      title: 'Industrial Electronics',
      description: 'Complex assemblies and components for industrial automation and mechatronic systems driving Industry 4.0.',
      image: industrialElectronicsImg,
    },
    {
      title: 'Consumer Electronics',
      description: 'High-quality components for consumer electronics, balancing aesthetics with functionality for everyday devices.',
      image: consumerElectronicsImg,
    }
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries Served
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Product realization has never been more complex. As a world leader in designing and manufacturing precision products, Creative Bliss is your trusted go-to source to solve your complex design challenges.
            </p>
          </div>
        </section>

        {/* Interactive Industries Section */}
        <section className="min-h-[80vh] bg-gradient-to-br from-gray-950 to-gray-900 relative">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-0 min-h-[80vh]">
              {/* Navigation Sidebar */}
              <div className="flex flex-col justify-center py-8 lg:py-16 space-y-2">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndustry(index)}
                    className={`flex items-center gap-4 text-left py-4 px-6 transition-all duration-300 rounded-lg group ${
                      selectedIndustry === index
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      selectedIndustry === index
                        ? 'border-primary text-primary scale-110'
                        : 'border-gray-600 group-hover:border-gray-400'
                    }`}>
                      <span className="text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-semibold text-sm uppercase tracking-wider">
                      {industry.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content Display */}
              <div className="relative lg:pl-12">
                <div className="lg:sticky lg:top-24 flex flex-col justify-center min-h-[60vh] lg:min-h-[80vh]">
                  {/* Image */}
                  <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8 group">
                    <img
                      src={industries[selectedIndustry].image}
                      alt={industries[selectedIndustry].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/50 bg-black/30 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-white">
                        {String(selectedIndustry + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      {industries[selectedIndustry].title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                      {industries[selectedIndustry].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Looking for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to discuss your unique requirements
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;