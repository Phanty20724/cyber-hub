import { useState } from "react";
import { Shield, Code2, Cpu, Sparkles, Loader2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import CyberButton from "@/components/CyberButton";

type Category = "CP" | "WEB-DEV" | "AI-ML" | "CREATIVE";

const Ideas = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);

  const categories = [
    {
      id: "CP" as Category,
      icon: Code2,
      title: "COMPETITIVE PROGRAMMING",
      description: "Algorithms, data structures, and problem-solving challenges",
      color: "cyan",
    },
    {
      id: "WEB-DEV" as Category,
      icon: Shield,
      title: "WEB DEVELOPMENT",
      description: "Web applications, APIs, databases, and modern frameworks",
      color: "violet",
    },
    {
      id: "AI-ML" as Category,
      icon: Cpu,
      title: "AI/ML",
      description: "Machine learning, neural networks, and intelligent systems",
      color: "cyan",
    },
  ];

  const sampleIdeas: Record<Category, string[]> = {
    CP: [
      "Build a competitive programming practice platform with daily challenges",
      "Create an algorithm visualizer for sorting, searching, and graph algorithms",
      "Develop a code submission system with real-time judging for contests",
      "Build a problem recommendation engine based on skill level and weak areas",
      "Create a collaborative whiteboard for solving problems in teams",
    ],
    "WEB-DEV": [
      "Build a real-time collaborative code editor with video chat integration",
      "Create an event management platform for SCPSC clubs and activities",
      "Develop a student portfolio generator that showcases projects beautifully",
      "Build a resource sharing platform for notes, tutorials, and study materials",
      "Create a campus marketplace for students to buy and sell items",
    ],
    "AI-ML": [
      "Build a smart attendance system using facial recognition",
      "Create a chatbot that answers questions about SCPSC courses and events",
      "Develop a study recommendation system based on learning patterns",
      "Build an image classifier for campus plant and wildlife identification",
      "Create an AI-powered resume analyzer and improvement suggester",
    ],
    CREATIVE: [
      "Design a motion graphics intro template for SCPSC YouTube channels",
      "Create a brand identity kit with logos, colors, and typography guidelines",
      "Develop video editing presets for quick and consistent content production",
      "Build an animated infographic template for presenting club statistics",
      "Create social media post templates for event announcements",
    ],
  };

  const generateIdea = () => {
    if (!selectedCategory) return;

    setIsGenerating(true);
    setGeneratedIdea(null);

    // Simulate AI generation
    setTimeout(() => {
      const ideas = sampleIdeas[selectedCategory];
      const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
      setGeneratedIdea(randomIdea);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="NEXUS AI"
          subtitle="Let our quantum neural network generate breakthrough project ideas"
          glowColor="violet"
        />

        {/* Category Selection */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <h3 className="font-display text-lg md:text-xl text-foreground mb-4 md:mb-6 text-center">
            Select Your <span className="text-primary text-glow-cyan">Domain</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 perspective-1000">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer transition-all duration-500 preserve-3d ${
                  selectedCategory === category.id
                    ? "scale-105"
                    : "hover:scale-102"
                }`}
                style={{
                  transform: selectedCategory === category.id
                    ? "translateY(-8px) rotateX(2deg)"
                    : undefined,
                }}
              >
                <GlassCard
                  hover3D={false}
                  className={`h-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? category.color === "cyan"
                        ? "border-primary/60 shadow-glow-cyan-lg"
                        : "border-secondary/60 shadow-glow-violet-lg"
                      : ""
                  }`}
                >
                  <div className="text-center py-2 md:py-4">
                    <div
                      className={`w-14 h-14 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        selectedCategory === category.id
                          ? category.color === "cyan"
                            ? "bg-primary/30 shadow-glow-cyan"
                            : "bg-secondary/30 shadow-glow-violet"
                          : category.color === "cyan"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      }`}
                    >
                      <category.icon
                        className={`w-7 h-7 md:w-10 md:h-10 ${
                          category.color === "cyan" ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>

                    <h4
                      className={`font-display text-lg md:text-2xl font-bold mb-1 md:mb-2 ${
                        selectedCategory === category.id
                          ? category.color === "cyan"
                            ? "text-primary text-glow-cyan"
                            : "text-secondary text-glow-violet"
                          : "text-foreground"
                      }`}
                    >
                      {category.title}
                    </h4>

                    <p className="text-muted-foreground font-body text-xs md:text-sm">
                      {category.description}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-12">
          <CyberButton
            variant="secondary"
            size="lg"
            onClick={generateIdea}
            disabled={!selectedCategory || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="inline-block mr-2 w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="inline-block mr-2 w-5 h-5" />
                Generate Idea
              </>
            )}
          </CyberButton>
        </div>

        {/* Generated Idea Output */}
        {(isGenerating || generatedIdea) && (
          <div className="max-w-3xl mx-auto">
            <GlassCard className="glass-strong border-secondary/40">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
                <span className="font-display text-sm text-secondary uppercase tracking-wider">
                  Nexus Output
                </span>
              </div>

              <div className="min-h-[100px] flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-8 bg-secondary rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">
                      Processing neural pathways...
                    </p>
                  </div>
                ) : (
                  <p className="text-foreground font-body text-xl leading-relaxed text-center">
                    {generatedIdea}
                  </p>
                )}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Placeholder for AI Integration */}
        <div className="mt-20">
          <GlassCard className="max-w-2xl mx-auto text-center">
            <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              AI Integration Ready
            </h3>
            <p className="text-muted-foreground font-body text-sm">
              This panel is prepared for @google/genai SDK integration. 
              Connect your API to unlock unlimited AI-powered idea generation.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
