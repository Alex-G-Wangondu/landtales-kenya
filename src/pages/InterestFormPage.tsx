
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { properties } from '@/data/properties';
import { useState } from 'react';

const InterestFormPage = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  const preselectedProperty = location.state?.propertyId ? 
    properties.find(p => p.id === location.state.propertyId) : undefined;
  
  const [selectedProperty, setSelectedProperty] = useState(preselectedProperty?.id || "");
  const [budget, setBudget] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isAgree) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to the terms and conditions to submit the form.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you'd handle form submission to backend
    toast({
      title: "Interest Submitted",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    
    // Reset form
    e.currentTarget.reset();
    setSelectedProperty("");
    setBudget("");
    setTimeframe("");
    setIsAgree(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Express Interest</h1>
            <p className="text-muted-foreground text-lg">
              Let us know what you're looking for and our team will help you find the perfect land
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="+254 712 345678"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Interested in a specific property?
                  </label>
                  <Select 
                    value={selectedProperty} 
                    onValueChange={setSelectedProperty}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a property (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">No specific property</SelectItem>
                      {properties.map(property => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Your Budget
                    </label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under KSh 1 Million</SelectItem>
                        <SelectItem value="1m-3m">KSh 1-3 Million</SelectItem>
                        <SelectItem value="3m-5m">KSh 3-5 Million</SelectItem>
                        <SelectItem value="5m-10m">KSh 5-10 Million</SelectItem>
                        <SelectItem value="over-10m">Over KSh 10 Million</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium mb-2">
                      Purchase Timeframe
                    </label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                        <SelectItem value="soon">Soon (3-6 months)</SelectItem>
                        <SelectItem value="future">Future (6-12 months)</SelectItem>
                        <SelectItem value="planning">Just Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                    Additional Requirements or Questions
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Tell us more about what you're looking for..."
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms" 
                    checked={isAgree}
                    onCheckedChange={(checked) => setIsAgree(checked === true)}
                  />
                  <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to be contacted by LandTales Kenya regarding my interest in properties
                    and consent to the processing of my data in accordance with the privacy policy.
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kenya-terracotta hover:bg-kenya-sienna"
                  disabled={!isAgree}
                >
                  Submit Interest
                </Button>
              </form>
            </div>
            
            <div className="mt-8 text-center text-muted-foreground">
              <p>
                By submitting this form, you'll be connected with our land specialists who will
                guide you through the property options that match your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InterestFormPage;
