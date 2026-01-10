import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";
import SEO from "@/components/SEO";
import INITIAL_EVENTS from "@/data/events";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string | null;
  location: string | null;
  attendees: string | null;
  description: string | null;
  type: string;
  status: string;
  featured: boolean;
  image?: string;
}

const Events = () => {
  const events = INITIAL_EVENTS;
  const isLoading = false;

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "archive");
  const featuredEvents = upcomingEvents.filter((e) => e.featured);
  const nonFeaturedUpcoming = upcomingEvents.filter((e) => !e.featured);

  return (
    <>
      <SEO 
        title="SCPSC Cyber Hub Events - Hackathons, Workshops & Tech Talks"
        description="Explore PORTFOLIATHON INTRA 1.0, React workshops, AI/ML bootcamps, and graphics design masterclasses. Join 50+ workshops and tech events. Free registration for students."
        keywords="SCPSC events, PORTFOLIATHON hackathon, web development workshop, AI ML bootcamp, graphics design masterclass, tech talks Bangladesh, coding competition, free tech events"
      />
      <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="EVENT MATRIX"
          subtitle="Immerse yourself in workshops, hackathons, and tech talks"
        />

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        )}

        {featuredEvents.map((event) => (
          <div key={event.id} className="mb-16">
            <GlassCard className="relative overflow-hidden border-primary/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    <span className="font-display text-xs text-primary uppercase tracking-wider">
                      Featured Event
                    </span>
                  </div>

                  <Link to={event.id === 0 ? "/ai-art-registration" : "/portfoliathon"}>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary text-glow-cyan mb-3 md:mb-4 hover:text-primary/80 transition-colors cursor-pointer">
                      {event.title}
                    </h2>
                  </Link>

                  <p className="text-foreground font-body text-sm md:text-lg mb-4 md:mb-6">
                    {event.description}
                  </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm md:text-base">{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-body text-sm md:text-base">{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-body text-sm md:text-base">{event.location}</span>
                      </div>
                    )}
                    {event.attendees && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-body text-sm md:text-base">{event.attendees} Expected</span>
                      </div>
                    )}
                  </div>

                  <Link to={event.id === 0 ? "/ai-art-registration" : "/portfoliathon"}>
                    <CyberButton variant="primary" size="lg">
                      Register Now
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </CyberButton>
                  </Link>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <Link to={event.id === 0 ? "/ai-art-registration" : "/portfoliathon"}>
                    <img 
                      src={event.image || "/portfoliathon.jpg"} 
                      alt={event.title} 
                      className="w-full h-auto rounded-xl border border-primary/30 shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}

        {nonFeaturedUpcoming.length > 0 && (
          <div className="mb-20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              <span className="text-secondary text-glow-violet">UPCOMING</span> EVENTS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonFeaturedUpcoming.map((event, index) => (
                <GlassCard
                  key={event.id}
                  hover3D
                  glowColor={index % 2 === 0 ? "cyan" : "violet"}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-display uppercase ${
                        event.type === "Competition"
                          ? "bg-primary/20 text-primary"
                          : event.type === "Workshop"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                    {event.attendees && (
                      <span className="text-sm text-muted-foreground font-body">
                        {event.attendees} spots
                      </span>
                    )}
                  </div>

                  <Link to={event.id === 0 ? "/ai-art-registration" : "/portfoliathon"}>
                    <h4 className="font-display text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                      {event.title}
                    </h4>
                  </Link>

                  <p className="text-muted-foreground font-body text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  <CyberButton variant="outline" size="sm" className="w-full">
                    Learn More
                  </CyberButton>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              <span className="text-primary text-glow-cyan">ARCHIVE</span> — Past Events
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <GlassCard key={event.id} hover3D glowColor={index % 2 === 0 ? "cyan" : "violet"}>
                  <Link to="/portfoliathon" className="block">
                    <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-white/10">
                      <img 
                        src={event.image || "/portfoliathon.jpg"} 
                        alt={event.title} 
                        className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </Link>
                  <Link to="/portfoliathon">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {event.title}
                    </h4>
                  </Link>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    {event.attendees && <span>{event.attendees} attended</span>}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Events;
