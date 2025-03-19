
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const events = [
  {
    id: 1,
    title: "Flutter Forward Extended",
    date: "June 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub Downtown",
    attendees: 120,
    category: "Workshop",
    color: "bg-gdg-blue",
    description: "Join us for a deep dive into Flutter's latest features. Learn how to build beautiful, responsive apps that work across multiple platforms."
  },
  {
    id: 2,
    title: "Machine Learning Study Jam",
    date: "June 22, 2023",
    time: "6:00 PM - 8:30 PM",
    location: "Innovation Center",
    attendees: 85,
    category: "Study Group",
    color: "bg-gdg-red",
    description: "A collaborative learning session focused on practical ML applications. Perfect for beginners and those looking to enhance their skills."
  },
  {
    id: 3,
    title: "Cloud Next Extended",
    date: "July 8, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Center",
    attendees: 200,
    category: "Conference",
    color: "bg-gdg-green",
    description: "Experience the highlights of Google Cloud Next with local experts. Discover the latest in cloud technology and networking opportunities."
  }
];

const Events = () => {
  return (
    <section id="events" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-gdg-blue/10 text-gdg-blue rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Upcoming Events
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our Next Events
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our upcoming workshops, conferences, and meetups. Be part of the learning and networking opportunities.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <FadeIn 
              key={event.id} 
              delay={100 * (index + 1)}
              className="glass-card rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col"
            >
              <div className={`${event.color} px-4 py-2 text-white flex justify-between items-center`}>
                <span className="text-sm font-medium">{event.category}</span>
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                  {event.attendees} attendees
                </span>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gdg-blue mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gdg-red mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gdg-green mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <Button className="w-full bg-gdg-dark hover:bg-black">
                  Register Now
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn className="text-center">
          <Button variant="outline" className="border-gdg-blue text-gdg-blue hover:bg-gdg-blue/10">
            View All Events
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Events;
