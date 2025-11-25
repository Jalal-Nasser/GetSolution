import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Cloud, Brain } from "lucide-react";
import heroImage from "@assets/generated_images/corporate_hero_background_image.png";

export default function Home() {
  const services = [
    {
      title: "Computer Networks",
      code: "NET-101",
      description: "Secure and reliable infrastructure for seamless connectivity",
    },
    {
      title: "Software Publishing",
      code: "SFT-202",
      description: "Custom software solutions tailored to your needs",
    },
    {
      title: "Cybersecurity",
      code: "CYB-606",
      description: "Protecting data with advanced security measures",
    },
    {
      title: "Cloud Computing",
      code: "CLD-808",
      description: "Scalable and flexible cloud solutions",
    },
  ];

  const whyChooseUs = [
    { label: "Years of Expertise", value: "15+" },
    { label: "IT Solutions", value: "8" },
    { label: "Global Clients", value: "500+" },
    { label: "Success Rate", value: "99.8%" },
  ];

  return (
    <div>
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-background overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 54, 93, 0.85), rgba(27, 54, 93, 0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-hero-title">
              DIGITAL TRANSFORMATION
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-background/90" data-testid="text-hero-subtitle">
              Empowering your business with innovative IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-secondary backdrop-blur-sm border-secondary text-background hover:bg-secondary/90" data-testid="button-hero-learn">
                  LEARN MORE <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20" data-testid="button-hero-contact">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-services-title">
              Our IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="text-sm font-semibold text-secondary mb-2" data-testid={`text-service-code-${index}`}>
                    {service.code}
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid={`text-service-description-${index}`}>{service.description}</CardDescription>
                  <Link href="/services" className="mt-4 block" data-testid={`link-service-${index}`}>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-secondary" data-testid={`button-learn-more-${index}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-view-all">
                VIEW ALL SERVICES <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-why-choose-title">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven expertise, innovative solutions, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl font-bold text-secondary mb-2" data-testid={`stat-value-${index}`}>
                  {item.value}
                </div>
                <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-cta-title">
              Ready for Digital Transformation?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss how our IT solutions can drive your business growth
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-secondary backdrop-blur-sm border-secondary text-background hover:bg-secondary/90" data-testid="button-cta-contact">
                CONTACT US TODAY <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
