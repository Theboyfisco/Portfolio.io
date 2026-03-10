import { useState, useEffect, useCallback } from "react";
import { personal } from "@/data/content";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import StackGraph from "./StackGraph";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function useTextScramble(text: string, delay: number, duration: number = 1000) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const length = text.length;
      let frame = 0;
      const totalFrames = Math.floor(duration / 30);

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const resolved = Math.floor(progress * length);

        let result = "";
        for (let i = 0; i < length; i++) {
          if (text[i] === " ") {
            result += " ";
          } else if (i < resolved) {
            result += text[i];
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        setDisplay(result);

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, duration]);

  return display;
}

const Hero = () => {
  const [labelVisible, setLabelVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const firstName = useTextScramble(personal.name.first, 400, 800);
  const lastName = useTextScramble(personal.name.last, 600, 1000);

  useEffect(() => {
    setTimeout(() => setLabelVisible(true), 200);
    setTimeout(() => setSubVisible(true), 1500);
    setTimeout(() => setCtaVisible(true), 1700);
  }, []);

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView();
  }, []);

  const quickJumps = [
    { label: "Projects", id: "projects" },
    { label: "Highlights", id: "highlights" },
    { label: "Terminal", id: "terminal" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section className="min-h-screen flex items-center pt-10 reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div
              className={`flex items-center gap-3 mb-4 sm:mb-8 transition-all duration-150 ${
                labelVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <img src="/logo.svg" alt="Odigili I logo" className="h-9 w-9" />
              <div className="font-mono text-[10px] sm:text-xs text-accent-amber">
                FULL-STACK DEVELOPER · PORT HARCOURT, NG
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4 sm:mb-6 tracking-tight">
              <span className="block text-foreground">{firstName || "\u00A0"}</span>
              <span className="block text-foreground">{lastName || "\u00A0"}</span>
            </h1>

            <div
              className={`transition-all duration-150 ${
                subVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-1 sm:mb-2">
                {personal.headline}
              </p>
              <p className="font-mono text-[11px] sm:text-sm text-muted-foreground">
                {personal.proofPoint}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 transition-all duration-150 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <button onClick={scrollToProjects} className="btn-primary-system text-xs sm:text-sm justify-center">
                <ArrowRight className="w-4 h-4" />
                VIEW PROJECTS
              </button>
              <a href="#contact" className="btn-primary-system text-xs sm:text-sm justify-center">
                LET&apos;S TALK
              </a>
              <a href={`mailto:${personal.email}`} className="btn-system text-xs sm:text-sm justify-center">
                <Mail className="w-4 h-4" />
                <span className="hidden xs:inline">{personal.email}</span>
                <span className="xs:hidden">EMAIL</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-system text-xs sm:text-sm justify-center">
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {quickJumps.map((jump) => (
                <a
                  key={jump.id}
                  href={`#${jump.id}`}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground hover:text-accent-amber hover:border-accent-amber transition-colors"
                >
                  {jump.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <StackGraph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
