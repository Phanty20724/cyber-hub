import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Executive {
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  isPresident: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const Executive = () => {
  const [activeYear, setActiveYear] = useState<"2025-26" | "2024-25">("2025-26");
  const [selectedMember, setSelectedMember] = useState<Executive | null>(null);

  const executives2025: Executive[] = [
    {
      name: "Saad Bin Tofayel",
      role: "President",
      title: "Executive Committee 2025-26",
      bio: "Leading SCPSC Cyber Hub with vision and dedication to build the future through technology and innovation.",
      image: "/executives/president.png",
      isPresident: true,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Maisa Tabassum",
      role: "General Secretary",
      title: "Executive Committee 2025-26",
      bio: "Managing club operations and ensuring smooth coordination across all activities.",
      image: "/executives/general-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Safwan Baari",
      role: "Vice President",
      title: "Executive Committee 2025-26",
      bio: "Supporting club leadership and coordinating across all core modules.",
      image: "/executives/vice-president.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Aayan Bin Alamgir",
      role: "Organizing Secretary",
      title: "Executive Committee 2025-26",
      bio: "Planning and organizing events and activities for the club.",
      image: "/executives/organizing-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Tanvir Alam Rifat",
      role: "Program Secretary",
      title: "Executive Committee 2025-26",
      bio: "Managing programs and workshops for skill development.",
      image: "/executives/program-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Tahsina Azad Ariba",
      role: "Office Secretary",
      title: "Executive Committee 2025-26",
      bio: "Handling administrative tasks and official communications.",
      image: "/executives/office-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Sattik Sarker",
      role: "Asst. Office Secretary",
      title: "Executive Committee 2025-26",
      bio: "Assisting with administrative tasks and communications.",
      image: "/executives/asst-office-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Ahnaf Hassan Orko",
      role: "Publicity Secretary",
      title: "Executive Committee 2025-26",
      bio: "Managing publicity and outreach for club activities.",
      image: "/executives/publicity-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Shadiq Al Murtoza",
      role: "Treasurer",
      title: "Executive Committee 2025-26",
      bio: "Managing club finances and budget allocations.",
      image: "/executives/treasurer.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Nasira Husna Srizany",
      role: "Executive",
      title: "Executive Committee 2025-26",
      bio: "Supporting club activities and initiatives.",
      image: "/executives/executive.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
  ];

  const executives2024: Executive[] = [
    {
      name: "Ahmed Abdur Rafi",
      role: "President",
      title: "Executive Committee 2024-25",
      bio: "Leading SCPSC Cyber Hub with vision and dedication.",
      image: "/executives-2024-25/president.png",
      isPresident: true,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Saad Bin Tofayel",
      role: "General Secretary",
      title: "Executive Committee 2024-25",
      bio: "Managing club operations and coordination.",
      image: "/executives-2024-25/general-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Alif Al-Arafat",
      role: "Vice President",
      title: "Executive Committee 2024-25",
      bio: "Supporting club leadership and initiatives.",
      image: "/executives-2024-25/vice-president.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Ahnaf Islam",
      role: "Organizing Secretary",
      title: "Executive Committee 2024-25",
      bio: "Planning and organizing club events.",
      image: "/executives-2024-25/organizing-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Mahadi Mahmud",
      role: "Program Secretary",
      title: "Executive Committee 2024-25",
      bio: "Managing programs and workshops.",
      image: "/executives-2024-25/program-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Jarin Mobashira Feema",
      role: "Office Secretary",
      title: "Executive Committee 2024-25",
      bio: "Handling administrative tasks.",
      image: "/executives-2024-25/office-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Safwan Baari",
      role: "Joint Secretary",
      title: "Executive Committee 2024-25",
      bio: "Coordinating club activities.",
      image: "/executives-2024-25/joint-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Mounota Binte Mostafiz",
      role: "Publicity Secretary",
      title: "Executive Committee 2024-25",
      bio: "Managing publicity and outreach.",
      image: "/executives-2024-25/publicity-secretary.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Tahsina Azad Ariba",
      role: "Treasurer",
      title: "Executive Committee 2024-25",
      bio: "Managing club finances.",
      image: "/executives-2024-25/treasurer.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Maisa Tabassum",
      role: "Executive Member",
      title: "Executive Committee 2024-25",
      bio: "Supporting club activities.",
      image: "/executives-2024-25/executive-1.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Tahsin Abid",
      role: "Executive Member",
      title: "Executive Committee 2024-25",
      bio: "Supporting club initiatives.",
      image: "/executives-2024-25/executive-2.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
    {
      name: "Abidur Rahman Ifrad",
      role: "Executive Member",
      title: "Executive Committee 2024-25",
      bio: "Supporting club activities.",
      image: "/executives-2024-25/executive-3.png",
      isPresident: false,
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "cyberhub@scpsc.edu",
      },
    },
  ];

  const executives = activeYear === "2025-26" ? executives2025 : executives2024;
  const president = executives.find((e) => e.isPresident);
  const otherMembers = executives.filter((e) => !e.isPresident);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="EXECUTIVE COMMITTEE"
          subtitle="Meet the team behind SCPSC Cyber Hub"
        />

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveYear("2025-26")}
            className={`px-6 py-3 rounded-lg font-display text-sm uppercase tracking-wider transition-all duration-300 ${
              activeYear === "2025-26"
                ? "bg-primary text-primary-foreground shadow-glow-cyan"
                : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
            }`}
          >
            2025-26
          </button>
          <button
            onClick={() => setActiveYear("2024-25")}
            className={`px-6 py-3 rounded-lg font-display text-sm uppercase tracking-wider transition-all duration-300 ${
              activeYear === "2024-25"
                ? "bg-secondary text-secondary-foreground shadow-glow-violet"
                : "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/30"
            }`}
          >
            2024-25
          </button>
        </div>

        {/* President Card - Featured */}
        {president && (
          <div className="max-w-2xl mx-auto mb-16">
            <div 
              onClick={() => setSelectedMember(president)}
              className="cursor-pointer"
            >
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
                      {president.role}
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
                        { icon: Github, href: president.socials.github, name: "github" },
                        { icon: Linkedin, href: president.socials.linkedin, name: "linkedin" },
                        { icon: Twitter, href: president.socials.twitter, name: "twitter" },
                        { icon: Mail, href: `mailto:${president.socials.email}`, name: "email" },
                      ].map(({ icon: Icon, href, name }) => (
                        <a
                          key={name}
                          href={href}
                          onClick={(e) => e.stopPropagation()}
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
          </div>
        )}

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {otherMembers.map((member, index) => (
            <div
              key={member.name + member.role}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer"
            >
              <GlassCard
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
                      { icon: Github, href: member.socials.github, name: "github" },
                      { icon: Linkedin, href: member.socials.linkedin, name: "linkedin" },
                      { icon: Mail, href: `mailto:${member.socials.email}`, name: "email" },
                    ].map(({ icon: Icon, href, name }) => (
                      <a
                        key={name}
                        href={href}
                        onClick={(e) => e.stopPropagation()}
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
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Popup */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-primary/30 overflow-hidden">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="sr-only">{selectedMember.name}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-4 p-2">
                {/* Large Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-secondary/50 shadow-glow-violet-lg">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left overflow-hidden">
                  <span className="inline-block px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary font-display text-xs uppercase tracking-wider mb-3">
                    {selectedMember.title}
                  </span>
                  
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary text-glow-violet-strong mb-1 break-words">
                    {selectedMember.name}
                  </h2>
                  
                  <p className="text-primary font-display text-lg md:text-xl mb-3">
                    {selectedMember.role}
                  </p>
                  
                  <p className="text-muted-foreground font-body text-sm md:text-base mb-4 leading-relaxed break-words">
                    {selectedMember.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-3 flex-wrap">
                    {[
                      { icon: Github, href: selectedMember.socials.github, name: "GitHub", label: "github" },
                      { icon: Twitter, href: selectedMember.socials.twitter, name: "Twitter", label: "twitter" },
                      { icon: Mail, href: `mailto:${selectedMember.socials.email}`, name: "Email", label: "email" },
                    ].map(({ icon: Icon, href, name, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 hover:shadow-glow-violet transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-display text-xs">{name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Executive;
