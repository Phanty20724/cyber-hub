import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";

const Projects = () => {
  const projects = [
    {
      title: "NeuralShield",
      description: "AI-powered intrusion detection system that uses deep learning to identify zero-day attacks in real-time network traffic.",
      tech: ["Python", "TensorFlow", "Kafka", "Docker"],
      stars: 234,
      forks: 45,
      featured: true,
      category: "Security",
    },
    {
      title: "QuantumVault",
      description: "Post-quantum cryptography library implementing lattice-based encryption algorithms for future-proof data security.",
      tech: ["Rust", "C++", "WebAssembly"],
      stars: 189,
      forks: 32,
      featured: true,
      category: "Cryptography",
    },
    {
      title: "DevFlow",
      description: "Full-stack project management platform with AI-assisted task allocation and sprint planning.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI"],
      stars: 156,
      forks: 28,
      featured: false,
      category: "Full-Stack",
    },
    {
      title: "CyberRange",
      description: "Virtual cybersecurity training environment with realistic attack scenarios and gamified learning paths.",
      tech: ["Docker", "Kubernetes", "Vue.js", "Go"],
      stars: 312,
      forks: 67,
      featured: false,
      category: "Education",
    },
    {
      title: "MLPipeline",
      description: "End-to-end machine learning pipeline framework with automated feature engineering and model optimization.",
      tech: ["Python", "Airflow", "MLflow", "Ray"],
      stars: 198,
      forks: 41,
      featured: false,
      category: "AI/ML",
    },
    {
      title: "ChainGuard",
      description: "Smart contract security analyzer using symbolic execution and formal verification methods.",
      tech: ["Solidity", "Python", "Z3 Solver"],
      stars: 145,
      forks: 23,
      featured: false,
      category: "Blockchain",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
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
  );
};

export default Projects;
