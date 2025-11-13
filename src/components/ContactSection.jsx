import { LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Always happy to talk about new opportunities or collaborate on web
          projects—drop a line and let’s connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <a
                  href="mailto:elian.sarmiento2440@gmail.com"
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium"> Email</h4>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      elian.sarmiento2440@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+13472999063"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (347) 299-9063
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground">
                    Queens, NY, United States
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/elian-sarmiento2440/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors inline-flex"
                >
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
