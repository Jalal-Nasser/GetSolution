import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Message Sent Successfully!",
        description: response.message || "Thank you for your inquiry. We will get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Failed to submit inquiry. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactInquiry) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-contact-hero-title">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-contact-hero-subtitle">
              Let's discuss how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-form-title">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8" data-testid="text-form-description">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-name" />
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
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                            <Input placeholder="+966 12 345 6789" {...field} data-testid="input-phone" />
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
                            <Input placeholder="Your Company" {...field} data-testid="input-company" />
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
                          <Input placeholder="How can we help you?" {...field} data-testid="input-subject" />
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
                            placeholder="Tell us more about your needs..."
                            className="min-h-32 resize-none"
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
                    className="w-full" 
                    disabled={mutation.isPending}
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-info-title">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8" data-testid="text-info-description">
                  Reach out to us through any of the following channels
                </p>
              </div>

              <div className="space-y-6">
                <Card data-testid="card-location">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" data-testid="icon-location" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-location-title">Office Location</CardTitle>
                        <CardDescription className="text-base" data-testid="text-address">
                          Riyadh, Saudi Arabia
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card data-testid="card-phone-info">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" data-testid="icon-phone" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-phone-title">Phone</CardTitle>
                        <CardDescription className="text-base">
                          <a href="tel:+966123456789" className="hover:text-primary transition-colors" data-testid="link-phone">
                            +966 12 345 6789
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
                        <Mail className="h-6 w-6 text-primary" data-testid="icon-email" />
                      </div>
                      <div>
                        <CardTitle className="text-lg" data-testid="text-email-title">Email</CardTitle>
                        <CardDescription className="text-base">
                          <a href="mailto:info@gscompany.sa" className="hover:text-primary transition-colors" data-testid="link-email">
                            info@gscompany.sa
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
                        <Clock className="h-6 w-6 text-primary" data-testid="icon-hours" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
