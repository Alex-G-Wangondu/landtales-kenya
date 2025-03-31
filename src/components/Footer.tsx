
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-4 text-kenya-earth">LandTales Kenya</h3>
            <p className="text-muted-foreground mb-4">
              Connecting you to premium land parcels across Kenya's most beautiful regions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-kenya-terracotta hover:text-kenya-sienna transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-kenya-terracotta hover:text-kenya-sienna transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-kenya-terracotta hover:text-kenya-sienna transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-kenya-terracotta transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-kenya-terracotta transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-kenya-terracotta transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-kenya-terracotta transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/interest" className="text-muted-foreground hover:text-kenya-terracotta transition-colors">Express Interest</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-kenya-terracotta" />
                <span className="text-muted-foreground">123 Kenyatta Avenue, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-kenya-terracotta" />
                <span className="text-muted-foreground">+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-kenya-terracotta" />
                <span className="text-muted-foreground">info@landtaleskenya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} LandTales Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
