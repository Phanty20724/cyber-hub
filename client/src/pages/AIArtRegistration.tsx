import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const AIArtRegistration = () => {
  return (
    <>
      <SEO 
        title="AI Art Competition 2026 Registration | SCPSC Cyber Hub"
        description="Register for the SCPSC Cyber Hub AI Art Competition 2026. Unleash your creativity with AI and compete for exciting prizes."
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/events" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-display text-sm text-primary uppercase tracking-wider">
                Now Registering
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary text-glow-cyan">AI ART</span>
              <br />
              <span className="text-foreground">COMPETITION 2026</span>
            </h1>

            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Ready to redefine the boundaries of creativity? Join our first-ever AI Art Competition and showcase your imagination.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8">
              <img 
                src="/ai-art-competition.png" 
                alt="AI Art Competition" 
                className="w-full h-auto rounded-2xl border border-primary/30 shadow-2xl shadow-primary/20"
              />
              
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Competition Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Date</p>
                      <p className="font-medium">January 30, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Time</p>
                      <p className="font-medium">10:00 AM - 06:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Venue</p>
                      <p className="font-medium">Online</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <GlassCard className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-4 uppercase tracking-widest">Registration Opening Soon</h2>
                <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
                  The portal for AI Art Competition 2026 is currently being prepared. Check back shortly to secure your spot!
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

export default AIArtRegistration;