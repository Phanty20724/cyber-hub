import { useState } from "react";
import { ArrowRight, Check, Zap, Users, Rocket, Shield } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "",
    experience: "",
    motivation: "",
  });

  const benefits = [
    {
      icon: Zap,
      title: "Cutting-Edge Skills",
      description: "Learn the latest technologies from industry experts and experienced peers.",
    },
    {
      icon: Users,
      title: "Powerful Network",
      description: "Connect with like-minded individuals and build lasting professional relationships.",
    },
    {
      icon: Rocket,
      title: "Real Projects",
      description: "Work on actual projects that make an impact and build your portfolio.",
    },
    {
      icon: Shield,
      title: "Industry Access",
      description: "Get access to internships, job opportunities, and industry mentorship.",
    },
  ];

  const tracks = [
    { id: "cybersec", name: "Cybersecurity" },
    { id: "fullstack", name: "Full-Stack Development" },
    { id: "aiml", name: "AI & Machine Learning" },
    { id: "quantum", name: "Quantum Computing" },
    { id: "general", name: "General / Exploring" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="JOIN THE COLLECTIVE"
          subtitle="Begin your journey into the digital frontier"
          glowColor="cyan"
        />

        {/* Benefits Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              hover3D
              glowColor={index % 2 === 0 ? "cyan" : "violet"}
            >
              <benefit.icon
                className={`w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-4 ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                }`}
              />
              <h3 className="font-display text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-body text-xs md:text-sm hidden sm:block">
                {benefit.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Application Form */}
          <div>
            <GlassCard className="glass-strong">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                <span className="font-display text-lg text-primary uppercase tracking-wider">
                  Application Form
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-display text-sm text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-display text-sm text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Track Selection */}
                <div>
                  <label className="block font-display text-sm text-foreground mb-2">
                    Preferred Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select a track</option>
                    {tracks.map((track) => (
                      <option key={track.id} value={track.id}>
                        {track.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block font-display text-sm text-foreground mb-2">
                    Experience Level
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, experience: level })}
                        className={`px-4 py-2 rounded-lg font-display text-sm transition-all duration-300 ${
                          formData.experience === level
                            ? "bg-primary text-primary-foreground shadow-glow-cyan"
                            : "bg-input border border-border text-muted-foreground hover:border-primary"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label className="block font-display text-sm text-foreground mb-2">
                    Why do you want to join?
                  </label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals and what excites you about technology..."
                    required
                  />
                </div>

                <CyberButton variant="primary" size="lg" type="submit" className="w-full">
                  Submit Application
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </CyberButton>
              </form>
            </GlassCard>
          </div>

          {/* What to Expect */}
          <div className="space-y-6">
            <GlassCard glowColor="violet">
              <h3 className="font-display text-xl font-bold text-secondary text-glow-violet mb-4">
                What Happens Next?
              </h3>
              <ul className="space-y-4">
                {[
                  "Application review (24-48 hours)",
                  "Welcome email with onboarding guide",
                  "Access to Discord community",
                  "Mentorship program assignment",
                  "First workshop invitation",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground font-body">{step}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Membership is <span className="text-primary text-glow-cyan">FREE</span>
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                We believe in democratizing technology education. Our core membership
                is completely free, giving you access to:
              </p>
              <ul className="space-y-3 text-muted-foreground font-body">
                {[
                  "Weekly workshops and tech talks",
                  "Project collaboration opportunities",
                  "Mentorship from industry professionals",
                  "Access to learning resources",
                  "Community events and hackathons",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="border-primary/40">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary text-glow-cyan mb-2">
                  500+
                </div>
                <p className="text-muted-foreground font-body">
                  Members already part of the collective
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
