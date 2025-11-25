import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Users, TrendingUp, Award, CheckCircle, BarChart3 } from "lucide-react";
import heroImage from "@assets/generated_images/corporate_hero_background_image.png";
import consultingImage from "@assets/generated_images/business_consulting_service_illustration.png";
import technologyImage from "@assets/generated_images/technology_solutions_service_illustration.png";
import trainingImage from "@assets/generated_images/training_services_illustration.png";

export default function Home() {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic planning and business optimization to drive growth and efficiency.",
      icon: Target,
      image: consultingImage,
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge IT infrastructure and digital transformation services.",
      icon: BarChart3,
      image: technologyImage,
    },
    {
      title: "Professional Training",
      description: "Expert-led programs to develop your team's skills and capabilities.",
      icon: Users,
      image: trainingImage,
    },
  ];

  const stats = [
    { label: "Successful Projects", value: "500+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Years of Excellence", value: "15+", icon: TrendingUp },
    { label: "Expert Consultants", value: "50+", icon: CheckCircle },
  ];

  return (
    <div>
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-background overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-hero-title">
              Transform Your Business with Expert Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-background/90" data-testid="text-hero-subtitle">
              Professional consulting, technology, and training services to help your organization thrive in a competitive landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20" data-testid="button-hero-contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm border-background/30 text-background hover:bg-background/10" data-testid="button-hero-services">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4" data-testid={`text-service-description-${index}`}>{service.description}</CardDescription>
                  <Link href="/services" data-testid={`link-service-${index}`}>
                    <Button variant="ghost" className="p-0 h-auto font-semibold" data-testid={`button-learn-more-${index}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-stats-title">
              Our Track Record
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss how our expert solutions can help you achieve your goals
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background/30 text-primary-foreground hover:bg-background/20" data-testid="button-cta-contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
