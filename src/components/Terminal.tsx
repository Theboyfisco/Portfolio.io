import { useState, useRef, useEffect } from "react";
import { terminalCommands } from "@/data/content";
import { Minus, Square, X } from "lucide-react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: 'Windows PowerShell' },
    { type: "output", text: 'Copyright (C) Subsystem 7. All rights reserved.' },
    { type: "output", text: '' },
    { type: "output", text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", text: `PS C:\\Users\\Odigili> ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([]);
    } else if (terminalCommands[trimmed]) {
      newLines.push({ type: "output", text: terminalCommands[trimmed] });
      setLines(newLines);
    } else {
      newLines.push({
        type: "output",
        text: `'${trimmed}' is not recognized. Type "help" for available commands.`,
      });
      setLines(newLines);
    }
    setInput("");
  };

  const titleBar = (
    <div className="flex items-center justify-between bg-[hsl(240,8%,12%)] px-3 py-1.5 border-b border-border select-none">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground">⌘</span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          {isMobile ? "Terminal — read-only" : "Windows PowerShell"}
        </span>
      </div>
      <div className="flex items-center">
        <div className="px-3 py-1 hover:bg-[hsl(240,5%,18%)] cursor-default">
          <Minus className="w-3 h-3 text-muted-foreground" />
        </div>
        <div className="px-3 py-1 hover:bg-[hsl(240,5%,18%)] cursor-default">
          <Square className="w-2.5 h-2.5 text-muted-foreground" />
        </div>
        <div className="px-3 py-1 hover:bg-[hsl(0,70%,50%)] cursor-default group">
          <X className="w-3 h-3 text-muted-foreground group-hover:text-foreground" />
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <section id="terminal" className="section-border py-10 sm:py-14 reveal-up">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="font-mono text-xs text-accent-amber mb-6 sm:mb-8">STACK TERMINAL</div>
          <div className="bg-[hsl(240,10%,6%)] border border-border overflow-hidden lift-card">
            {titleBar}
            <div className="p-3 sm:p-4 text-[11px] sm:text-xs space-y-1 max-h-64 overflow-y-auto font-mono">
              <div className="text-accent-amber">PS C:\Users\Odigili&gt; whoami</div>
              <div className="whitespace-pre-wrap text-muted-foreground">{terminalCommands.whoami}</div>
              <div className="mt-3 text-accent-amber">PS C:\Users\Odigili&gt; skills</div>
              <div className="whitespace-pre-wrap text-muted-foreground">{terminalCommands.skills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="terminal" className="section-border py-10 sm:py-14 md:py-20 reveal-up">
      <div className="container mx-auto px-4 md:px-8">
        <div className="font-mono text-xs text-accent-amber mb-8">STACK TERMINAL</div>
        <div
          className="bg-[hsl(240,10%,6%)] border border-border max-w-6xl min-h-[620px] max-h-[68vh] overflow-hidden cursor-text lift-card"
          onClick={() => inputRef.current?.focus()}
        >
          {titleBar}
          <div ref={scrollRef} className="p-4 text-xs sm:text-sm max-h-[68vh] overflow-y-auto space-y-1 font-mono">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  line.type === "input" ? "text-accent-amber" : "text-muted-foreground"
                }`}
              >
                {line.text}
              </div>
            ))}
            <div className="flex items-center gap-1">
              <span className="text-accent-amber shrink-0">PS C:\Users\Odigili&gt;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) {
                    e.preventDefault();
                    execute(input);
                  }
                }}
                className="flex-1 bg-transparent outline-none text-foreground font-mono text-xs sm:text-sm ml-1"
                spellCheck={false}
              />
              <span className="cursor-blink text-foreground">▌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
