import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Code, Settings, Zap, Brain, Shield, BarChart3, Cloud } from "lucide-react";

export default function Services() {
  const itServices = [
    {
      code: "NET-101",
      title: "Computer Networks",
      description: "Secure and reliable infrastructure for seamless connectivity",
      icon: Wifi,
      capabilities: ["Network Design", "Security", "Performance"],
    },
    {
      code: "SFT-202",
      title: "Software Publishing",
      description: "Custom software solutions tailored to your needs",
      icon: Code,
      capabilities: ["Custom Dev", "API Integration", "Deployment"],
    },
    {
      code: "OPS-303",
      title: "Operating Systems",
      description: "Optimization and management of OS environments",
      icon: Settings,
      capabilities: ["OS Management", "Optimization", "Support"],
    },
    {
      code: "APP-404",
      title: "Application Development",
      description: "Building innovative web and mobile applications",
      icon: Zap,
      capabilities: ["Web Apps", "Mobile Apps", "Real-time Systems"],
    },
    {
      code: "AI-505",
      title: "Artificial Intelligence",
      description: "Leveraging AI for smarter business insights",
      icon: Brain,
      capabilities: ["Machine Learning", "Data Analysis", "Automation"],
    },
    {
      code: "CYB-606",
      title: "Cybersecurity",
      description: "Protecting data with advanced security measures",
      icon: Shield,
      capabilities: ["Threat Detection", "Compliance", "Risk Management"],
    },
    {
      code: "DAT-707",
      title: "Big Data Analytics",
      description: "Unlocking value from data with powerful analytics",
      icon: BarChart3,
      capabilities: ["Data Processing", "Insights", "Reporting"],
    },
    {
      code: "CLD-808",
      title: "Cloud Computing",
      description: "Scalable and flexible cloud solutions",
      icon: Cloud,
      capabilities: ["Cloud Migration", "Infrastructure", "Management"],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-services-hero-title">
              IT SERVICES
            </h1>
            <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
            <p className="text-xl text-muted-foreground" data-testid="text-services-hero-subtitle">
              Eight specialized IT services to meet all your technology needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-secondary" data-testid={`icon-service-${index}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-code-${index}`}>
                      {service.code}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                  <CardDescription className="text-base" data-testid={`text-service-description-${index}`}>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <Badge
                        key={capIndex}
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-capability-${index}-${capIndex}`}
                      >
                        {capability}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-title">
              Our Expertise
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-12">
              Comprehensive IT solutions focused on delivering innovation and excellence
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-1">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-1-title">
                  Specialized Services
                </h3>
                <p className="text-foreground/80" data-testid="text-expertise-1-desc">
                  Eight focused IT service areas covering all aspects of digital infrastructure and transformation
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-2">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-2-title">
                  Proven Track Record
                </h3>
                <p className="text-foreground/80" data-testid="text-expertise-2-desc">
                  15+ years of experience delivering innovative solutions to enterprises globally
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-3">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-3-title">
                  Commitment to Excellence
                </h3>
                <p className="text-foreground/80" data-testid="text-expertise-3-desc">
                  Dedicated to building lasting partnerships and achieving measurable business impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Capabilities</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">End-to-end services tailored to streamline operations and boost innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Consulting & Strategy</h3>
              <p className="text-muted-foreground">Assessment, roadmapping, solution architecture, and governance</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Implementation & Delivery</h3>
              <p className="text-muted-foreground">Systems integration, migration, customization, and deployment</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Operations & Support</h3>
              <p className="text-muted-foreground">Managed services, monitoring, optimization, and training</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Industries</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">Serving leading enterprises across Saudi Arabia and the GCC</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 bg-background rounded">Government</div>
            <div className="p-4 bg-background rounded">Energy</div>
            <div className="p-4 bg-background rounded">Healthcare</div>
            <div className="p-4 bg-background rounded">Finance</div>
            <div className="p-4 bg-background rounded">Manufacturing</div>
            <div className="p-4 bg-background rounded">Education</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Projects</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">Selected engagements demonstrating measurable business impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Network Modernization</h3>
              <p className="text-muted-foreground">High-availability upgrade for a regional enterprise with improved performance and security</p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Secure Cloud Migration</h3>
              <p className="text-muted-foreground">Zero-downtime migration of core workloads with compliance controls</p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">AI Insights Platform</h3>
              <p className="text-muted-foreground">Data pipeline and ML models delivering actionable insights and automation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
