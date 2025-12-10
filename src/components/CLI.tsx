import { useState, useEffect, useRef } from "react";

const CLI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "CYBER_HUB_OS v3.0.1 [Build 2024.12.10]",
    "Quantum Core Initialized...",
    "Neural Network Status: ONLINE",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Type 'help' for available commands.",
    "",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | string[]> = {
    help: [
      "┌─────────────────────────────────────────────┐",
      "│          AVAILABLE COMMANDS                 │",
      "├─────────────────────────────────────────────┤",
      "│  about    - Learn about Cyber Hub          │",
      "│  mission  - Our core mission statement     │",
      "│  events   - Upcoming events                │",
      "│  contact  - Get in touch                   │",
      "│  skills   - Technologies we master         │",
      "│  matrix   - Enter the matrix               │",
      "│  clear    - Clear terminal                 │",
      "└─────────────────────────────────────────────┘",
    ],
    about: [
      "╔═══════════════════════════════════════════════╗",
      "║           CYBER HUB - MANIFESTO               ║",
      "╠═══════════════════════════════════════════════╣",
      "║  We are the architects of tomorrow's         ║",
      "║  digital frontier. A collective of hackers,  ║",
      "║  builders, and visionaries united by code.   ║",
      "╚═══════════════════════════════════════════════╝",
    ],
    mission: [
      "◆ MISSION: Democratize technology education",
      "◆ VISION: Build India's largest tech community",
      "◆ VALUES: Innovation • Collaboration • Excellence",
    ],
    events: [
      "[EVENT] Hackathon 2025 ─── Jan 15-17",
      "[EVENT] AI Workshop ───── Jan 22",
      "[EVENT] CTF Challenge ─── Feb 01",
      "[EVENT] Tech Talk: Quantum Computing ── Feb 10",
    ],
    contact: [
      "📧 contact@cyberhub.tech",
      "🌐 https://cyberhub.tech",
      "🐦 @CyberHubOfficial",
      "📍 Innovation Lab, Tech Campus",
    ],
    skills: [
      "▓▓▓▓▓▓▓▓▓▓ CYBERSECURITY ━━ 95%",
      "▓▓▓▓▓▓▓▓▓░ FULL-STACK DEV ━━ 90%",
      "▓▓▓▓▓▓▓▓░░ MACHINE LEARNING ━━ 85%",
      "▓▓▓▓▓▓▓░░░ QUANTUM AI ━━ 75%",
      "▓▓▓▓▓▓░░░░ BLOCKCHAIN ━━ 65%",
    ],
    matrix: [
      "Wake up, Neo...",
      "The Matrix has you...",
      "Follow the white rabbit.",
      "Knock, knock, Neo.",
    ],
    clear: "CLEAR",
  };

  const typeOutput = async (lines: string[]) => {
    setIsTyping(true);
    for (const line of lines) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setOutput((prev) => [...prev, line]);
    }
    setIsTyping(false);
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.toLowerCase().trim();
    setOutput((prev) => [...prev, `cyber@hub:~$ ${cmd}`]);

    if (trimmedCmd === "clear") {
      setOutput([]);
      return;
    }

    if (commands[trimmedCmd]) {
      const response = commands[trimmedCmd];
      if (Array.isArray(response)) {
        await typeOutput(response);
      } else {
        await typeOutput([response]);
      }
    } else if (trimmedCmd) {
      await typeOutput([
        `Command not found: ${trimmedCmd}`,
        "Type 'help' for available commands.",
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isTyping && input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-cyber-green/30 scanlines"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-cyber-dark border-b border-cyber-green/20">
        <div className="flex gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 md:ml-4 font-mono text-xs md:text-sm text-cyber-green/70 truncate">
          cyber_hub_terminal — bash
        </span>
      </div>

      {/* Terminal Body */}
      <div className="bg-[#0a0a0f] p-3 md:p-6">
        <div
          ref={outputRef}
          className="h-60 md:h-80 overflow-y-auto overflow-x-auto font-mono text-xs md:text-sm leading-relaxed scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyber-green/20"
        >
          {output.map((line, index) => (
            <div
              key={index}
              className="text-cyber-green whitespace-pre"
              style={{ textShadow: "0 0 10px rgba(0, 255, 136, 0.5)" }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="mt-3 md:mt-4 flex items-center gap-1 md:gap-2">
          <span
            className="text-cyber-green font-mono text-xs md:text-sm whitespace-nowrap"
            style={{ textShadow: "0 0 10px rgba(0, 255, 136, 0.5)" }}
          >
            cyber@hub:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            className="flex-1 min-w-0 bg-transparent border-none outline-none font-mono text-xs md:text-sm text-cyber-green caret-cyber-green"
            style={{ textShadow: "0 0 10px rgba(0, 255, 136, 0.5)" }}
            autoFocus
          />
          <span className="text-cyber-green animate-blink text-xs md:text-sm">█</span>
        </form>
      </div>
    </div>
  );
};

export default CLI;
