import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Apps() {
  const { t, dir, locale } = useI18n();
  const apps = locale === "ar"
    ? [
        {
          name: "GSC-FinAI",
          description: "منصة مالية ذكية: OCR/HDR، الامتثال، تحليلات الذكاء الاصطناعي",
          href: "https://finai.gscompany.sa",
          thumb: "/apps/finai-thumb.svg",
          tags: ["ذكاء اصطناعي", "OCR/HDR", "متوافق مع الخليج"],
        },
        {
          name: "FleetTrack",
          description: "تتبع فوري ورؤية لوجستية",
          href: "#",
          thumb: "/apps/fleet-thumb.svg",
          tags: ["إنترنت الأشياء", "خرائط"],
        },
        {
          name: "SecureDocs",
          description: "إدارة المستندات مع التشفير ومسارات التدقيق",
          href: "#",
          thumb: "/apps/securedocs-thumb.svg",
          tags: ["أمن", "امتثال"],
        },
      ]
    : [
        {
          name: "GSC-FinAI",
          description: "Intelligent finance platform: OCR/HDR, compliance, AI analytics",
          href: "https://finai.gscompany.sa",
          thumb: "/apps/finai-thumb.svg",
          tags: ["AI", "OCR/HDR", "GCC Compliant"],
        },
        {
          name: "FleetTrack",
          description: "Real-time tracking and logistics visibility",
          href: "#",
          thumb: "/apps/fleet-thumb.svg",
          tags: ["IoT", "Maps"],
        },
        {
          name: "SecureDocs",
          description: "Document management with encryption and audit trails",
          href: "#",
          thumb: "/apps/securedocs-thumb.svg",
          tags: ["Security", "Compliance"],
        },
      ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("apps.heroTitle")}</h1>
            <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
            <p className="text-xl text-muted-foreground">{t("apps.heroSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, i) => (
              <Card key={i} className="hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col">
                <CardHeader dir={dir} className="flex-1">
                  <div className="w-full bg-muted rounded-md mb-4 flex items-center justify-center p-2">
                    {app.thumb.endsWith('.svg') ? (
                      <img src={app.thumb} alt={app.name} className="w-full h-auto object-contain" loading="lazy" />
                    ) : (
                      (() => {
                        const base = app.thumb.replace(/\.(png|jpe?g|svg|webp)$/i, "");
                        return (
                          <img
                            src={`${base}.jpg`}
                            alt={app.name}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                            data-fmt="jpg"
                            onError={(e) => {
                              const fmt = e.currentTarget.getAttribute("data-fmt") || "jpg";
                              const next = fmt === "jpg" ? "png" : fmt === "png" ? "webp" : null;
                              if (next) {
                                e.currentTarget.setAttribute("data-fmt", next);
                                e.currentTarget.src = `${base}.${next}`;
                              }
                            }}
                          />
                        );
                      })()
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2 text-center">{app.name}</CardTitle>
                  <CardDescription className={`text-base ${dir === "rtl" ? "text-right" : "text-left"}`}>{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className={`flex flex-wrap gap-2 mb-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                    {app.tags.map((t, j) => (
                      <span key={j} className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary">{t}</span>
                    ))}
                  </div>
                  <a href={app.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-secondary">{t("apps.visit")} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
