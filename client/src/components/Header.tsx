import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>("/logo-getsolution.png");
  const { t, dir, locale, setLocale } = useI18n();
  const toggleLocale = () => setLocale(locale === "ar" ? "en" : "ar");

  const navLinks = [
    { path: "/", label: t("header.home") },
    { path: "/about", label: t("header.about") },
    { path: "/services", label: t("header.services") },
    { path: "/apps", label: t("header.apps") },
    { path: "/contact", label: t("header.contact") },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b" dir={dir}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex h-16 items-center justify-between gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="flex items-center">
              <img src={logoSrc} alt="GetSolution" className="h-12 sm:h-14" onError={() => setLogoSrc("/logo-getsolution-advanced.svg")} />
            </div>
          </Link>

          <nav className={`hidden md:flex items-center gap-1 ${dir === "rtl" ? "justify-end" : ""}`} dir={dir}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`group relative px-4 hover:text-secondary ${isActive(link.path) ? "text-secondary" : "text-muted-foreground"}`}
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {dir === "rtl" ? <ChevronLeft className="mr-2 h-4 w-4" /> : null}
                  {link.label}
                  {dir === "ltr" ? <ChevronRight className="ml-2 h-4 w-4" /> : null}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="ml-4 transition-colors hover:bg-secondary hover:text-background" data-testid="button-get-started">
                {t("header.getStarted")}
              </Button>
            </Link>
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="ml-2 inline-flex items-center rounded-full border px-2 py-1 text-xs hover-elevate transition-all bg-background"
              data-testid="button-lang-toggle"
            >
              <span className={`${locale === "en" ? "text-secondary font-bold" : "text-muted-foreground"}`}>E</span>
              <span className="mx-1 h-3 w-px bg-border" />
              <span className={`${locale === "ar" ? "text-secondary font-bold" : "text-muted-foreground"}`}>ع</span>
            </button>
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
          <nav className="md:hidden py-4 space-y-2 border-t" data-testid="nav-mobile" dir={dir}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={`w-full ${dir === "rtl" ? "justify-end" : "justify-start"} hover:text-secondary ${isActive(link.path) ? "bg-accent/10 text-secondary" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {dir === "rtl" ? <ChevronLeft className="ml-2 h-4 w-4" /> : null}
                  {link.label}
                  {dir === "ltr" ? <ChevronRight className="ml-2 h-4 w-4" /> : null}
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
                {t("header.getStarted")}
              </Button>
            </Link>
            <div className="flex items-center pt-2">
              <button
                type="button"
                onClick={() => { toggleLocale(); setMobileMenuOpen(false); }}
                aria-label="Toggle language"
                className="inline-flex items-center rounded-full border px-2 py-1 text-xs hover-elevate transition-all bg-background w-full justify-center"
                data-testid="button-lang-toggle-mobile"
              >
                <span className={`${locale === "en" ? "text-secondary font-bold" : "text-muted-foreground"}`}>E</span>
                <span className="mx-1 h-3 w-px bg-border" />
                <span className={`${locale === "ar" ? "text-secondary font-bold" : "text-muted-foreground"}`}>ع</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
