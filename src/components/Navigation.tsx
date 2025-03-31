
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-kenya-earth font-bold text-xl">LandTales Kenya</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/properties" className="nav-link font-medium">Properties</Link>
          <Link to="/about" className="nav-link font-medium">About</Link>
          <Link to="/contact" className="nav-link font-medium">Contact</Link>
          <Link to="/admin" className="nav-link font-medium flex items-center">
            <Shield className="h-4 w-4 mr-1" />
            Admin
          </Link>
          <Link to="/interest">
            <Button className="bg-kenya-terracotta hover:bg-kenya-sienna">
              Express Interest
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[61px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 space-y-6 text-center">
          <Link to="/" className="text-lg font-medium" onClick={closeMenu}>Home</Link>
          <Link to="/properties" className="text-lg font-medium" onClick={closeMenu}>Properties</Link>
          <Link to="/about" className="text-lg font-medium" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="text-lg font-medium" onClick={closeMenu}>Contact</Link>
          <Link to="/admin" className="text-lg font-medium flex items-center justify-center" onClick={closeMenu}>
            <Shield className="h-4 w-4 mr-1" />
            Admin
          </Link>
          <Link to="/interest" onClick={closeMenu}>
            <Button className="w-full bg-kenya-terracotta hover:bg-kenya-sienna">
              Express Interest
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
