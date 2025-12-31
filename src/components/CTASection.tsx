import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--accent)/0.1)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6 text-2xl sm:text-3xl md:text-4xl">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that helps
              your business grow. Free consultation — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg" className="sm:size-xl shadow-coral">
                <MessageSquare className="mr-2 w-5 h-5" />
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="sm:size-xl border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule a Call
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                No Hidden Fees
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                24-48h Response
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
