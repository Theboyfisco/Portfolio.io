import { about, metrics, personal } from "@/data/content";
import { Github, Mail, Linkedin } from "lucide-react";

const accentClass: Record<string, string> = {
  green: "text-accent-green",
  amber: "text-accent-amber",
  blue: "text-accent-blue",
  muted: "text-muted-foreground",
};

const AboutBento = () => {
  return (
    <section id="about" className="section-border py-12 sm:py-20 md:py-28 reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="font-mono text-xs text-accent-amber mb-4 sm:mb-6">ABOUT THE ENGINEER</div>
            <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-6 sm:mb-8">
              {about}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-system text-xs">
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-system text-xs">
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a href={`mailto:${personal.email}`} className="btn-system text-xs">
                <Mail className="w-4 h-4" />
                EMAIL
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-surface border border-border p-4 sm:p-6 lift-card">
              <div className="font-mono text-[10px] text-muted-foreground mb-4">CAREER SNAPSHOT</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className={`metric-cell min-h-[110px] sm:min-h-[130px] ${
                      m.span === 2 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-muted-foreground mb-3 sm:mb-4">
                      {m.label}
                    </div>
                    <div className={`font-mono text-2xl sm:text-3xl md:text-4xl font-medium ${accentClass[m.accent]}`}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
