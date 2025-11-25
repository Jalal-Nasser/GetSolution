import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Company Profile
            </h1>
            <div className="mx-auto w-24 h-1 rounded bg-secondary mb-5" />
            <p className="text-lg text-muted-foreground">
              Explore GetSolution’s capabilities, services, and experience in our detailed profile.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Profile Document</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full rounded-lg overflow-hidden border">
                <object data="/GSC-Profilel.pdf" type="application/pdf" className="w-full" style={{ height: "72vh" }}>
                  <p className="p-4">
                    Unable to display the PDF inline. 
                    <a href="/GSC-Profilel.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary">
                      Download the Company Profile
                    </a>
                    .
                  </p>
                </object>
              </div>
              
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
