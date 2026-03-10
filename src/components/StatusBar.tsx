import { useState, useEffect } from "react";
import { personal } from "@/data/content";

const sections = ["ABOUT", "PROJECTS", "HIGHLIGHTS", "TERMINAL", "EXPERIENCE", "AILAB", "CONTACT"];

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-10 bg-background/90 backdrop-blur-sm border-b border-border flex items-center px-4 md:px-8 font-mono text-xs">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent-green))] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--accent-green))]"></span>
        </span>
        <span className="text-accent-green font-medium">SYSTEM ONLINE</span>
        <span className="text-muted-foreground hidden md:inline">IFEANYI.SYSTEMS v1.0.0</span>
      </div>

      <nav className="hidden lg:flex items-center gap-4 mx-auto">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className="text-muted-foreground hover:text-accent-amber transition-colors duration-150"
          >
            {s}
          </button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <span className="text-muted-foreground hidden md:inline">
          UTC+1 {time} — {personal.location.split("/")[0].trim()}, NG
        </span>
        <span className="flex items-center gap-1.5 sm:hidden">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent-green))] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(var(--accent-green))]"></span>
          </span>
          <span className="text-accent-green">Open</span>
        </span>
      </div>
    </header>
  );
};

export default StatusBar;
