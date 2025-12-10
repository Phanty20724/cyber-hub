import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Code2, Globe, Video, Palette } from "lucide-react";
import CLI from "@/components/CLI";
import GlassCard from "@/components/GlassCard";
import CyberButton from "@/components/CyberButton";

const Index = () => {
  const features = [
    {
      icon: Code2,
      title: "Competitive Programming",
      description: "Sharpen your problem-solving skills and ace coding competitions.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build stunning websites and powerful web applications.",
    },
    {
      icon: Cpu,
      title: "AI/ML",
      description: "Explore the frontiers of artificial intelligence and machine learning.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Create compelling visual stories through professional video editing.",
    },
    {
      icon: Palette,
      title: "Graphics Designing",
      description: "Design stunning visuals and bring creative ideas to life.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-display text-sm text-primary uppercase tracking-wider">
                Neural Network Active
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">WELCOME TO</span>
              <br />
              <span className="text-primary text-glow-cyan-strong">SCPSC CYBER HUB</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-muted-foreground font-body mb-12 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Let's Build The Future. Join SCPSC's premier tech community where
              innovation meets creativity.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/join">
                <CyberButton variant="primary" size="lg">
                  Initialize Connection
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </CyberButton>
              </Link>
              <Link to="/about">
                <CyberButton variant="outline" size="lg">
                  Learn More
                </CyberButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </section>

      {/* CLI Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              <span className="text-primary text-glow-cyan">QUANTUM</span> TERMINAL
            </h2>
            <p className="text-muted-foreground font-body text-sm md:text-base">
              Interface with the Cyber Hub mainframe. Type 'help' to begin.
            </p>
          </div>
          <CLI />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              <span className="text-secondary text-glow-violet">CORE</span> MODULES
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto text-sm md:text-base px-4">
              Our specialized tracks designed to transform you into a digital architect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <GlassCard
                key={feature.title}
                hover3D
                glowColor={index % 2 === 0 ? "cyan" : "violet"}
                className="animate-fade-in"
              >
                <feature.icon
                  className={`w-12 h-12 mb-4 ${
                    index % 2 === 0 ? "text-primary" : "text-secondary"
                  }`}
                />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-2xl p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "200+", label: "Members" },
                { value: "10+", label: "Projects" },
                { value: "15+", label: "Events" },
                { value: "50+", label: "Workshops" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-2 ${
                      index % 2 === 0
                        ? "text-primary text-glow-cyan"
                        : "text-secondary text-glow-violet"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-body text-muted-foreground uppercase tracking-wider text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="text-center py-8 md:py-16 px-4 md:px-8">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Ready to <span className="text-primary text-glow-cyan">Jack In</span>?
            </h2>
            <p className="text-muted-foreground font-body mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
              The future is being written right now. Don't just watch it happen—be part of
              the code that shapes it.
            </p>
            <Link to="/join">
              <CyberButton variant="primary" size="lg">
                Join the Collective
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </CyberButton>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
