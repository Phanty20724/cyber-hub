import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ShieldCheck, Loader2, Download, Share2, Award, Calendar, User, BookOpen } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import SectionTitle from '@/components/SectionTitle';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface CertificateData {
  name: string;
  id: string;
  date: string;
  achievement: string;
  type: 'Winner' | 'Runner Up' | 'Participation';
  skills: string[];
}

const CERTIFICATE_DATA: Record<string, CertificateData> = {
  "3s233jksdu3nas31a1qw": {
    name: "Zahin Islam",
    id: "3s233jksdu3nas31a1qw",
    date: "December 1, 2024",
    achievement: "Portfoliathon Champion",
    type: "Winner",
    skills: ["Web Development", "UI/UX Design", "Project Management", "Technical Presentation"]
  },
  "k8j2n4m1p9o0l3k2j1h5": {
    name: "Daiyan Rahman",
    id: "k8j2n4m1p9o0l3k2j1h5",
    date: "December 1, 2024",
    achievement: "1st Runner Up",
    type: "Winner",
    skills: ["Full Stack Development", "Problem Solving", "Frontend Optimization", "React.js"]
  },
  "a1b2c3d4e5f6g7h8i9j0": {
    name: "Mustafa Shahadat Bhuiyan",
    id: "a1b2c3d4e5f6g7h8i9j0",
    date: "December 1, 2024",
    achievement: "2nd Runner Up",
    type: "Winner",
    skills: ["UI/UX Design", "Responsive Web Design", "Typography", "Color Theory"]
  },
  "z9y8x7w6v5u4t3s2r1q0": {
    name: "Muhammad Assad Ullah",
    id: "z9y8x7w6v5u4t3s2r1q0",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Web Development", "Backend Logic", "API Integration"]
  },
  "m1n2b3v4c5x6z7l8k9j0": {
    name: "Abrar Tahir",
    id: "m1n2b3v4c5x6z7l8k9j0",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Frontend Engineering", "CSS Frameworks", "JavaScript"]
  },
  "p1o2i3u4y5t6r7e8w9q0": {
    name: "Aaliyan Adnan",
    id: "p1o2i3u4y5t6r7e8w9q0",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Web Design", "Visual Communication", "Technical Writing"]
  },
  "q1w2e3r4t5y6u7i8o9p0": {
    name: "Ridika Faria",
    id: "q1w2e3r4t5y6u7i8o9p0",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Frontend Development", "Creative Direction", "Presentation"]
  },
  "a0s9d8f7g6h5j4k3l2m1": {
    name: "Muzamil Khan",
    id: "a0s9d8f7g6h5j4k3l2m1",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Web Development", "UI Animation", "Layout Design"]
  },
  "z1x2c3v4b5n6m7q8w9e0": {
    name: "Isfar Nur",
    id: "z1x2c3v4b5n6m7q8w9e0",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Application Development", "Database Management", "Security"]
  },
  "r0t9y8u7i6o5p4a3s2d1": {
    name: "Md. Maheeb Hossain",
    id: "r0t9y8u7i6o5p4a3s2d1",
    date: "December 1, 2024",
    achievement: "Certificate of Achievement",
    type: "Winner",
    skills: ["Web Programming", "State Management", "Version Control"]
  },
  "f1g2h3j4k5l6z7x8c9v0": {
    name: "Badal Singh",
    id: "f1g2h3j4k5l6z7x8c9v0",
    date: "December 1, 2024",
    achievement: "Certificate of Participation",
    type: "Participation",
    skills: ["Web Development Basics", "HTML/CSS", "Community Engagement"]
  },
  "f1g2h3j4k5l6z7x8c9v3": {
    name: "Sandeep Kumar Behera",
    id: "f1g2h3j4k5l6z7x8c9v3",
    date: "December 1, 2024",
    achievement: "Certificate of Participation",
    type: "Participation",
    skills: ["Web Development Basics", "Frontend Foundations", "Innovation"]
  }
};

const Verification = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (id && CERTIFICATE_DATA[id]) {
        setData(CERTIFICATE_DATA[id]);
      }
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [id]);

  const handleDownload = () => {
    if (id) {
      const link = document.createElement('a');
      link.href = `/certificates/${id}.png`;
      link.download = `Certificate_${data?.name.replace(/\s+/g, '_')}_CyberHub.png`;
      link.click();
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <SEO 
        title={data ? `${data.name} - Certificate Verification` : "Certificate Verification"}
        description={data ? `Verified Certificate of ${data.achievement} for ${data.name} from SCPSC Cyber Hub.` : "Verify the authenticity of Cyber Hub certificates and credentials."}
        image={id ? `/certificates/${id}.png` : undefined}
      />
      
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-foreground/40 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-primary transition-colors">Cyber Hub</Link>
          <span>/</span>
          <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
          <span>/</span>
          <Link to="/portfoliathon" className="hover:text-primary transition-colors">Portfoliathon 1.0</Link>
          <span>/</span>
          <span className="text-foreground/70">Certificate Verification</span>
        </nav>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 min-h-[50vh]">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-xl font-medium text-foreground/80 font-rajdhani uppercase tracking-widest">Validating Digital Credential...</p>
          </div>
        ) : data ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Info */}
            <div className="lg:col-span-5 space-y-6">
              <h1 className="text-4xl font-bold font-rajdhani text-foreground leading-tight">
                {data.achievement}
              </h1>

              <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xl font-bold font-rajdhani text-foreground uppercase tracking-wide">
                      {data.name}
                    </p>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-sm text-foreground/60 mb-2">Verified Recipient</p>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    Cyber Hub certifies their successful completion and outstanding performance in the 
                    <span className="text-primary font-medium"> INTRA PORTFOLIATHON 1.0</span> hackathon.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Issue Date</span>
                  </div>
                  <span className="text-sm font-medium">{data.date}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">Category</span>
                  </div>
                  <Badge variant="outline" className="border-primary/50 text-primary uppercase text-[10px] tracking-tighter">
                    {data.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">Issuer</span>
                  </div>
                  <span className="text-sm font-medium">SCPSC Cyber Hub</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold font-rajdhani uppercase tracking-widest text-primary">Skills Verified</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-foreground/80 border-white/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button onClick={handleDownload} className="flex-1 gap-2 cyber-button h-12">
                  <Download className="h-4 w-4" />
                  Download PNG
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2 border-white/10 hover:bg-white/5 h-12"
                  onClick={() => {
                    const shareUrl = `${window.location.origin}/verify/${id}`;
                    navigator.clipboard.writeText(shareUrl);
                    alert("Verification link copied to clipboard!");
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  Copy Share Link
                </Button>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="lg:col-span-7">
              <div className="sticky top-28">
                <GlassCard className="overflow-hidden p-0 border-white/10 shadow-2xl group">
                  <div className="aspect-[1.414/1] relative bg-black/40 flex items-center justify-center p-4">
                    <img 
                      src={`/certificates/${id}.png`} 
                      alt={`Certificate for ${data.name}`}
                      className="w-full h-full object-contain shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/certificates/placeholder.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                      <p className="text-white/80 text-sm font-medium flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Digital Credential Protected
                      </p>
                    </div>
                  </div>
                </GlassCard>
                
                <div className="mt-6 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-xs text-foreground/40 font-mono">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Credential ID: {data.id}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/40 font-mono">
                    <ShieldCheck className="h-3 w-3" />
                    Securely Signed
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto py-12">
            <GlassCard className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-destructive/10 p-6 rounded-full border border-destructive/20">
                  <XCircle className="h-16 w-16 text-destructive" />
                </div>
              </div>
              <h2 className="text-3xl font-bold font-rajdhani uppercase tracking-widest text-foreground mb-4">
                Invalid Credential
              </h2>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                The credential ID <span className="font-mono text-destructive font-bold">{id}</span> could not be verified in our global database. 
                Please ensure the link is correct or contact Cyber Hub administration if you believe this is an error.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild className="h-12 border-white/10 px-8">
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button asChild className="cyber-button h-12 px-8">
                  <Link to="/join">Report Issue</Link>
                </Button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Footer Area */}
        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-foreground/40">
          <div>
            <h4 className="font-bold text-foreground/70 mb-4 uppercase tracking-widest font-rajdhani">Verification Standards</h4>
            <p>Our digital credentials use encrypted signatures to ensure data integrity and prevent unauthorized modifications.</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground/70 mb-4 uppercase tracking-widest font-rajdhani">About Portfoliathon</h4>
            <p>A flagship technical event by SCPSC Cyber Hub focusing on real-world project development and technical excellence.</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground/70 mb-4 uppercase tracking-widest font-rajdhani">Global Registry</h4>
            <p>This credential is part of the SCPSC Cyber Hub official global registry of certified technical professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;