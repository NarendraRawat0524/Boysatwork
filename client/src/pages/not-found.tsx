import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button size="lg" data-testid="button-home-404">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" data-testid="button-services-404">
              <Search className="mr-2 h-4 w-4" />
              Browse Services
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Need help? Call us at <a href="tel:9811797407" className="text-primary hover:underline">+91 9811797407</a></p>
        </div>
      </div>
    </div>
  );
}
