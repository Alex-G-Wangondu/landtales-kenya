
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight, MapPin } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // Display only 3 featured properties
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Find Your Perfect Piece of Kenyan Land
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Premium land parcels in Kenya's most desirable locations - from fertile farmland to urban plots.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/properties">
                <Button size="lg" className="bg-kenya-terracotta hover:bg-kenya-sienna">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/interest">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Express Interest
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Locations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Popular Regions</h2>
          <p className="text-muted-foreground text-center mb-10">Explore our available land parcels by region</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Nairobi", "Mombasa", "Nakuru", "Narok"].map((region) => (
              <div key={region} className="bg-card rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <MapPin className="mx-auto h-8 w-8 text-kenya-terracotta mb-3" />
                <h3 className="font-medium">{region}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {region === "Nairobi" ? "Urban Plots" : 
                   region === "Mombasa" ? "Coastal Land" :
                   region === "Nakuru" ? "Agricultural Land" : "Wildlife Adjacent"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked quality land for sale</p>
            </div>
            <Link to="/properties" className="hidden md:flex items-center text-kenya-terracotta hover:text-kenya-sienna">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/properties">
              <Button variant="outline" className="border-kenya-terracotta text-kenya-terracotta hover:bg-kenya-terracotta hover:text-white">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-kenya-sand/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Why Choose LandTales Kenya</h2>
          <p className="text-muted-foreground text-center mb-10">The trusted source for premium land in Kenya</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Properties",
                description: "All our listings are thoroughly vetted with clear titles and proper documentation."
              },
              {
                title: "Local Expertise",
                description: "Our team has deep knowledge of the Kenyan land market and regional regulations."
              },
              {
                title: "Personalized Service",
                description: "We offer tailored guidance to help you find the perfect land for your needs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 text-center">
                <div className="h-12 w-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-kenya-gold font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
