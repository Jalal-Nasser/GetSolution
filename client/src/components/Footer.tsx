import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">GetSolution</h3>
            <p className="text-background/80 mb-4">
              Professional business solutions and consulting services to transform your organization and drive success.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" data-testid="icon-linkedin" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-twitter" aria-label="Twitter">
                <Twitter className="h-5 w-5" data-testid="icon-twitter" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook" aria-label="Facebook">
                <Facebook className="h-5 w-5" data-testid="icon-facebook" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/about" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-about">
                About Us
              </Link>
              <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-services">
                Services
              </Link>
              <Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+966123456789" className="hover:text-background transition-colors" data-testid="link-phone">
                  +966 12 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@gscompany.sa" className="hover:text-background transition-colors" data-testid="link-email">
                  info@gscompany.sa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p data-testid="text-copyright">
            © {currentYear} GetSolution. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
