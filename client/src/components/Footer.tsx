import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8 w-full">
            <div className="flex items-center justify-center">
              <img 
                src="/attached_assets/scpsc-logo_1765371182144.png" 
                alt="SCPSC Logo" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                onError={(e) => console.error('SCPSC logo failed to load:', e)}
              />
            </div>
            <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-secondary text-glow-violet px-4">
              ×
            </span>
            <div className="flex items-center justify-center">
              <img 
                src="/cyber-hub-logo.png" 
                alt="Cyber Hub Logo" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                onError={(e) => console.error('Cyber Hub logo failed to load:', e)}
              />
            </div>
          </div>
          
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-primary text-glow-cyan tracking-wider">
            CYBER HUB
          </h2>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <a 
              href="/Cyber_Hub.apk" 
              download="Cyber_Hub.apk"
              className="group relative block overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-primary/10"
            >
              <img 
                src="/apk-download.jpg" 
                alt="Download Cyber Hub APK" 
                className="w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-primary font-display text-[10px] uppercase tracking-widest font-bold border border-primary/20">
                  Download
                </span>
              </div>
            </a>
            <p className="text-[10px] text-muted-foreground/60 font-mono uppercase tracking-tighter border-l border-white/10 pl-4 py-1">
              Android v1.0.0
            </p>
          </div>
          
          <div className="mt-8 text-muted-foreground text-sm space-y-1">
            <p>© 2025 SCPSC Cyber Hub. All rights reserved.</p>
            <p>
              Made by{" "}
              <a 
                href="https://tahsin.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/50 hover:decoration-primary"
              >
                Saad Bin Tofayel (Tahsin)
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
