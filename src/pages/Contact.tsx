import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon. This page will provide comprehensive contact information and forms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;