
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';

const testimonials = [
  {
    id: 1,
    content: "Being part of GDG has transformed my career. The workshops and networking opportunities helped me land my dream job at a tech giant. The community is incredibly supportive and always willing to help.",
    author: "Sarah Johnson",
    role: "Senior Android Developer",
    avatar: "SJ"
  },
  {
    id: 2,
    content: "GDG events are where I've learned the most practical skills. The hands-on workshops and real-world projects gave me confidence to start my own tech company. I've met co-founders and mentors through this amazing community.",
    author: "Michael Chen",
    role: "Startup Founder & Web Developer",
    avatar: "MC"
  },
  {
    id: 3,
    content: "As someone transitioning into tech, GDG provided a welcoming space to learn and grow. The community made complex topics accessible and gave me mentorship that was instrumental in my career change.",
    author: "Priya Sharma",
    role: "Cloud Engineer",
    avatar: "PS"
  },
  {
    id: 4,
    content: "The connections I've made through GDG have been invaluable. Beyond technical skills, I've found mentors and friends who've supported my journey in tech. The diversity of perspectives has enriched my work.",
    author: "David Martinez",
    role: "UX Designer & Frontend Developer",
    avatar: "DM"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-gdg-red/10 text-gdg-red rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Testimonials
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Hear From Our Community Members
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover how GDG has impacted the lives and careers of developers in our community.
          </p>
        </FadeIn>
        
        <div className="relative">
          {/* Main testimonial */}
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <svg 
                  className="w-10 h-10 text-gdg-blue/30 mb-4" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                
                <p className="text-lg md:text-xl mb-6 text-balance">
                  {testimonials[activeIndex].content}
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gdg-blue text-white">
                      {testimonials[activeIndex].avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-gdg-blue/20 text-gdg-blue hover:bg-gdg-blue/10"
                onClick={prevTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-gdg-blue/20 text-gdg-blue hover:bg-gdg-blue/10"
                onClick={nextTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Testimonial indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-gdg-blue w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gdg-yellow/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gdg-blue/10 rounded-full blur-3xl opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
