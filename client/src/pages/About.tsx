import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { extractPdfText, parsePartners, parseCertifications } from "@/lib/pdfProfile";
import { Target, Eye, Award, Users, Shield, TrendingUp } from "lucide-react";
import aboutHeroImage from "@assets/generated_images/about_page_hero_image.png";
import teamImage from "@assets/generated_images/team_collaboration_image.png";

export default function About() {
  const [partners, setPartners] = useState<string[]>([]);
  const [certs, setCerts] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const text = await extractPdfText("/GSC-Profilel.pdf");
        const p = parsePartners(text);
        const c = parseCertifications(text);
        if (mounted) {
          setPartners(p);
          setCerts(c);
        }
      } catch (_) {}
    })();
    return () => { mounted = false; };
  }, []);
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class IT solutions that set industry standards",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protecting your digital assets with advanced security practices",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients and stakeholders",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing cutting-edge technology and continuous improvement",
    },
  ];

  return (
    <div>
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-background overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 54, 93, 0.85), rgba(27, 54, 93, 0.75)), url(${aboutHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-about-hero-title">
              ABOUT US
            </h1>
            <p className="text-xl sm:text-2xl text-background/90" data-testid="text-about-hero-subtitle">
              Leading professional IT solutions provider
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-story-title">
              Our Story
            </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p data-testid="text-story-para-1">
                  GS Company has been at the forefront of professional IT solutions for over 15 years, partnering with enterprises across Saudi Arabia and the GCC. We began with a vision to empower organizations through innovative technology.
                </p>
                <p data-testid="text-story-para-2">
                  Today, we leverage deep expertise across eight specialized IT service areas to deliver transformative solutions. Our consultants and engineers bring proven methodologies and modern practices to every engagement.
                </p>
                <p data-testid="text-story-para-3">
                  From infrastructure to artificial intelligence, from cybersecurity to cloud computing, we provide comprehensive solutions that streamline operations, reduce complexity and risk, and drive measurable growth.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={teamImage}
                alt="Team collaboration"
                className="w-full h-full object-cover"
                data-testid="image-team"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8" data-testid="card-mission">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-mission-title">Mission</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed" data-testid="text-mission-description">
                To empower businesses globally through cutting-edge IT solutions, fostering innovation and digital transformation that drives sustainable growth and efficiency.
              </CardDescription>
            </Card>

            <Card className="p-8" data-testid="card-vision">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-vision-title">Vision</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed" data-testid="text-vision-description">
                To be the leading global technology partner, setting the standard for excellence, innovation, and future-forward IT services that shape a smarter world.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-values-title">
              Core Values
            </h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Partners & Certifications
            </h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized alliances and credentials supporting enterprise-grade delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: (partners[0] ?? "STC"), logo: "/partners/stc.svg" },
              { name: (partners[1] ?? "Saudi Aramco"), logo: "/partners/aramco.svg" },
              { name: (partners[2] ?? "SABIC"), logo: "/partners/sabic.svg" },
            ].map((item, i) => (
              <div key={`p-${i}`} className="p-6 bg-background rounded-lg border text-center">
                <img src={item.logo} alt={item.name} className="mx-auto mb-3 h-12" />
                <div className="text-xl font-semibold mb-1">{item.name}</div>
                <div className="text-muted-foreground">Partner</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {(certs.length ? certs : ["ISO 27001", "ISO 20000", "Vendor Certified"]).slice(0,3).map((c, i) => (
              <div key={`c-${i}`} className="p-6 bg-background rounded-lg border text-center">
                <div className="text-xl font-semibold mb-1">{c}</div>
                <div className="text-muted-foreground">Certified</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
