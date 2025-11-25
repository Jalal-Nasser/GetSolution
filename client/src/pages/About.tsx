import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Shield, TrendingUp } from "lucide-react";
import aboutHeroImage from "@assets/generated_images/about_page_hero_image.png";
import teamImage from "@assets/generated_images/team_collaboration_image.png";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional results.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency are the foundations of our client relationships.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and continuously evolve our approaches.",
    },
  ];

  return (
    <div>
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-background overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url(${aboutHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-about-hero-title">
              About GetSolution
            </h1>
            <p className="text-xl sm:text-2xl text-background/90" data-testid="text-about-hero-subtitle">
              Your trusted partner in business transformation and growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p data-testid="text-story-para-1">
                  Founded over 15 years ago, GetSolution has been at the forefront of business consulting and technology solutions in Saudi Arabia. We began with a simple mission: to help organizations unlock their full potential through expert guidance and innovative solutions.
                </p>
                <p data-testid="text-story-para-2">
                  Today, we serve over 200 clients across various industries, delivering comprehensive services that drive measurable results. Our team of 50+ expert consultants brings deep industry knowledge and a commitment to excellence in every engagement.
                </p>
                <p data-testid="text-story-para-3">
                  From strategic planning to technology implementation and professional training, we provide end-to-end solutions that transform businesses and create lasting value.
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
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8" data-testid="card-mission">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl" data-testid="text-mission-title">Our Mission</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed" data-testid="text-mission-description">
                To empower organizations with innovative solutions, expert consulting, and strategic guidance that drive sustainable growth and competitive advantage in an ever-evolving business landscape.
              </CardDescription>
            </Card>

            <Card className="p-8" data-testid="card-vision">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl" data-testid="text-vision-title">Our Vision</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed" data-testid="text-vision-description">
                To be the leading business solutions provider in the region, recognized for excellence in service delivery, innovation, and our unwavering commitment to client success and long-term partnerships.
              </CardDescription>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-values-title">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
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
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
