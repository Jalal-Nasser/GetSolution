import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  BarChart3,
  Users,
  Code,
  Cloud,
  Shield,
  Lightbulb,
  LineChart,
  Settings,
  GraduationCap,
  Briefcase,
  Zap,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      category: "Business Consulting",
      icon: Target,
      color: "primary",
      services: [
        {
          icon: Lightbulb,
          title: "Strategic Planning",
          description: "Develop comprehensive business strategies aligned with your vision and market opportunities.",
          features: ["Market Analysis", "Competitive Positioning", "Growth Roadmaps"],
        },
        {
          icon: LineChart,
          title: "Performance Optimization",
          description: "Enhance operational efficiency and maximize ROI through data-driven insights.",
          features: ["Process Improvement", "KPI Development", "Efficiency Analysis"],
        },
        {
          icon: Briefcase,
          title: "Change Management",
          description: "Guide your organization through transformations with proven methodologies.",
          features: ["Stakeholder Engagement", "Risk Management", "Implementation Support"],
        },
      ],
    },
    {
      category: "Technology Solutions",
      icon: BarChart3,
      color: "secondary",
      services: [
        {
          icon: Cloud,
          title: "Cloud Solutions",
          description: "Modernize your infrastructure with scalable cloud platforms and services.",
          features: ["Cloud Migration", "Architecture Design", "Cost Optimization"],
        },
        {
          icon: Code,
          title: "Custom Development",
          description: "Build tailored software solutions that meet your unique business requirements.",
          features: ["Web Applications", "Mobile Apps", "System Integration"],
        },
        {
          icon: Shield,
          title: "Cybersecurity",
          description: "Protect your digital assets with comprehensive security frameworks.",
          features: ["Security Audits", "Threat Assessment", "Compliance"],
        },
      ],
    },
    {
      category: "Professional Training",
      icon: Users,
      color: "accent",
      services: [
        {
          icon: GraduationCap,
          title: "Leadership Development",
          description: "Cultivate strong leaders who can drive organizational success.",
          features: ["Executive Coaching", "Team Building", "Strategic Thinking"],
        },
        {
          icon: Settings,
          title: "Technical Training",
          description: "Upskill your team with the latest technologies and best practices.",
          features: ["Software Training", "DevOps Practices", "Agile Methodologies"],
        },
        {
          icon: Zap,
          title: "Soft Skills",
          description: "Enhance communication, collaboration, and professional effectiveness.",
          features: ["Communication", "Problem Solving", "Project Management"],
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-services-hero-title">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-services-hero-subtitle">
              Comprehensive solutions designed to address your business challenges and unlock new opportunities
            </p>
          </div>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 1 ? "py-20 bg-muted/30" : "py-20"}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className={`p-4 rounded-lg ${getColorClasses(category.color)}`}>
                <category.icon className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold" data-testid={`text-category-${categoryIndex}`}>
                  {category.category}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-service-${categoryIndex}-${serviceIndex}`}
                >
                  <CardHeader>
                    <div className={`p-3 rounded-lg w-fit mb-4 ${getColorClasses(category.color)}`}>
                      <service.icon className="h-6 w-6" data-testid={`icon-service-${categoryIndex}-${serviceIndex}`} />
                    </div>
                    <CardTitle className="text-xl mb-2" data-testid={`text-service-title-${categoryIndex}-${serviceIndex}`}>{service.title}</CardTitle>
                    <CardDescription className="text-base" data-testid={`text-service-description-${categoryIndex}-${serviceIndex}`}>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="text-sm"
                          data-testid={`badge-feature-${categoryIndex}-${serviceIndex}-${featureIndex}`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-process-title">
              Our Methodology
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We follow a proven approach to ensure successful outcomes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", description: "Understand your needs and objectives" },
                { step: "02", title: "Design", description: "Create tailored solutions" },
                { step: "03", title: "Deploy", description: "Implement with precision" },
                { step: "04", title: "Deliver", description: "Ensure lasting success" },
              ].map((phase, index) => (
                <div key={index} className="text-center" data-testid={`process-${index}`}>
                  <div className="text-5xl font-bold text-primary/20 mb-2" data-testid={`text-process-step-${index}`}>{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-process-title-${index}`}>{phase.title}</h3>
                  <p className="text-muted-foreground" data-testid={`text-process-description-${index}`}>{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
