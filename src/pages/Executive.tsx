import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

const Executive = () => {
  const executives = [
    {
      name: "The President",
      role: "President & Founder",
      title: "Sir",
      bio: "Visionary leader with expertise in cybersecurity and quantum computing. Pioneering the future of tech education.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=president&backgroundColor=0f0f23",
      isPresident: true,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "president@cyberhub.tech",
      },
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      title: "Tech Lead",
      bio: "Full-stack architect specializing in distributed systems and cloud infrastructure.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=0f0f23",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@cyberhub.tech",
      },
    },
    {
      name: "Alex Rivera",
      role: "Technical Director",
      title: "AI Specialist",
      bio: "ML researcher focused on neural networks and computer vision applications.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=0f0f23",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "alex@cyberhub.tech",
      },
    },
    {
      name: "Maya Patel",
      role: "Events Coordinator",
      title: "Community Builder",
      bio: "Creating unforgettable experiences that bring our community together.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya&backgroundColor=0f0f23",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "maya@cyberhub.tech",
      },
    },
    {
      name: "James Liu",
      role: "Security Lead",
      title: "Ethical Hacker",
      bio: "Certified penetration tester with a passion for defensive security strategies.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=0f0f23",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "james@cyberhub.tech",
      },
    },
    {
      name: "Emily Watson",
      role: "Content Director",
      title: "Tech Storyteller",
      bio: "Transforming complex technical concepts into engaging educational content.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=0f0f23",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "emily@cyberhub.tech",
      },
    },
  ];

  const president = executives.find((e) => e.isPresident);
  const otherMembers = executives.filter((e) => !e.isPresident);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="THE COUNCIL"
          subtitle="Meet the architects behind Cyber Hub"
        />

        {/* President Card - Featured */}
        {president && (
          <div className="max-w-2xl mx-auto mb-16">
            <GlassCard
              hover3D
              glowColor="violet"
              className="border-secondary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 py-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-secondary shadow-glow-violet-lg">
                    <img
                      src={president.image}
                      alt={president.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 rounded-full bg-secondary text-secondary-foreground font-display text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap">
                    {president.title}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary font-display text-xs uppercase tracking-wider mb-2 md:mb-3">
                    Leadership
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary text-glow-violet-strong mb-1">
                    {president.name}
                  </h2>
                  <p className="text-primary font-display text-base md:text-lg mb-3 md:mb-4">{president.role}</p>
                  <p className="text-muted-foreground font-body text-sm md:text-base mb-4 md:mb-6">{president.bio}</p>

                  <div className="flex justify-center md:justify-start gap-4">
                    {[
                      { icon: Github, href: president.socials.github },
                      { icon: Linkedin, href: president.socials.linkedin },
                      { icon: Twitter, href: president.socials.twitter },
                      { icon: Mail, href: `mailto:${president.socials.email}` },
                    ].map(({ icon: Icon, href }) => (
                      <a
                        key={href}
                        href={href}
                        className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 hover:shadow-glow-violet transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {otherMembers.map((member, index) => (
            <GlassCard
              key={member.name}
              hover3D
              glowColor={index % 2 === 0 ? "cyan" : "violet"}
            >
              <div className="text-center">
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden border-2 ${
                      index % 2 === 0
                        ? "border-primary/50 hover:shadow-glow-cyan"
                        : "border-secondary/50 hover:shadow-glow-violet"
                    } transition-all duration-300`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p
                  className={`font-display text-sm mb-1 ${
                    index % 2 === 0 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {member.role}
                </p>
                <p className="text-muted-foreground font-body text-xs mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  {[
                    { icon: Github, href: member.socials.github },
                    { icon: Linkedin, href: member.socials.linkedin },
                    { icon: Mail, href: `mailto:${member.socials.email}` },
                  ].map(({ icon: Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        index % 2 === 0
                          ? "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-glow-cyan"
                          : "bg-secondary/10 text-secondary hover:bg-secondary/20 hover:shadow-glow-violet"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Executive;
