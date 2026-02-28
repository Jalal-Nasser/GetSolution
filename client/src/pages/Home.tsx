import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, GraduationCap, Flag, BadgeCheck, Headphones, DollarSign, Handshake, Layers, Trophy, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import heroImage from "@assets/generated_images/corporate_hero_background_image.png";
import aboutImage from "@assets/generated_images/about_page_hero_image.png";
import teamImage from "@assets/generated_images/team_collaboration_image.png";
import HeroCarousel from "@/components/HeroCarousel";
import AnimatedSvgIcon from "@/components/AnimatedSvgIcon";

export default function Home() {
  const { t, dir, locale } = useI18n();
  const services = locale === "ar"
    ? [
        { title: "تحديث الشبكات", description: "بنية تحتية آمنة وموثوقة لاتصال سلس" },
        { title: "تعزيز الابتكار", description: "اعتماد حلول مستقبلية تفتح فرصًا جديدة" },
        { title: "الأمن السيبراني", description: "تعزيز الأمن وتحسين التكلفة الإجمالية عبر دورة الحياة" },
        { title: "الحوسبة السحابية", description: "حلول سحابية قابلة للتوسع ومرنة" },
      ]
    : [
        { title: "Computer Networks", description: "Secure and reliable infrastructure for seamless connectivity" },
        { title: "Boost Innovation", description: "Adopt future‑ready solutions that unlock new opportunities" },
        { title: "Cybersecurity", description: "Strengthen security and optimize TCO across the lifecycle" },
        { title: "Cloud Computing", description: "Scalable and flexible cloud solutions" },
      ];

  const whyChooseUs = [
    { label: "Years of Expertise", value: "15+" },
    { label: "IT Solutions", value: "8" },
    { label: "Global Clients", value: "500+" },
    { label: "Success Rate", value: "99.8%" },
  ];

  const featureLeft = [
    { icon: Building2, title: t("home.why.features.industry.title"), description: t("home.why.features.industry.desc") },
    { icon: GraduationCap, title: t("home.why.features.training.title"), description: t("home.why.features.training.desc") },
    { icon: Flag, title: t("home.why.features.vision2030.title"), description: t("home.why.features.vision2030.desc") },
    { icon: BadgeCheck, title: t("home.why.features.iso.title"), description: t("home.why.features.iso.desc") },
    { icon: Headphones, title: t("home.why.features.support.title"), description: t("home.why.features.support.desc") },
    { icon: DollarSign, title: t("home.why.features.cost.title"), description: t("home.why.features.cost.desc") },
    { icon: Trophy, title: t("home.why.features.track.title"), description: t("home.why.features.track.desc") },
    { icon: Sparkles, title: t("home.why.features.innovation.title"), description: t("home.why.features.innovation.desc") },
  ];
  const featureRight = [
    { icon: Handshake, title: t("home.why.features.partner.title"), description: t("home.why.features.partner.desc") },
    { icon: Layers, title: t("home.why.features.endtoend.title"), description: t("home.why.features.endtoend.desc") },
    { icon: MapPin, title: t("home.why.features.market.title"), description: t("home.why.features.market.desc") },
  ];

  return (
    <div>
      <section className="relative text-background">
        <HeroCarousel slides={[{ src: heroImage, alt: "Hero" }, { src: aboutImage, alt: "About" }, { src: teamImage, alt: "Team" }]} />
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-hero-title">{t("home.heroTitle")}</h1>
              <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
              <p className="text-xl mb-6 text-background/90" data-testid="text-hero-subtitle">{t("home.heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90" data-testid="button-hero-learn">{t("home.heroLearn")} <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" data-testid="button-hero-contact">{t("home.heroContact")}</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div dir={dir}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-who-we-are-title">
                {t("home.whoTitle")}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p data-testid="text-who-para-1">{t("home.whoPara1")}</p>
                <p data-testid="text-who-para-2">{t("home.whoPara2")}</p>
                <p data-testid="text-who-para-3">{t("home.whoPara3")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-1">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.benefit1Title")}</h3>
                <p className="text-foreground/80">{t("home.benefit1Desc")}</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-2">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.benefit2Title")}</h3>
                <p className="text-foreground/80">{t("home.benefit2Desc")}</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-3">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.benefit3Title")}</h3>
                <p className="text-foreground/80">{t("home.benefit3Desc")}</p>
              </div>
              <div className="p-6 bg-muted/10 rounded-xl border border-foreground/15 shadow-md tile-accent transition-shadow hover:shadow-lg" data-testid="who-benefit-4">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.benefit4Title")}</h3>
                <p className="text-foreground/80">{t("home.benefit4Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" dir={dir}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-services-title">
                {t("home.servicesTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("home.servicesSubtitle")}
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} className="h-full" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Card className="hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col" data-testid={`card-service-${index}`}>
                <CardHeader className="flex-1">
                  <div className="mb-3">
                    <AnimatedSvgIcon src={
                      index === 0 ? "/services/cloud.svg" :
                      index === 1 ? "/services/saas.svg" :
                      index === 2 ? "/services/infrastructure-networks.svg" :
                      index === 3 ? "/services/security.svg" : "/services/business.svg"
                    } size={72} hover />
                  </div>
                  <CardTitle className="text-xl text-center" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <CardDescription className={`text-base ${dir === "rtl" ? "text-right" : "text-left"}`} data-testid={`text-service-description-${index}`}>{service.description}</CardDescription>
                  <Link href="/services" className="mt-4 block" data-testid={`link-service-${index}`}>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-secondary" data-testid={`button-learn-more-${index}`}>
                      {t("home.viewDetails")} <ArrowRight className="ml-2 h-4 w-4" />
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
                {t("home.viewAll")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.featuredTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("home.featuredSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["saudi-1", "saudi-2", "saudi-3"].map((name, i) => (
              <motion.div key={i} className="rounded-lg overflow-hidden hover-elevate" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <img
                  src={`/featured/${name}.jpg`}
                  alt="Project"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  data-fmt="jpg"
                  onError={(e) => {
                    const fmt = e.currentTarget.getAttribute("data-fmt") || "jpg";
                    const next = fmt === "jpg" ? "png" : fmt === "png" ? "webp" : null;
                    if (next) {
                      e.currentTarget.setAttribute("data-fmt", next);
                      e.currentTarget.src = `/featured/${name}.${next}`;
                    } else {
                      const fallback = i === 0 ? aboutImage : i === 1 ? teamImage : heroImage;
                      e.currentTarget.src = (fallback as string);
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir={dir}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-why-choose-title">
              {t("home.whyTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("home.whySubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featureLeft.map((f, i) => (
                <div key={`fl-${i}`} className="p-6 bg-background rounded-xl border shadow-md hover-elevate">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {featureRight.map((f, i) => (
                <div key={`fr-${i}`} className="p-6 bg-background rounded-xl border shadow-md hover-elevate">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <f.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-cta-title">
              {t("home.ctaTitle")}
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              {t("home.ctaSubtitle")}
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-secondary backdrop-blur-sm border-secondary text-background hover:bg-secondary/90" data-testid="button-cta-contact">
                {t("home.ctaButton")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
