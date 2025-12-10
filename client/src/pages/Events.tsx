import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";

const Events = () => {
  const upcomingEvents = [
    {
      title: "SCPSC CODE JAM 2025",
      date: "Jan 15-17, 2025",
      time: "48 Hours",
      location: "SCPSC Campus",
      attendees: "100+",
      description: "Our flagship coding competition. Build, innovate, and compete for exciting prizes.",
      type: "Competition",
      featured: true,
    },
    {
      title: "WEB DEV WORKSHOP: React Fundamentals",
      date: "Jan 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Lab",
      attendees: "50",
      description: "Learn React from scratch and build your first interactive web application.",
      type: "Workshop",
      featured: false,
    },
    {
      title: "AI/ML BOOTCAMP",
      date: "Feb 01, 2025",
      time: "Full Day",
      location: "Online",
      attendees: "80+",
      description: "Hands-on machine learning bootcamp covering Python, TensorFlow, and real-world projects.",
      type: "Workshop",
      featured: false,
    },
    {
      title: "GRAPHICS DESIGN MASTERCLASS",
      date: "Feb 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Design Studio",
      attendees: "40",
      description: "Master Adobe Photoshop and Illustrator with industry-standard design techniques.",
      type: "Workshop",
      featured: false,
    },
  ];

  const pastEvents = [
    { title: "Video Editing Workshop", date: "Dec 2024", attendees: "45" },
    { title: "Competitive Programming 101", date: "Nov 2024", attendees: "60" },
    { title: "Web Development Bootcamp", date: "Oct 2024", attendees: "55" },
    { title: "AI/ML Introduction", date: "Sep 2024", attendees: "50" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="EVENT MATRIX"
          subtitle="Immerse yourself in workshops, hackathons, and tech talks"
        />

        {/* Featured Event */}
        {upcomingEvents.filter((e) => e.featured).map((event) => (
          <div key={event.title} className="mb-16">
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

                  <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary text-glow-cyan mb-3 md:mb-4">
                    {event.title}
                  </h2>

                  <p className="text-foreground font-body text-sm md:text-lg mb-4 md:mb-6">
                    {event.description}
                  </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm md:text-base">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm md:text-base">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm md:text-base">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm md:text-base">{event.attendees} Expected</span>
                    </div>
                  </div>

                  <CyberButton variant="primary" size="lg">
                    Register Now
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </CyberButton>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}

        {/* Upcoming Events Grid */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            <span className="text-secondary text-glow-violet">UPCOMING</span> EVENTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter((e) => !e.featured).map((event, index) => (
              <GlassCard
                key={event.title}
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
                  <span className="text-sm text-muted-foreground font-body">
                    {event.attendees} spots
                  </span>
                </div>

                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h4>

                <p className="text-muted-foreground font-body text-sm mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <CyberButton variant="outline" size="sm" className="w-full">
                  Learn More
                </CyberButton>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            <span className="text-primary text-glow-cyan">ARCHIVE</span> — Past Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastEvents.map((event, index) => (
              <GlassCard key={event.title} hover3D={false} className="opacity-70 hover:opacity-100 transition-opacity">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {event.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.attendees} attended</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
