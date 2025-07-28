import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href: string;
  isHighlighted?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, features, href, isHighlighted = false }: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-elegant transition-smooth ${isHighlighted ? 'ring-2 ring-secondary' : ''}`}>
      <CardContent className="p-6 space-y-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isHighlighted ? 'bg-secondary-gradient' : 'bg-primary-gradient'}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-reverse space-x-2 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          variant={isHighlighted ? "default" : "outline"}
          className={`w-full group/btn ${isHighlighted ? 'bg-secondary-gradient hover:opacity-90' : ''}`}
        >
          <Link to={href} className="flex items-center justify-center space-x-reverse space-x-2">
            <span>اعرف المزيد</span>
            <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;