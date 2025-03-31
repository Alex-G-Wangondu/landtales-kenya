
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Ruler, Share2, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { PropertyCard } from '@/components/PropertyCard';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  
  const similarProperties = properties
    .filter(p => p.id !== id)
    .slice(0, 3);
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button>Browse All Properties</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/properties" className="inline-flex items-center text-kenya-terracotta hover:text-kenya-sienna mb-6">
          <ArrowLeft size={16} className="mr-1" /> Back to properties
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="h-[300px] md:h-[400px] relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={18} className="mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-kenya-earth">
                      KSh {property.price.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      KSh {Math.round(property.price / property.area).toLocaleString()} per acre
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 text-kenya-terracotta mr-2" />
                    <div>
                      <div className="font-medium">{property.area} Acres</div>
                      <div className="text-sm text-muted-foreground">Land Size</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-kenya-terracotta mr-2" />
                    <div>
                      <div className="font-medium">
                        {property.id.includes('001') ? 'Agricultural' : 
                         property.id.includes('002') ? 'Residential' : 
                         property.id.includes('003') ? 'Commercial' : 
                         property.id.includes('004') ? 'Recreational' : 'Mixed Use'}
                      </div>
                      <div className="text-sm text-muted-foreground">Land Type</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-muted-foreground">
                    This exceptional {property.area} acre parcel is located in the beautiful region of {property.location}. 
                    The land features {property.id.includes('001') ? 'fertile soil perfect for farming, with access to water sources' : 
                     property.id.includes('002') ? 'breathtaking views of the surrounding landscape and is ideal for building your dream home' : 
                     property.id.includes('003') ? 'excellent road access and is strategically positioned for commercial development' : 
                     property.id.includes('004') ? 'proximity to local attractions and recreational facilities' : 
                     'diverse terrain suitable for various development opportunities'}.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    The property comes with clear title deeds and all necessary approvals for immediate development.
                    Don't miss this opportunity to invest in one of Kenya's most promising regions.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Clear Title Deed',
                      'All-Weather Road Access', 
                      'Electricity Connection',
                      'Water Available',
                      'Secure Boundaries',
                      'Ready for Development'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-kenya-terracotta mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Interested in this property?</h2>
              <p className="text-muted-foreground mb-6">
                Fill out our interest form and our agent will get in touch with you
                to schedule a viewing or provide more information.
              </p>
              <Link to="/interest" state={{ propertyId: property.id, propertyTitle: property.title }}>
                <Button className="w-full mb-4 bg-kenya-terracotta hover:bg-kenya-sienna">
                  Express Interest
                </Button>
              </Link>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Share2 className="mr-2 h-4 w-4" />
                Share Property
              </Button>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Contact Agent</h3>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-bold">JM</span>
                  </div>
                  <div>
                    <p className="font-medium">John Mwangi</p>
                    <p className="text-sm text-muted-foreground">Land Sales Specialist</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> +254 712 345 678
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> john@landtaleskenya.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
