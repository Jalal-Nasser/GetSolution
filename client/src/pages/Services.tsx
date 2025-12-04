import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { Wifi, Code, Settings, Zap, Brain, Shield, BarChart3, Cloud } from "lucide-react";

export default function Services() {
  const { t, dir, messages, locale } = useI18n();
  const itServices = locale === "ar"
    ? [
        {
          code: "NET-101",
          title: "شبكات الحاسوب",
          description: "بنية تحتية آمنة وموثوقة لاتصال سلس",
          icon: Wifi,
          capabilities: ["تصميم الشبكات", "الأمن", "الأداء"],
        },
        {
          code: "SFT-202",
          title: "نشر البرمجيات",
          description: "حلول برمجية مخصصة مصممة لاحتياجاتك",
          icon: Code,
          capabilities: ["تطوير مخصص", "تكامل واجهات API", "النشر"],
        },
        {
          code: "OPS-303",
          title: "أنظمة التشغيل",
          description: "تحسين وإدارة بيئات أنظمة التشغيل",
          icon: Settings,
          capabilities: ["إدارة الأنظمة", "التحسين", "الدعم"],
        },
        {
          code: "APP-404",
          title: "تطوير التطبيقات",
          description: "بناء تطبيقات ويب وجوال مبتكرة",
          icon: Zap,
          capabilities: ["تطبيقات الويب", "تطبيقات الجوال", "أنظمة فورية"],
        },
        {
          code: "AI-505",
          title: "الذكاء الاصطناعي",
          description: "استثمار الذكاء الاصطناعي لتحقيق رؤى أعمال أذكى",
          icon: Brain,
          capabilities: ["تعلم الآلة", "تحليل البيانات", "الأتمتة"],
        },
        {
          code: "CYB-606",
          title: "الأمن السيبراني",
          description: "حماية البيانات باستخدام تدابير أمنية متقدمة",
          icon: Shield,
          capabilities: ["كشف التهديدات", "الامتثال", "إدارة المخاطر"],
        },
        {
          code: "DAT-707",
          title: "تحليلات البيانات الضخمة",
          description: "استخراج القيمة من البيانات باستخدام تحليلات قوية",
          icon: BarChart3,
          capabilities: ["معالجة البيانات", "الرؤى", "التقارير"],
        },
        {
          code: "CLD-808",
          title: "الحوسبة السحابية",
          description: "حلول سحابية قابلة للتوسع ومرنة",
          icon: Cloud,
          capabilities: ["هجرة إلى السحابة", "البنية", "الإدارة"],
        },
      ]
    : [
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
              {t("services.heroTitle")}
            </h1>
            <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
            <p className="text-xl text-muted-foreground" data-testid="text-services-hero-subtitle">
              {t("services.heroSubtitle")}
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
                className="hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-center mb-4" dir={dir}>
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-secondary" data-testid={`icon-service-${index}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 text-center" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                  <CardDescription className={`text-base ${dir === "rtl" ? "text-right" : "text-left"}`} data-testid={`text-service-description-${index}`}>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
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
              {t("services.expertiseTitle")}
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-12">
              {t("services.expertise3Desc")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-1" dir={dir}>
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-1-title">
                  {t("services.expertise1Title")}
                </h3>
                <p className={`text-foreground/80 ${dir === "rtl" ? "text-right" : "text-left"}`} data-testid="text-expertise-1-desc">
                  {t("services.expertise1Desc")}
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-2" dir={dir}>
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-2-title">
                  {t("services.expertise2Title")}
                </h3>
                <p className={`text-foreground/80 ${dir === "rtl" ? "text-right" : "text-left"}`} data-testid="text-expertise-2-desc">
                  {t("services.expertise2Desc")}
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-md border border-white/25 hover:border-secondary transition-colors tile-accent text-foreground" data-testid="expertise-3" dir={dir}>
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-expertise-3-title">
                  {t("services.expertise3Title")}
                </h3>
                <p className={`text-foreground/80 ${dir === "rtl" ? "text-right" : "text-left"}`} data-testid="text-expertise-3-desc">
                  {t("services.expertise3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.capabilitiesTitle")}</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">{t("services.capabilitiesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.capabilities1Title")}</h3>
              <p className="text-muted-foreground">{t("services.capabilities1Desc")}</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.capabilities2Title")}</h3>
              <p className="text-muted-foreground">{t("services.capabilities2Desc")}</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.capabilities3Title")}</h3>
              <p className="text-muted-foreground">{t("services.capabilities3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.industriesTitle")}</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">{t("services.industriesSubtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {(messages.services as any)?.industryList?.map((i: string, idx: number) => (
              <div key={idx} className="p-4 bg-background rounded">{i}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("services.projectsTitle")}</h2>
            <div className="mx-auto w-20 h-1 rounded bg-secondary mb-4" />
            <p className="text-lg text-muted-foreground">{t("services.projectsSubtitle")}</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate active-elevate-2 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Wifi className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{t("services.project1Title")}</CardTitle>
                <CardDescription className="text-base">{t("services.project1Desc")}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate active-elevate-2 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Cloud className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{t("services.project2Title")}</CardTitle>
                <CardDescription className="text-base">{t("services.project2Desc")}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate active-elevate-2 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{t("services.project3Title")}</CardTitle>
                <CardDescription className="text-base">{t("services.project3Desc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
