
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Users, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background shapes */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gdg-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gdg-red/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gdg-green/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <FadeIn delay={100}>
            <span className="inline-block bg-gdg-blue/10 text-gdg-blue rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Google Developer Groups
            </span>
          </FadeIn>
          
          <FadeIn delay={200} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight md:leading-tight text-balance">
              Connect. Learn. Grow.<br />
              <span className="text-gdg-blue">Together.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300} className="mb-10">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Join our vibrant community of developers, designers, and innovators who share a passion for technology and building amazing things.
            </p>
          </FadeIn>
          
          <FadeIn delay={400} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gdg-blue hover:bg-gdg-blue/90 text-white px-8">
              Join Our Community
            </Button>
            <Button size="lg" variant="outline" className="border-gdg-blue text-gdg-blue hover:bg-gdg-blue/10">
              Explore Events
            </Button>
          </FadeIn>
          
          <FadeIn delay={500}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6 shadow-subtle transition-all hover:shadow-card duration-300">
                <div className="bg-gdg-blue/10 text-gdg-blue rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Code size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Technical Workshops</h3>
                <p className="text-muted-foreground text-sm">Hands-on sessions to enhance your skills across Google technologies</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 shadow-subtle transition-all hover:shadow-card duration-300">
                <div className="bg-gdg-red/10 text-gdg-red rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Users size={24} className="text-gdg-red" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Networking</h3>
                <p className="text-muted-foreground text-sm">Connect with passionate developers and industry professionals</p>
              </div>
              
              <div className="glass-card rounded-xl p-6 shadow-subtle transition-all hover:shadow-card duration-300">
                <div className="bg-gdg-green/10 text-gdg-green rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Calendar size={24} className="text-gdg-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Regular Events</h3>
                <p className="text-muted-foreground text-sm">Dive into trending tech topics with expert-led sessions</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
