
import React from 'react';
import { Code, Users, Calendar, Globe, Lightbulb, GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';

const benefits = [
  {
    icon: <Code className="h-6 w-6 text-gdg-blue" />,
    title: "Hands-on Learning",
    description: "Participate in workshops and codelabs to gain practical experience with the latest technologies.",
    color: "bg-gdg-blue/10",
    iconColor: "text-gdg-blue"
  },
  {
    icon: <Users className="h-6 w-6 text-gdg-red" />,
    title: "Networking",
    description: "Connect with like-minded developers, designers, and technology enthusiasts in your community.",
    color: "bg-gdg-red/10",
    iconColor: "text-gdg-red"
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-gdg-yellow" />,
    title: "Innovation",
    description: "Stay at the forefront of emerging technologies and innovative solutions.",
    color: "bg-gdg-yellow/10",
    iconColor: "text-gdg-yellow"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-gdg-green" />,
    title: "Career Growth",
    description: "Enhance your skills and knowledge to advance your career in technology.",
    color: "bg-gdg-green/10",
    iconColor: "text-gdg-green"
  },
  {
    icon: <Globe className="h-6 w-6 text-gdg-blue" />,
    title: "Global Community",
    description: "Be part of a worldwide network of developers sharing knowledge and best practices.",
    color: "bg-gdg-blue/10",
    iconColor: "text-gdg-blue"
  },
  {
    icon: <Calendar className="h-6 w-6 text-gdg-red" />,
    title: "Exclusive Events",
    description: "Get access to special events, including annual DevFests and Google I/O Extended.",
    color: "bg-gdg-red/10",
    iconColor: "text-gdg-red"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-gdg-green/10 text-gdg-green rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Why Join Us
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Benefits of Being Part of GDG
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Joining our Google Developer Group provides you with numerous advantages to enhance your technical skills, expand your network, and accelerate your career growth.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <FadeIn 
              key={index} 
              delay={100 * (index + 1)} 
              className="glass-card rounded-xl p-8 shadow-subtle transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <div className={`${benefit.color} rounded-xl w-12 h-12 flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
