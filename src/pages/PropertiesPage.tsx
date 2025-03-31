
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const PropertiesPage = () => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [areaRange, setAreaRange] = useState([0, 15]);
  const [location, setLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProperties = properties.filter((property) => {
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesArea = property.area >= areaRange[0] && property.area <= areaRange[1];
    const matchesLocation = location === 'all' || property.location.toLowerCase().includes(location.toLowerCase());
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPrice && matchesArea && matchesLocation && matchesSearch;
  });
  
  const locations = [...new Set(properties.map(p => p.location.split(',')[0].trim()))];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Land Properties in Kenya</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Filter Properties</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search properties..."
                        className="pl-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">Location</label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All locations</SelectItem>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc.toLowerCase()}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Price Range: KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={10000000}
                      step={100000}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Area: {areaRange[0]} - {areaRange[1]} Acres
                    </label>
                    <Slider
                      defaultValue={areaRange}
                      min={0}
                      max={15}
                      step={0.5}
                      onValueChange={setAreaRange}
                      className="py-4"
                    />
                  </div>
                  
                  <Button
                    onClick={() => {
                      setPriceRange([0, 10000000]);
                      setAreaRange([0, 15]);
                      setLocation('all');
                      setSearchTerm('');
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="mb-4 p-4 bg-card rounded-lg shadow-sm">
                <p className="text-muted-foreground">
                  Showing {filteredProperties.length} properties
                </p>
              </div>
              
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card rounded-lg">
                  <p className="text-lg text-muted-foreground">No properties match your current filters.</p>
                  <Button 
                    variant="link" 
                    className="mt-2 text-kenya-terracotta"
                    onClick={() => {
                      setPriceRange([0, 10000000]);
                      setAreaRange([0, 15]);
                      setLocation('all');
                      setSearchTerm('');
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PropertiesPage;
