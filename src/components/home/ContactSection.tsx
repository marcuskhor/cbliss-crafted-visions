import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your precision manufacturing project? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input placeholder="Your Company Name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john.doe@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements, specifications, and timeline..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Contact</h3>
              <p className="text-muted-foreground mb-8">
                Choose the best way to reach our team. We're here to help with your precision 
                manufacturing needs and answer any questions you may have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">info@cbliss.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Live Chat</h4>
                  <p className="text-muted-foreground">Start a conversation</p>
                  <p className="text-sm text-muted-foreground">Available during business hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h4 className="font-medium text-foreground mb-2">Need Immediate Assistance?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                For urgent manufacturing requests or time-sensitive projects, 
                call our priority line for immediate support.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Priority Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;