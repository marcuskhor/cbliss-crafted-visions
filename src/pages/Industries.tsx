import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Industries Served</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon. This page will showcase the industries we serve with precision manufacturing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;