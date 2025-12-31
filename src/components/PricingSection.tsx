import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses and landing pages",
    price: "From $1,500",
    timeline: "2-3 weeks",
    features: [
      "Custom WordPress or React site",
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with custom needs",
    price: "From $4,500",
    timeline: "4-6 weeks",
    features: [
      "Custom web application",
      "Up to 15 pages/features",
      "E-commerce integration",
      "Advanced SEO & Analytics",
      "Custom API development",
      "CMS integration",
      "3 months support",
    ],
    cta: "Get Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale solutions for established businesses",
    price: "Custom",
    timeline: "8-12 weeks",
    features: [
      "Everything in Professional",
      "Unlimited pages/features",
      "Custom backend systems",
      "Third-party integrations",
      "Performance optimization",
      "Dedicated project manager",
      "12 months support & SLA",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Pricing
            </span>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">Transparent Project Pricing</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Every project is unique. Get a custom quote tailored to your
              specific requirements and budget.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 100}>
              <div
                className={cn(
                  "relative bg-background rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover:-translate-y-1 flex flex-col h-full",
                  pkg.popular
                    ? "border-accent shadow-coral"
                    : "border-border hover:shadow-elevated"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold text-accent-foreground bg-accent rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Timeline: {pkg.timeline}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "coral" : "ghost-dark"}
                  size="lg"
                  className="w-full mt-auto"
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Need something specific? We offer{" "}
            <a href="#contact" className="text-accent hover:underline">
              hourly consulting
            </a>{" "}
            starting at $75/hour.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
