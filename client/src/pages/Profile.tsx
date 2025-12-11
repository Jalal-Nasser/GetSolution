import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Handshake, Layers, MapPin, Building2, GraduationCap, Flag, BadgeCheck, Headphones, DollarSign, Trophy, Sparkles } from "lucide-react";

export default function Profile() {
  const { t, dir } = useI18n();
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {t("profile.heroTitle")}
            </h1>
            <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
            <p className="text-lg text-muted-foreground">
              {t("profile.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir={dir}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{t("home.whyTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("home.whySubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[{icon: Building2, title: t("home.why.features.industry.title"), description: t("home.why.features.industry.desc")},
                {icon: GraduationCap, title: t("home.why.features.training.title"), description: t("home.why.features.training.desc")},
                {icon: Flag, title: t("home.why.features.vision2030.title"), description: t("home.why.features.vision2030.desc")},
                {icon: BadgeCheck, title: t("home.why.features.iso.title"), description: t("home.why.features.iso.desc")},
                {icon: Headphones, title: t("home.why.features.support.title"), description: t("home.why.features.support.desc")},
                {icon: DollarSign, title: t("home.why.features.cost.title"), description: t("home.why.features.cost.desc")},
                {icon: Trophy, title: t("home.why.features.track.title"), description: t("home.why.features.track.desc")},
                {icon: Sparkles, title: t("home.why.features.innovation.title"), description: t("home.why.features.innovation.desc")}].map((f, i) => (
                <Card key={`pl-${i}`} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg"><f.icon className="h-6 w-6 text-primary" /></div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {[{icon: Handshake, title: t("home.why.features.partner.title"), description: t("home.why.features.partner.desc")},
                {icon: Layers, title: t("home.why.features.endtoend.title"), description: t("home.why.features.endtoend.desc")},
                {icon: MapPin, title: t("home.why.features.market.title"), description: t("home.why.features.market.desc")}].map((f, i) => (
                <Card key={`pr-${i}`} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg"><f.icon className="h-6 w-6 text-secondary" /></div>
                    <div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
