
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About LandTales Kenya</h1>
            <p className="text-muted-foreground text-lg">
              Your trusted partner in finding the perfect land in Kenya
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, LandTales Kenya began with a simple mission: to make land ownership in Kenya transparent, 
                accessible, and straightforward. What started as a small family business has grown into one of the most 
                trusted names in Kenya's real estate market.
              </p>
              <p className="text-muted-foreground">
                Our founders, having experienced firsthand the challenges of land acquisition in Kenya, committed to creating 
                a platform that bridges the gap between land sellers and buyers, ensuring clear ownership, fair prices, and 
                proper documentation for every transaction.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Kenyan landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-kenya-sand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              We are committed to connecting Kenyans and international investors with quality land opportunities 
              while maintaining the highest standards of integrity and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in clear, honest communication. All our listings come with verified documentation and fair market valuations."
              },
              {
                title: "Local Expertise",
                description: "Our team combines decades of experience in Kenya's diverse land markets, ensuring you get knowledgeable guidance."
              },
              {
                title: "Client Success",
                description: "Your satisfaction is our priority. We work tirelessly to match you with land that meets your specific needs and goals."
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center">
                <div className="h-12 w-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-kenya-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Mwangi",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Sarah Ochieng",
                role: "Head of Sales",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Daniel Kamau",
                role: "Legal Advisor",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Rebecca Njeri",
                role: "Customer Relations",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-[150px] w-[150px] mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-kenya-terracotta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Land?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Browse our selection of premium land parcels across Kenya or let us know your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties">
              <Button size="lg" className="bg-white text-kenya-terracotta hover:bg-white/90">
                Browse Properties
              </Button>
            </Link>
            <Link to="/interest">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Express Interest
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
