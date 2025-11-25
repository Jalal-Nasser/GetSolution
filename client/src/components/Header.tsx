import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>("/logo-getsolution.png");

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/apps", label: "Our Apps" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="flex items-center">
              <img src={logoSrc} alt="GetSolution" className="h-12 sm:h-14" onError={() => setLogoSrc("/logo-getsolution-advanced.svg")} />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`group relative px-4 hover:text-secondary ${isActive(link.path) ? "text-secondary" : "text-muted-foreground"}`}
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className={`absolute left-3 right-3 -bottom-1 h-[2px] rounded-sm transition-opacity ${isActive(link.path) ? "opacity-100 bg-secondary" : "opacity-0"}`} />
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="ml-4 transition-colors hover:bg-secondary hover:text-background" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t" data-testid="nav-mobile">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start hover:text-secondary ${isActive(link.path) ? "bg-accent/10 text-secondary" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="default"
                className="w-full transition-colors hover:bg-secondary hover:text-background"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
