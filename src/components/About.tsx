
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Users, Code } from 'lucide-react';
import FadeIn from './FadeIn';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="left">
              <span className="inline-block bg-gdg-yellow/10 text-gdg-dark rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                About GDG
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gdg-dark">
                Who We Are & What We Do
              </h2>
              
              <p className="text-muted-foreground mb-6 text-balance">
                Google Developer Groups (GDGs) are community-led tech groups for developers interested in Google's technologies - from Android, Web, to Cloud, AI, and more. Our mission is to create a vibrant, inclusive community where developers can collaborate, learn, and grow together.
              </p>
              
              <p className="text-muted-foreground mb-6 text-balance">
                We organize workshops, tech talks, hackathons, and social events throughout the year, fostering an environment of learning and innovation. Whether you're a beginner or an expert, GDG welcomes all who are passionate about technology.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-gdg-blue/10 text-gdg-blue rounded-full w-8 h-8 flex items-center justify-center">
                    <Globe size={16} />
                  </div>
                  <span className="text-sm font-medium">Global Network</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-gdg-red/10 text-gdg-red rounded-full w-8 h-8 flex items-center justify-center">
                    <Users size={16} className="text-gdg-red" />
                  </div>
                  <span className="text-sm font-medium">Diverse Community</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-gdg-green/10 text-gdg-green rounded-full w-8 h-8 flex items-center justify-center">
                    <Code size={16} className="text-gdg-green" />
                  </div>
                  <span className="text-sm font-medium">Technical Excellence</span>
                </div>
              </div>
              
              <Button className="bg-gdg-blue hover:bg-gdg-blue/90 text-white">
                Learn More About Us
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn direction="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              {/* Main image with grid overlay */}
              <div className="aspect-video bg-gradient-to-tr from-gdg-blue/20 to-gdg-red/10 rounded-2xl relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSIgZD0iTTM2IDM0aDN2M2gtM3ptMC0xN2gzdjNoLTN6TTUxIDM0aDN2M2gtM3ptMC0xN2gzdjNoLTN6TTYgMzRoM3YzSDZ6bTAtMTdoM3YzSDZ6bTE1IDE3aDN2M2gtM3ptMC0xN2gzdjNoLTN6Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                
                {/* Content/placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="bg-gdg-blue rounded-full w-10 h-10 flex items-center justify-center">
                        <Globe size={20} className="text-white" />
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white text-shadow-sm">
                      GDG Community Worldwide
                    </h3>
                    <p className="text-white/80 max-w-sm mx-auto mt-2 text-shadow-sm">
                      Connecting developers across the globe through technology
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 glass-card shadow-card rounded-xl p-4 max-w-[240px]">
                <h4 className="font-semibold text-sm text-gdg-dark mb-2">Global Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-gdg-blue">150+</p>
                    <p className="text-xs text-muted-foreground">Countries</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gdg-red">1000+</p>
                    <p className="text-xs text-muted-foreground">Chapters</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 bg-gdg-yellow rounded-lg h-16 w-16 rotate-12 shadow-lg"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
