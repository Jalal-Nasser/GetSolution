import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/corporate_hero_background_image.png";
import aboutImage from "@assets/generated_images/about_page_hero_image.png";
import teamImage from "@assets/generated_images/team_collaboration_image.png";
import HeroCarousel from "@/components/HeroCarousel";
import AnimatedSvgIcon from "@/components/AnimatedSvgIcon";

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
      <section className="relative text-background">
        <HeroCarousel slides={[{ src: heroImage, alt: "Hero" }, { src: aboutImage, alt: "About" }, { src: teamImage, alt: "Team" }]} />
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-hero-title">DIGITAL TRANSFORMATION</h1>
              <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
              <p className="text-xl mb-6 text-background/90" data-testid="text-hero-subtitle">Empowering your business with innovative IT solutions</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90" data-testid="button-hero-learn">LEARN MORE <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" data-testid="button-hero-contact">Get in Touch</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-who-we-are-title">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p data-testid="text-who-para-1">
                  We are Get Solution, a trusted technology partner to leading enterprises across Saudi Arabia and the GCC. We deliver innovative IT solutions and reliable services that streamline operations and boost innovation.
                </p>
                <p data-testid="text-who-para-2">
                  Our highly skilled experts team up dynamically to tailor complex solutions and deliver them in simple, reliable, and cost‑effective ways—reducing complexity, risk, and cost for our clients.
                </p>
                <p data-testid="text-who-para-3">
                  We combine deep domain expertise with modern technologies to help organizations accelerate digital transformation and achieve measurable outcomes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-1">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Streamline Operations</h3>
                <p className="text-foreground/80">Optimize processes and infrastructure for efficiency and reliability.</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-2">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Boost Innovation</h3>
                <p className="text-foreground/80">Adopt future‑ready solutions that unlock new opportunities.</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-3">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Reduce Complexity</h3>
                <p className="text-foreground/80">Simplify technology stacks and improve maintainability.</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-4">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Mitigate Risk & Cost</h3>
                <p className="text-foreground/80">Strengthen security and optimize TCO across the lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-services-title">
              Our IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-3">
                    <AnimatedSvgIcon src={
                      index === 0 ? "/services/cloud.svg" :
                      index === 1 ? "/services/saas.svg" :
                      index === 2 ? "/services/infrastructure-networks.svg" :
                      index === 3 ? "/services/security.svg" : "/services/business.svg"
                    } size={72} hover />
                  </div>
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
              </motion.div>
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

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Featured Work</h2>
            <p className="text-lg text-muted-foreground">A glimpse into our projects and collaboration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[aboutImage, teamImage, heroImage].map((img, i) => (
              <motion.div key={i} className="rounded-lg overflow-hidden hover-elevate" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <img src={img} alt="Project" className="w-full h-56 object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Trusted By</h2>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {['/partners/stc.svg','/partners/aramco.svg','/partners/sabic.svg','/partners/stc.svg','/partners/aramco.svg','/partners/sabic.svg'].map((src, i) => (
                <img key={i} src={src} alt="Partner logo" className="h-12" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-why-choose-title">
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
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-cta-title">
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
