import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 w-full max-w-3xl mx-auto">
            <div className="flex-1 flex justify-end">
              <img 
                src="/attached_assets/scpsc-logo_1765371182144.png" 
                alt="SCPSC Logo" 
                className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <span className="font-display text-3xl md:text-4xl font-bold text-secondary text-glow-violet flex-shrink-0 px-2">
              ×
            </span>
            <div className="flex-1 flex justify-start">
              <img 
                src="/attached_assets/CH-LOGO-FOOTER_1765371169482.png" 
                alt="Cyber Hub Logo" 
                className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </div>
          </div>
          
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-primary text-glow-cyan tracking-wider">
            CYBER HUB
          </h2>
          
          <p className="mt-6 text-muted-foreground text-sm">
            © {new Date().getFullYear()} SCPSC Cyber Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
