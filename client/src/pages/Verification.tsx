import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ShieldCheck, Loader2 } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import SectionTitle from '@/components/SectionTitle';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

// Simulated database of valid certificates
const VALID_CERTIFICATES = [
  "3s233jksdu3nas31a1qw",
  "k8j2n4m1p9o0l3k2j1h5",
  "a1b2c3d4e5f6g7h8i9j0",
  "z9y8x7w6v5u4t3s2r1q0",
  "m1n2b3v4c5x6z7l8k9j0",
  "p1o2i3u4y5t6r7e8w9q0",
  "q1w2e3r4t5y6u7i8o9p0",
  "a0s9d8f7g6h5j4k3l2m1",
  "z1x2c3v4b5n6m7q8w9e0",
  "r0t9y8u7i6o5p4a3s2d1",
  "f1g2h3j4k5l6z7x8c9v0"
];

const Verification = () => {
  const { id } = useParams<{ id: string }>();
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      if (id) {
        setIsValid(VALID_CERTIFICATES.includes(id));
      } else {
        setIsValid(false);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <SEO 
        title="Certificate Verification | Cyber Hub"
        description="Verify the authenticity of Cyber Hub certificates and credentials."
      />
      
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Certificate Verification" 
          subtitle="Ensuring the authenticity of professional credentials"
          align="center"
        />

        <div className="mt-12">
          <GlassCard className="p-8 text-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                <p className="text-xl font-medium text-foreground/80">Verifying credential ID...</p>
                <p className="text-sm text-foreground/60 mt-2">{id}</p>
              </div>
            ) : isValid ? (
              <div className="py-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-500/10 p-4 rounded-full">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Verified Authentic</h2>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  This certificate (ID: <span className="font-mono text-primary">{id}</span>) is a genuine credential issued by Cyber Hub.
                </p>
                <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 mb-8 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-foreground/40 font-semibold">Credential ID</p>
                      <p className="font-mono text-sm">{id}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-foreground/40 font-semibold">Issuer</p>
                      <p className="text-foreground/90 font-medium">Cyber Hub</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <div className="py-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-destructive/10 p-4 rounded-full">
                    <XCircle className="h-20 w-20 text-destructive" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Verification Failed</h2>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  The credential ID <span className="font-mono text-destructive">{id || "None"}</span> could not be verified in our records.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/">Back to Home</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/join">Contact Support</Link>
                  </Button>
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Secure Verification System
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;