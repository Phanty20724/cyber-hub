import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Award, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import SectionTitle from '@/components/SectionTitle';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const CERTIFICATE_DATA = [
  { name: "Zahin Islam", id: "3s233jksdu3nas31a1qw", achievement: "Portfoliathon Champion" },
  { name: "Daiyan Rahman", id: "k8j2n4m1p9o0l3k2j1h5", achievement: "1st Runner Up" },
  { name: "Mustafa Shahadat Bhuiyan", id: "a1b2c3d4e5f6g7h8i9j0", achievement: "2nd Runner Up" },
  { name: "Muhammad Assad Ullah", id: "z9y8x7w6v5u4t3s2r1q0", achievement: "Certificate of Achievement" },
  { name: "Abrar Tahir", id: "m1n2b3v4c5x6z7l8k9j0", achievement: "Certificate of Achievement" },
  { name: "Aaliyan Adnan", id: "p1o2i3u4y5t6r7e8w9q0", achievement: "Certificate of Achievement" },
  { name: "Ridika Faria", id: "q1w2e3r4t5y6u7i8o9p0", achievement: "Certificate of Achievement" },
  { name: "Muzamil Khan", id: "a0s9d8f7g6h5j4k3l2m1", achievement: "Certificate of Achievement" },
  { name: "Isfar Nur", id: "z1x2c3v4b5n6m7q8w9e0", achievement: "Certificate of Achievement" },
  { name: "Md. Maheeb Hossain", id: "r0t9y8u7i6o5p4a3s2d1", achievement: "Certificate of Achievement" },
  { name: "Badal Singh", id: "f1g2h3j4k5l6z7x8c9v0", achievement: "Certificate of Participation" },
  { name: "Sandeep Kumar Behera", id: "f1g2h3j4k5l6z7x8c9v3", achievement: "Certificate of Participation" }
];

const CertificateSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredResults = searchQuery.length > 0 
    ? CERTIFICATE_DATA.filter(cert => 
        cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.achievement.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <SEO 
        title="Find Certificate | Cyber Hub"
        description="Search and verify Cyber Hub certificates by recipient name."
      />
      
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Certificate Directory" 
          subtitle="Search and verify digital credentials issued by Cyber Hub"
        />

        <div className="mt-12 relative max-w-2xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
            <Input 
              type="text"
              placeholder="Enter student name to find certificate..."
              className="h-14 pl-12 bg-white/5 border-white/10 focus:border-primary/50 text-lg transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {searchQuery.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-4 z-50">
              <GlassCard className="p-2 border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {filteredResults.length > 0 ? (
                  <div className="divide-y divide-white/5">
                    {filteredResults.map((cert) => (
                      <Link 
                        key={cert.id} 
                        to={`/verify/${cert.id}`}
                        className="flex items-center justify-between p-4 hover:bg-primary/10 rounded-lg transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.name}</p>
                            <p className="text-xs text-foreground/40 font-mono uppercase tracking-tighter">{cert.achievement}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-foreground/40">
                    No certificates found for "{searchQuery}"
                  </div>
                )}
              </GlassCard>
            </div>
          )}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-white/5 hover:border-primary/20 transition-all text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold font-rajdhani uppercase tracking-widest text-foreground mb-2">Secure Verification</h3>
            <p className="text-sm text-foreground/40">Every digital credential is uniquely signed and stored in our global registry.</p>
          </GlassCard>

          <GlassCard className="p-6 border-white/5 hover:border-primary/20 transition-all text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold font-rajdhani uppercase tracking-widest text-foreground mb-2">Official Recognition</h3>
            <p className="text-sm text-foreground/40">Certified technical excellence recognized by leading industry partners.</p>
          </GlassCard>

          <GlassCard className="p-6 border-white/5 hover:border-primary/20 transition-all text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold font-rajdhani uppercase tracking-widest text-foreground mb-2">Instant Sharing</h3>
            <p className="text-sm text-foreground/40">Share your achievements directly to LinkedIn or other professional networks.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default CertificateSearch;