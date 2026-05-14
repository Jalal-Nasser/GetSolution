import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, User, Building, Type } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t, dir, locale } = useI18n();
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    const to = "info@gscompany.sa";
    const subject = encodeURIComponent(`[Website Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nCompany: ${data.company || "-"}\n\nMessage:\n${data.message}`
    );
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    toast({
      title: "Opening your mail client",
      description: "Your message details are pre‑filled. Please confirm and send.",
    });
    form.reset();
  };

  const localePlaceholderName = () => (locale === "ar" ? "اسمك" : "Your Name");
  const localePlaceholderEmail = () => (locale === "ar" ? "you@email.com" : "your@email.com");
  const localePlaceholderPhone = () => (locale === "ar" ? "+966 50 123 4567" : "+966 50 123 4567");
  const localePlaceholderCompany = () => (locale === "ar" ? "اسم شركتك" : "Your Company");
  const localePlaceholderSubject = () => (locale === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help?");
  const localePlaceholderMessage = () => (locale === "ar" ? "أخبرنا عن احتياجاتك التقنية..." : "Tell us about your IT needs...");

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-contact-hero-title">
              {t("contact.title")}
            </h1>
            <motion.div
              className="mx-auto w-24 h-1 rounded bg-secondary mb-5"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                boxShadow: [
                  "0 0 0 0 rgba(0,0,0,0)",
                  "0 0 12px 2px rgba(234, 88, 12, 0.6)",
                  "0 0 0 0 rgba(0,0,0,0)"
                ],
                scaleY: [1, 1.15, 1]
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                boxShadow: { delay: 0.7, duration: 0.8, times: [0, 0.5, 1] },
                scaleY: { delay: 0.7, duration: 0.8, times: [0, 0.5, 1] }
              }}
              style={{ transformOrigin: "center" }}
            />
            <p className="text-xl text-muted-foreground" data-testid="text-contact-hero-subtitle">
              {t("contact.subtitle")}
            </p>
            <motion.div
              className="mt-6 flex justify-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              <a
                href="tel:+966112345678"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border bg-background/80 backdrop-blur hover-elevate active-elevate-2 transition-all"
                aria-label="Call us"
                data-testid="hero-action-call"
              >
                <Phone className="h-4 w-4 text-secondary transition-transform group-hover:scale-110" />
                <span className="text-sm">{t("contact.heroActions.call")}</span>
              </a>
              <a
                href="mailto:info@gscompany.sa"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border bg-background/80 backdrop-blur hover-elevate active-elevate-2 transition-all"
                aria-label="Email us"
                data-testid="hero-action-email"
              >
                <Mail className="h-4 w-4 text-secondary transition-transform group-hover:scale-110" />
                <span className="text-sm">{t("contact.heroActions.email")}</span>
              </a>
              <a
                href="#contact-info"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border bg-background/80 backdrop-blur hover-elevate active-elevate-2 transition-all"
                aria-label="View contact details"
                data-testid="hero-action-details"
              >
                <MapPin className="h-4 w-4 text-secondary transition-transform group-hover:scale-110" />
                <span className="text-sm">{t("contact.heroActions.details")}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="hover-elevate active-elevate-2 bg-background rounded-xl border border-white/20 shadow-md" dir={dir}>
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-form-title">{t("contact.form.title")}</CardTitle>
                  <div className="w-16 h-1 rounded bg-secondary mt-2" />
                  <CardDescription className="text-base" data-testid="text-form-description">
                    {t("contact.form.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.name")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <User className="h-4 w-4" />
                                </span>
                                <Input placeholder={localePlaceholderName()} className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-name" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.email")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Mail className="h-4 w-4" />
                                </span>
                                <Input type="email" placeholder={localePlaceholderEmail()} className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-email" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.phone")}</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                  </span>
                                  <Input placeholder={localePlaceholderPhone()} className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-phone" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.company")}</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <Building className="h-4 w-4" />
                                  </span>
                                  <Input placeholder={localePlaceholderCompany()} className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-company" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.subject")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Type className="h-4 w-4" />
                                </span>
                                <Input placeholder={localePlaceholderSubject()} className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-subject" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.message")}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={localePlaceholderMessage()}
                                className="min-h-32 resize-none rounded-xl focus-visible:ring-2 focus-visible:ring-secondary"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-secondary text-background hover:bg-primary hover:text-primary-foreground"
                        data-testid="button-submit"
                      >
                        {t("contact.form.submit")}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8" id="contact-info" dir={dir}>
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-info-title">
                  {t("contact.info.title")}
                </h2>
                <div className="w-16 h-1 rounded bg-secondary mb-6" />
                <p className="text-muted-foreground mb-8" data-testid="text-info-description">
                  {t("contact.info.description")}
                </p>
              </div>

              <div className="space-y-6">
                <Card data-testid="card-location">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-secondary" data-testid="icon-location" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-location-title">{t("contact.info.officeTitle")}</CardTitle>
                        <CardDescription className="text-base" data-testid="text-address">
                          {t("contact.info.officeAddress")}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card data-testid="card-phone-info">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-secondary" data-testid="icon-phone" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-phone-title">{t("contact.info.phoneTitle")}</CardTitle>
                        <CardDescription className="text-base space-y-1">
                          <a href="tel:+966540541719" className="hover:text-primary transition-colors block" data-testid="link-phone">
                            <span dir="ltr">{t("contact.info.phone2")}</span>
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card data-testid="card-email-info">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-secondary" data-testid="icon-email" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-email-title">{t("contact.info.emailTitle")}</CardTitle>
                        <CardDescription className="text-base">
                          <a href="mailto:info@gscompany.sa" className="hover:text-primary transition-colors" data-testid="link-email">
                            {t("contact.info.emailAddress")}
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card data-testid="card-hours">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-secondary" data-testid="icon-hours" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-hours-title">{t("contact.info.hoursTitle")}</CardTitle>
                        <CardDescription className="text-base" data-testid="text-hours">
                          {t("contact.info.hoursText")}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="pt-4 border-t" data-testid="social-links">
                  <h3 className="font-semibold mb-4" data-testid="text-social-title">{t("contact.info.socialTitle")}</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" data-testid="icon-linkedin" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-twitter" aria-label="Twitter">
                      <Twitter className="h-5 w-5" data-testid="icon-twitter" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook" aria-label="Facebook">
                      <Facebook className="h-5 w-5" data-testid="icon-facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
