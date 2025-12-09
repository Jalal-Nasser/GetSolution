import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, dir, formatDate } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 opacity-20 bg-[url('/assets/footer-tech-pattern.svg')] bg-cover bg-center pointer-events-none" />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12`} dir={dir}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo-getsolution.png" alt="Get Solution" className="h-16" style={{ filter: "brightness(0) invert(1)" }} onError={(e) => (e.currentTarget.src = "/logo-getsolution-advanced.svg")} />
            </div>
            <div className="w-16 h-1 rounded bg-secondary mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              {t("footer.blurb")}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md hover:text-secondary" data-testid="link-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" data-testid="icon-linkedin" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md hover:text-secondary" data-testid="link-twitter" aria-label="Twitter">
                <Twitter className="h-5 w-5" data-testid="icon-twitter" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md hover:text-secondary" data-testid="link-facebook" aria-label="Facebook">
                <Facebook className="h-5 w-5" data-testid="icon-facebook" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <div className="w-16 h-1 rounded bg-secondary mb-4" />
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="link-footer-home">
                {t("footer.home")}
              </Link>
              <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="link-footer-about">
                {t("footer.about")}
              </Link>
              <Link href="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="link-footer-services">
                {t("footer.services")}
              </Link>
              <Link href="/apps" className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="link-footer-apps">
                {t("footer.apps")}
              </Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="link-footer-contact">
                {t("footer.contact")}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <div className="w-16 h-1 rounded bg-secondary mb-4" />
            <div className="space-y-3 text-primary-foreground/85">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+966540541719" className="hover:text-secondary transition-colors" data-testid="link-phone">
                  <span dir="ltr">{t("footer.phone")}</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@gscompany.sa" className="hover:text-secondary transition-colors" data-testid="link-email">
                  {t("footer.email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p data-testid="text-copyright">
            {t("footer.copyright").replace("{year}", String(currentYear))}
          </p>
        </div>
      </div>
    </footer>
  );
}
