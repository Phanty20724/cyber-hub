import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";
import SEO from "@/components/SEO";

const Projects = () => {
  const projects = [
    {
      title: "SCPSC Portal",
      description: "Official college portal built by Cyber Hub members featuring student management, event registration, and resource sharing.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      stars: 45,
      forks: 12,
      featured: true,
      category: "Web Dev",
    },
    {
      title: "CodeArena",
      description: "Competitive programming practice platform with problems curated by our CP team, featuring real-time contests.",
      tech: ["Next.js", "Python", "PostgreSQL", "Docker"],
      stars: 38,
      forks: 8,
      featured: true,
      category: "CP",
    },
    {
      title: "SmartAttendance",
      description: "AI-powered attendance system using facial recognition for seamless classroom attendance tracking.",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      stars: 32,
      forks: 10,
      featured: false,
      category: "AI/ML",
    },
    {
      title: "EventHub",
      description: "Event management platform for SCPSC with ticketing, schedules, and live updates for all club events.",
      tech: ["React", "Firebase", "TailwindCSS"],
      stars: 28,
      forks: 6,
      featured: false,
      category: "Web Dev",
    },
    {
      title: "DesignKit",
      description: "Open-source design assets and templates created by our Graphics team for the SCPSC community.",
      tech: ["Figma", "Illustrator", "Photoshop"],
      stars: 22,
      forks: 15,
      featured: false,
      category: "Graphics",
    },
    {
      title: "VideoToolkit",
      description: "Collection of video editing presets, LUTs, and templates for content creators at SCPSC.",
      tech: ["Premiere Pro", "After Effects", "DaVinci"],
      stars: 18,
      forks: 9,
      featured: false,
      category: "Video",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <SEO 
        title="SCPSC Cyber Hub Projects - Open Source Innovations"
        description="Explore 10+ open-source projects: SCPSC Portal, CodeArena, SmartAttendance AI, EventHub, and more. Built with React, Python, TensorFlow. Join our GitHub community."
        keywords="SCPSC projects, open source projects Bangladesh, student coding projects, React projects, Python AI projects, TensorFlow projects, GitHub student community, web development portfolio"
      />
      <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="PROJECT VAULT"
          subtitle="Explore our open-source contributions and innovative solutions"
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="font-display text-xl text-foreground mb-8">
            <span className="text-secondary text-glow-violet">FEATURED</span> PROJECTS
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <GlassCard
                key={project.title}
                hover3D
                glowColor={index % 2 === 0 ? "cyan" : "violet"}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-display uppercase ${
                        index % 2 === 0
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1 text-sm">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  <h4
                    className={`font-display text-2xl font-bold mb-3 ${
                      index % 2 === 0
                        ? "text-primary text-glow-cyan"
                        : "text-secondary text-glow-violet"
                    }`}
                  >
                    {project.title}
                  </h4>

                  <p className="text-foreground font-body mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <CyberButton variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </CyberButton>
                    <CyberButton
                      variant={index % 2 === 0 ? "primary" : "secondary"}
                      size="sm"
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </CyberButton>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="font-display text-lg md:text-xl text-foreground mb-6 md:mb-8">
            <span className="text-primary text-glow-cyan">MORE</span> PROJECTS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <GlassCard
                key={project.title}
                hover3D
                glowColor={index % 2 === 0 ? "cyan" : "violet"}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-display uppercase">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h4>

                <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className={`inline-flex items-center gap-1 text-sm font-display ${
                    index % 2 === 0
                      ? "text-primary hover:text-glow-cyan"
                      : "text-secondary hover:text-glow-violet"
                  } transition-all duration-300`}
                >
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Contribute CTA */}
        <div className="mt-16">
          <GlassCard className="text-center py-12">
            <Github className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Want to <span className="text-primary text-glow-cyan">Contribute</span>?
            </h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              We're always looking for passionate developers to join our open-source
              initiatives. Check out our GitHub organization and start contributing!
            </p>
            <CyberButton variant="primary" size="lg">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub
            </CyberButton>
          </GlassCard>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
