import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight, Trophy, Target, Zap } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import CyberButton from "@/components/CyberButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Portfoliathon = () => {
  return (
    <>
      <SEO 
        title="PORTFOLIATHON INTRA 1.0 - 72 Hours Hackathon | SCPSC Cyber Hub"
        description="Join PORTFOLIATHON INTRA 1.0, a 72-hour hackathon from Dec 21-24, 2025. Build your portfolio, innovate, and compete for exciting prizes on Devpost."
        keywords="PORTFOLIATHON, hackathon, portfolio competition, Devpost, coding competition, 72 hours hackathon, SCPSC"
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="font-display text-sm text-primary uppercase tracking-wider">
                  Featured Hackathon
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-primary text-glow-cyan">PORTFOLIATHON</span>
                <br />
                <span className="text-foreground">INTRA 1.0</span>
              </h1>

              <p className="text-xl text-muted-foreground font-body mb-8 max-w-xl">
                Our flagship portfolio competition. Build, innovate, and compete for exciting prizes in this 72-hour hackathon adventure.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-body">Dec 21-24, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-body">72 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-body">Devpost</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-body">100+ Expected</span>
                </div>
              </div>

              <a href="https://devpost.com" target="_blank" rel="noopener noreferrer">
                <CyberButton variant="primary" size="lg">
                  Register on Devpost
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </CyberButton>
              </a>
            </div>

            <div className="lg:w-96">
              <img 
                src="/portfoliathon.jpg" 
                alt="PORTFOLIATHON INTRA 1.0" 
                className="w-full h-auto rounded-2xl border border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <GlassCard hover3D glowColor="cyan">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Exciting Prizes
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Compete for amazing prizes and recognition. Top projects will be featured and rewarded.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="violet">
              <Target className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Build Your Portfolio
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Create impressive projects that showcase your skills and boost your professional portfolio.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="cyan">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                72 Hours of Innovation
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Push your limits in an intense 72-hour coding marathon. Learn, build, and grow together.
              </p>
            </GlassCard>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-primary text-glow-cyan">Register</span> Now
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Fill out the form below to register for PORTFOLIATHON INTRA 1.0
              </p>
            </div>
            <div className="glass rounded-2xl border border-primary/30 p-4 md:p-8 max-w-3xl mx-auto">
              <div className="relative w-full overflow-hidden rounded-xl bg-white">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdoE8X_E2Fsmxw9q9IwUZnk2eJo0_KTXZ535QEzixbvO-seJQ/viewform?embedded=true" 
                  width="100%" 
                  height="2573" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full"
                  title="PORTFOLIATHON INTRA 1.0 Registration Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          <GlassCard className="text-center py-12 px-8 mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to <span className="text-primary text-glow-cyan">Compete</span>?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Don't miss this opportunity to showcase your skills, learn from peers, and win exciting prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <CyberButton variant="outline" size="lg">
                  View All Events
                </CyberButton>
              </Link>
            </div>
          </GlassCard>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfoliathon;
