import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Code2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { NextJS, NodeJS, ReactJS, WordPress } from "@/assets";

export const HeroSection: React.FC = () => {
  const TypingText = ({
    text,
    speed = 80,
    deleteSpeed = 40,
    pauseTime = 2000,
  }) => {
    const [value, setValue] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      let timeout;

      // TYPING
      if (!isDeleting && index < text.length) {
        setIsPaused(false);
        timeout = setTimeout(() => {
          setValue((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
      }

      // PAUSE AFTER TYPING
      else if (!isDeleting && index === text.length) {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseTime);
      }

      // DELETING
      else if (isDeleting && index > 0) {
        setIsPaused(false);
        timeout = setTimeout(() => {
          setValue((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, deleteSpeed);
      }

      // RESTART
      else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }

      return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, deleteSpeed, pauseTime]);

    return (
      <span className="inline-flex items-center font-mono">
        <span>{value}</span>

        {/* Cursor */}
        <span
          className={`ml-[1px] w-[2px] h-4 bg-accent rounded-sm
          ${isPaused ? "animate-blink" : ""}`}
        />
      </span>
    );
  };


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-primary/5 blur-3xl" />

      {/* Code pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A1628' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full">
                <Code2 className="w-4 h-4" />
                Full-Stack Development Agency
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-balance mb-6 leading-[1.1] text-4xl sm:text-5xl lg:text-6xl">
                We Build{" "}
                <span className="relative">
                  Digital Solutions
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8.5C50 2.5 150 2.5 198 8.5"
                      stroke="hsl(var(--accent))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                That Drive Growth
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Expert WordPress, React, Next.js, Node.js & PHP development.
                From stunning websites to powerful web applications — we turn
                your ideas into reality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="hero-secondary" size="xl">
                  <Play className="mr-2 w-5 h-5" />
                  View Our Work
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {["★", "★", "★", "★", "★"].map((star, i) => (
                    <span key={i} className="text-accent text-lg">
                      {star}
                    </span>
                  ))}
                </div>
                <span>
                  <strong className="text-foreground">150+</strong> Projects
                  Delivered
                  <span className="mx-2">•</span>
                  <strong className="text-foreground">50+</strong> Happy Clients
                </span>
              </div>
            </AnimatedSection>
          </div>



          <AnimatedSection delay={200} animation="slide-in-right" className="hidden lg:block">
            <div className="relative lg:pl-8">
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl shadow-float p-6 border border-border/50">
                {/* Code Editor Preview */}
                <div className="aspect-[4/3] bg-primary rounded-xl overflow-hidden">
                  <div className="p-4 space-y-3">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="text-xs text-primary-foreground/50 font-mono">
                        index.tsx
                      </div>
                    </div>

                    {/* Code Block */}
                    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-lg">
                      <div className="space-y-1 font-mono text-xs leading-relaxed">

                        {/* Line 1 */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">1</span>
                          <span className="text-blue-400">import</span>
                          <span className="text-white/70 ml-1">{`{ useState }`}</span>
                          <span className="text-blue-400 ml-1">from</span>
                          <span className="text-green-400 ml-1">'react'</span>
                        </div>

                        {/* Line 2 */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">2</span>
                        </div>

                        {/* Line 3 */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">3</span>
                          <span className="text-purple-400">const</span>
                          <span className="text-yellow-300 ml-1">YourDream</span>
                          <span className="text-white/70 ml-1">=</span>
                          <span className="text-white/70 ml-1">{`() => {`}</span>
                        </div>

                        {/* Line 4 */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">4</span>
                          <span className="ml-6 text-white/70">return</span>
                          <span className="text-white/70 ml-1">{`<`}</span>

                          <span className="text-accent font-semibold">
                            <TypingText text="StacklynSolutions" speed={70} />
                          </span>

                          <span className="text-white/70">{` />`}</span>
                        </div>

                        {/* Line 5 – marketing clarity */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">5</span>
                          <span className="ml-6 text-green-400">
                            {"// scalable • secure • high-performance products"}
                          </span>
                        </div>

                        {/* Line 6 */}
                        <div className="flex">
                          <span className="w-6 text-right pr-2 text-white/20">6</span>
                          <span className="text-white/70">{`}`}</span>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute top-20 -right-4 bg-card rounded-xl shadow-elevated p-3 border border-border/50 animate-float">
                <div className="flex items-center gap-2">
                  <img src={ReactJS} alt="React" className="w-8 h-8" />
                  <span className="text-sm font-medium">React</span>
                </div>
              </div>

              <div className="absolute top-1/4 -left-12 bg-card rounded-xl shadow-elevated p-3 border border-border/50 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <img src={WordPress} alt="WordPress" className="w-8 h-8" />
                  <span className="text-sm font-medium">WordPress</span>
                </div>
              </div>

              <div className="absolute bottom-9 -left-4 bg-card rounded-xl shadow-elevated p-3 border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <img src={NodeJS} alt="Node.js" className="w-8 h-8" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
              </div>

              <div className="absolute bottom-14 -right-4 bg-card rounded-xl shadow-elevated p-3 border border-border/50 animate-float hidden sm:flex" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <img src={NextJS} alt="Next.js" className="w-8 h-8" />
                  <span className="text-sm font-medium">Next.js</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
