import React from "react";
import {
  Globe,
  Code2,
  Smartphone,
  Database,
  ShoppingCart,
  Rocket,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and WooCommerce solutions. We build fast, secure, and SEO-optimized WordPress sites that convert.",
    tech: ["Theme Development", "Plugin Development", "WooCommerce"],
  },
  {
    icon: Code2,
    title: "React & Next.js Apps",
    description:
      "Modern, lightning-fast web applications built with React and Next.js. From SPAs to full-stack solutions with SSR.",
    tech: ["React.js", "Next.js", "TypeScript"],
  },
  {
    icon: Database,
    title: "Node.js & PHP Backend",
    description:
      "Robust, scalable backend systems and APIs. We architect solutions that handle millions of requests efficiently.",
    tech: ["Node.js", "Express", "PHP", "Laravel"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Pixel-perfect, mobile-first designs that look stunning on every device. We prioritize UX and conversion optimization.",
    tech: ["UI/UX Design", "Mobile-First", "Tailwind CSS"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete online store development with WooCommerce, Shopify, or custom solutions. Payment integration included.",
    tech: ["WooCommerce", "Payment Gateways", "Inventory"],
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    description:
      "Speed optimization, Core Web Vitals improvement, and technical SEO. We make sure your site ranks and converts.",
    tech: ["Speed Optimization", "Technical SEO", "Analytics"],
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-card">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Our Services
            </span>
            <h2 className="mb-4">Full-Stack Development Expertise</h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we deliver end-to-end web solutions
              tailored to your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <div className="group h-full p-6 lg:p-8 bg-background rounded-2xl border border-border hover:border-accent/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mb-5 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
