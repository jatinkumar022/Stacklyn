"use client";

import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ExternalLink } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { caelvi, caelviPreview, carido, caridoPreview, exptra, exptraPreview, nexura, nexuraPreview } from "@/assets/project";
const projects = [
  {
    title: "Caelvi — Luxury Jewellery E-Commerce Platform",
    category: "Next.js · E-Commerce · Luxury UI",
    description:
      "A high-end jewellery e-commerce platform featuring curated collections, premium visuals, smooth navigation, and a conversion-focused luxury shopping experience.",
    image: caelvi,
    url: "https://caelvi.com",
    previewImage: caelviPreview,
  },
  {
    title: "Carido — Smart Car Rental Platform",
    category: "Next.js · Booking System",
    description:
      "A modern car rental web app with seamless vehicle browsing, intuitive booking flow, and a clean UI designed for speed and usability.",
    image: carido,
    url: "https://car-rental-tau-wheat.vercel.app/",
    previewImage: caridoPreview,
  },
  {
    title: "Nexura — Footwear E-Commerce Experience",
    category: "React.js · Firebase · E-Commerce",
    description:
      "A fast and responsive footwear e-commerce website with real-time data, smooth product browsing, and a scalable frontend architecture.",
    image: nexura,
    url: "https://nexura-shoes.vercel.app/",
    previewImage: nexuraPreview,
  },
  {
    title: "Finance Insight — Personal Finance Tracking Dashboard",
    category: "React.js · Tailwind CSS · Web App",
    description:
      "A personal finance dashboard that helps users track income and expenses, visualize spending patterns, and gain clear financial insights through a clean, intuitive interface.",
    image: exptra,
    url: "https://finance-insight-psi.vercel.app/",
    previewImage: exptraPreview,
  },
];


export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Our Work
            </span>
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects showcasing our expertise across modern
              technologies and industries.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 120}>
              <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elevated">

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating link icon */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Link Preview on title */}
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    <LinkPreview
                      url={project.url}
                      imageSrc={project.previewImage}
                      isStatic
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {project.title}
                    </LinkPreview>
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer CTA */}
        <AnimatedSection delay={500}>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
