import React, { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Star, Quote } from "lucide-react";
import { Laravel, PHP, NodeJS, ReactJS, NextJS, WordPress, MongoDB, MySQL, Tailwind, TypeScript } from "@/assets";

const techStack = [
  { name: "WordPress", color: "#21749b", src: WordPress },
  { name: "React", color: "#61DAFB", src: ReactJS },
  { name: "Next.js", color: "#000000", src: NextJS },
  { name: "Node.js", color: "#68A063", src: NodeJS },
  { name: "PHP", color: "#777BB4", src: PHP },
  { name: "Laravel", color: "#FF2D20", src: Laravel },
  { name: "TypeScript", color: "#3178C6", src: TypeScript },
  { name: "Tailwind CSS", color: "#06B6D4", src: Tailwind },
  { name: "MySQL", color: "#4479A1", src: MySQL },
  { name: "MongoDB", color: "#47A248", src: MongoDB },
];

const testimonials = [
  {
    quote:
      "They transformed our outdated WordPress site into a modern, fast-loading masterpiece. Our conversion rate increased by 65% within the first month. Exceptional team!",
    author: "Michael Thompson",
    role: "CEO",
    company: "TechVentures Inc.",
    avatar: "MT",
  },
  {
    quote:
      "The React dashboard they built for us handles 10,000+ daily users flawlessly. Their attention to detail and code quality is outstanding. Highly recommend!",
    author: "Sarah Williams",
    role: "CTO",
    company: "DataFlow Analytics",
    avatar: "SW",
  },
  {
    quote:
      "From our WooCommerce store to custom Node.js APIs, they delivered everything on time and on budget. A true full-stack partner for any project.",
    author: "David Chen",
    role: "Founder",
    company: "E-Commerce Plus",
    avatar: "DC",
  },
];

const stats = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export const SocialProofSection: React.FC = () => {

  const Counter = ({ value, duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = Number(value);
      if (start === end) return;

      const incrementTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}</span>;
  };


  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Tech Stack */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
              Technologies We Master
            </p>
          </div>
        </AnimatedSection>

        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-scroll">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-10"
              >
                <div className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-full border border-border hover:border-accent/30 transition-colors `}
                  style={{
                    backgroundColor: `${tech.color}19`, // 20% opacity
                  }}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-10 border-y border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <Counter value={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Client Testimonials
            </span>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">What Our Clients Say</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Don't just take our word for it — hear from businesses we've
              helped grow.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 100}>
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:shadow-elevated transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-semibold text-accent">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
