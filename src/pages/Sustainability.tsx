import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Sustainability</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon. This page will highlight our commitment to eco-conscious production methods.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;