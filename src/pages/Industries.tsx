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
      title: 'Electronic Technology',
      description: 'Precision components for cutting-edge electronic systems and devices, supporting the rapid evolution of technology.',
      image: electronicTechImg,
      applications: ['Circuit components', 'Connectors', 'Housing solutions', 'Thermal management']
    },
    {
      title: 'Semiconductor Industry',
      description: 'Ultra-precise manufacturing solutions for semiconductor equipment and components requiring the highest standards.',
      image: semiconductorImg,
      applications: ['Wafer handling', 'Process equipment', 'Clean room components', 'Precision fixtures']
    },
    {
      title: 'Data Centre Industry',
      description: 'Robust and reliable components for data center infrastructure, ensuring optimal performance and uptime.',
      image: dataCentreImg,
      applications: ['Rack systems', 'Cable management', 'Cooling solutions', 'Server components']
    },
    {
      title: 'Automotive',
      description: 'High-volume precision parts for automotive applications, meeting stringent safety and quality standards.',
      image: automotiveImg,
      applications: ['Engine components', 'Electrical systems', 'Safety features', 'EV solutions']
    },
    {
      title: 'Medical Devices',
      description: 'Biocompatible precision components for medical devices and surgical instruments with zero-defect quality.',
      image: medicalDevicesImg,
      applications: ['Surgical instruments', 'Implant components', 'Diagnostic equipment', 'Lab devices']
    },
    {
      title: 'Industrial Electronics & Mechatronics',
      description: 'Complex assemblies and components for industrial automation and mechatronic systems.',
      image: industrialElectronicsImg,
      applications: ['Automation systems', 'Robotics', 'Control systems', 'Sensor components']
    },
    {
      title: 'Consumer Electronics',
      description: 'High-quality components for consumer electronics, balancing aesthetics with functionality.',
      image: consumerElectronicsImg,
      applications: ['Mobile devices', 'Wearables', 'Home electronics', 'Audio systems']
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
              Industries Served
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Product realization has never been more complex. As a world leader in designing and manufacturing precision products, Creative Bliss is your trusted go-to source to solve your complex design challenges.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
              We deliver lasting value by helping our customers reduce their Total Cost of Ownership by leveraging our unique multi-disciplinary skill set from both electro-mechanical and mechanical disciplines.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Applications:</p>
                      <ul className="space-y-1">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
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