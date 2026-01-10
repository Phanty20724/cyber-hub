import { Calendar, MapPin, Clock, Users, Trophy, Target, Zap, Code2, Sparkles } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Portfoliathon = () => {
  return (
    <>
      <SEO 
        title="PORTFOLIATHON INTRA 1.0 - 72 Hours Hackathon | SCPSC Cyber Hub"
        description="Join PORTFOLIATHON INTRA 1.0, a 72-hour hackathon from Dec 21-24, 2025. Build your portfolio, innovate, and compete for exciting prizes on Devpost."
        keywords="PORTFOLIATHON, hackathon, portfolio competition, Devpost, coding competition, 72 hours hackathon, SCPSC"
        image="https://scpscch.tech/portfoliathon-og.jpg"
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-destructive/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-destructive animate-glow-pulse" />
              <span className="font-display text-sm text-destructive uppercase tracking-wider">
                Event Ended
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-primary text-glow-cyan">PORTFOLIATHON</span>
              <br />
              <span className="text-foreground">INTRA 1.0</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              This event has successfully concluded. Special credits to <span className="text-primary font-bold">Saad Bin Tofayel (President)</span>, <span className="text-primary font-bold">Tanvir Alam Rifat (Program Secretary)</span>, <span className="text-primary font-bold">Ahnaf Hassan Orko (Publicity Secretary)</span>, and all executives and representatives for their exceptional work in conducting this event.
            </p>
          </div>

          {/* Event Poster and Details Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="/portfoliathon-intra.png" 
                alt="PORTFOLIATHON INTRA 1.0" 
                className="w-full h-auto rounded-2xl border border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <GlassCard className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Event Details
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Date</p>
                      <span className="font-body text-foreground font-medium">Dec 21-24, 2025</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Duration</p>
                      <span className="font-body text-foreground font-medium">72 Hours</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Platform</p>
                      <span className="font-body text-foreground font-medium">Devpost</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Participants</p>
                      <span className="font-body text-foreground font-medium">100+ Expected</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Registration Form Section - Removed since event ended */}
          {/* 
          <div className="mb-20">
            ...
          </div> 
          */}

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why <span className="text-primary text-glow-cyan">Participate</span>?
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                More than just a hackathon — it's your launchpad to success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard hover3D glowColor="cyan" className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 mx-auto">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Win Exciting Prizes
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Compete for amazing prizes and recognition. Top projects will be featured and rewarded generously.
                </p>
              </GlassCard>

              <GlassCard hover3D glowColor="violet" className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6 mx-auto">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Build Your Portfolio
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Create impressive projects that showcase your skills and significantly boost your professional portfolio.
                </p>
              </GlassCard>

              <GlassCard hover3D glowColor="cyan" className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  72 Hours of Innovation
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Push your limits in an intense 72-hour coding marathon. Learn, build, and grow alongside talented peers.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfoliathon;
