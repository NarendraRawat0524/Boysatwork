import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover-elevate ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}>
      <div className="relative">
        <div className={`overflow-hidden ${featured ? "h-64 lg:h-80" : "h-48"}`}>
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className={`absolute top-4 left-4 p-2.5 rounded-lg ${service.bgColor}`}>
          <Icon className={`h-5 w-5 ${service.color}`} />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-semibold text-lg text-white mb-1">{service.shortName}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-white/90">{service.rating}</span>
            </div>
            <span className="text-white/60 text-sm">({service.reviewCount.toLocaleString()} reviews)</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.subServices.slice(0, 3).map((sub) => (
            <Badge key={sub.id} variant="secondary" className="text-xs">
              {sub.name}
            </Badge>
          ))}
          {service.subServices.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{service.subServices.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/services/${service.id}`} className="flex-1">
            <Button variant="outline" className="w-full" data-testid={`button-view-${service.id}`}>
              View Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href={`/book?service=${service.id}`}>
            <Button data-testid={`button-book-${service.id}`}>Book</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
