
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  area: number;
  image: string;
}

const PropertyCard = ({ id, title, location, price, area, image }: PropertyProps) => {
  return (
    <Card className="overflow-hidden land-card-hover">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-kenya-gold text-white px-2 py-1 rounded text-sm font-medium">
          {area} Acres
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>
        <div className="font-medium text-kenya-earth">
          KSh {price.toLocaleString()}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/property/${id}`} className="w-full">
          <Button variant="outline" className="w-full hover:bg-kenya-terracotta hover:text-white border-kenya-terracotta text-kenya-terracotta">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
