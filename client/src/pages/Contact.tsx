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

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-contact-hero-title">
              CONTACT US
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
              Get in touch with our team for IT solutions consultation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="hover-elevate active-elevate-2 bg-background rounded-xl border border-white/20 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-form-title">Send Us a Message</CardTitle>
                  <div className="w-16 h-1 rounded bg-secondary mt-2" />
                  <CardDescription className="text-base" data-testid="text-form-description">
                    Fill out the form below and our team will get back to you within 24 hours.
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
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <User className="h-4 w-4" />
                                </span>
                                <Input placeholder="Your Name" className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-name" />
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Mail className="h-4 w-4" />
                                </span>
                                <Input type="email" placeholder="your@email.com" className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-email" />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Phone className="h-4 w-4" />
                                </span>
                                <Input placeholder="+966 50 123 4567" className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-phone" />
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
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Building className="h-4 w-4" />
                                </span>
                                <Input placeholder="Your Company" className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-company" />
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
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  <Type className="h-4 w-4" />
                                </span>
                                <Input placeholder="How can we help?" className="pl-9 focus-visible:ring-2 focus-visible:ring-secondary" {...field} data-testid="input-subject" />
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
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your IT needs..."
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
                    Send Message
                  </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }} data-testid="text-info-title">
                  Contact Information
                </h2>
                <div className="w-16 h-1 rounded bg-secondary mb-6" />
                <p className="text-muted-foreground mb-8" data-testid="text-info-description">
                  Reach out to us through any of the following channels
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
                        <CardTitle className="text-lg" data-testid="text-location-title">Office Location</CardTitle>
                        <CardDescription className="text-base" data-testid="text-address">
                          Olaya Street, Riyadh, Kingdom of Saudi Arabia
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card data-testid="card-additional-locations">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Additional Locations</CardTitle>
                        <CardDescription className="text-base">
                          Jeddah • Dammam • Al Khobar
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
                        <CardTitle className="text-lg" data-testid="text-phone-title">Phone</CardTitle>
                        <CardDescription className="text-base space-y-1">
                          <a href="tel:+966112345678" className="hover:text-primary transition-colors block" data-testid="link-phone">
                            +966 11 234 5678
                          </a>
                          <a href="tel:+966559876543" className="hover:text-primary transition-colors block" data-testid="link-phone-2">
                            +966 55 987 6543
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
                        <CardTitle className="text-lg" data-testid="text-email-title">Email</CardTitle>
                        <CardDescription className="text-base">
                          <a href="mailto:info@getsolutionit.com" className="hover:text-primary transition-colors" data-testid="link-email">
                            info@getsolutionit.com
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
                        <CardTitle className="text-lg" data-testid="text-hours-title">Business Hours</CardTitle>
                        <CardDescription className="text-base" data-testid="text-hours">
                          Sunday - Thursday: 9:00 AM - 6:00 PM
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="pt-4 border-t" data-testid="social-links">
                  <h3 className="font-semibold mb-4" data-testid="text-social-title">Connect With Us</h3>
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
