import { Cpu, Target, Eye, Lightbulb } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and challenge conventional thinking to create breakthrough solutions.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we build and every skill we develop.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "We see beyond today's limitations to architect tomorrow's possibilities.",
    },
    {
      icon: Cpu,
      title: "Collaboration",
      description: "We believe the best innovations emerge when brilliant minds work together.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="THE MANIFESTO"
          subtitle="Understanding who we are and what drives us forward"
        />

        {/* Main Manifesto */}
        <div className="max-w-4xl mx-auto mb-20">
          <GlassCard className="relative overflow-hidden">
            {/* Circuit Board Pattern Background */}
            <div className="absolute inset-0 circuit-pattern opacity-30" />
            
            <div className="relative z-10 space-y-6 text-center py-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
                <span className="font-display text-sm text-secondary uppercase tracking-wider">
                  Core Protocol
                </span>
              </div>

              <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
                "We are the <span className="text-primary text-glow-cyan">architects</span> of tomorrow's digital frontier. 
                A collective of <span className="text-secondary text-glow-violet">hackers</span>, builders, and visionaries 
                united by code and driven by the relentless pursuit of innovation."
              </blockquote>

              <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />

              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                Founded with a singular mission: to democratize technology education and empower 
                the next generation of digital creators. We don't just teach code—we forge digital 
                warriors ready to tackle the challenges of tomorrow.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard glowColor="cyan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary text-glow-cyan">
                OUR MISSION
              </h3>
            </div>
            <p className="text-foreground font-body leading-relaxed">
              To cultivate a thriving ecosystem of tech innovators by providing world-class 
              resources, mentorship, and hands-on experience. We bridge the gap between 
              academic knowledge and industry demands, preparing our members for the 
              challenges of the real digital world.
            </p>
          </GlassCard>

          <GlassCard glowColor="violet">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary text-glow-violet">
                OUR VISION
              </h3>
            </div>
            <p className="text-foreground font-body leading-relaxed">
              To become the premier technology community that shapes the future of digital 
              innovation. We envision a world where every aspiring technologist has access 
              to the tools, knowledge, and network needed to transform their boldest ideas 
              into reality.
            </p>
          </GlassCard>
        </div>

        {/* Core Values */}
        <SectionTitle
          title="CORE VALUES"
          subtitle="The principles that guide every line of code we write"
          glowColor="violet"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <GlassCard
              key={value.title}
              hover3D
              glowColor={index % 2 === 0 ? "cyan" : "violet"}
            >
              <value.icon
                className={`w-12 h-12 mb-4 ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                }`}
              />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {value.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <SectionTitle
            title="OUR JOURNEY"
            subtitle="From a small idea to a thriving community"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2" />

            {[
              { year: "2020", title: "Genesis", desc: "Cyber Hub was founded by a group of passionate tech enthusiasts." },
              { year: "2021", title: "First Hackathon", desc: "Organized our first major hackathon with 200+ participants." },
              { year: "2022", title: "AI Division", desc: "Launched our dedicated AI/ML research division." },
              { year: "2023", title: "500 Members", desc: "Reached a milestone of 500+ active community members." },
              { year: "2024", title: "Quantum Initiative", desc: "Started exploring quantum computing applications." },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <GlassCard glowColor={index % 2 === 0 ? "cyan" : "violet"} className="inline-block">
                    <span className={`font-display text-2xl font-bold ${
                      index % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}>
                      {item.year}
                    </span>
                    <h4 className="font-display text-lg text-foreground mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm font-body mt-2">{item.desc}</p>
                  </GlassCard>
                </div>

                {/* Center Dot */}
                <div className={`w-4 h-4 rounded-full z-10 ${
                  index % 2 === 0 ? "bg-primary shadow-glow-cyan" : "bg-secondary shadow-glow-violet"
                }`} />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
