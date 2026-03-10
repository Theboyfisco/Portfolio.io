import { experience, education } from "@/data/content";

const Timeline = () => {
  return (
    <section id="experience" className="section-border py-10 sm:py-14 md:py-16 bg-surface reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="font-mono text-xs text-accent-amber mb-6 sm:mb-8">EXPERIENCE & EDUCATION</div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Experience */}
          <div>
            {experience.map((exp) => (
              <div key={exp.title} className="relative pl-5 sm:pl-6 border-l border-border">
                <div className="absolute left-0 top-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[hsl(var(--accent-green))] -translate-x-[6px] sm:-translate-x-[7px]" />
                <div className="font-mono text-[10px] text-muted-foreground mb-1">{exp.period}</div>
                <h3 className="font-display text-xs sm:text-sm mb-1">{exp.title}</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">{exp.org} · {exp.location}</p>
                <ul className="space-y-1 sm:space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-border flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            {education.map((edu) => (
              <div key={edu.degree} className="relative pl-5 sm:pl-6 border-l border-border">
                <div className="absolute left-0 top-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[hsl(var(--accent-blue))] -translate-x-[6px] sm:-translate-x-[7px]" />
                <div className="font-mono text-[10px] text-muted-foreground mb-1">{edu.period}</div>
                <h3 className="font-display text-xs sm:text-sm mb-1">{edu.degree}</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-1">{edu.school} · {edu.location}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{edu.grade}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Core: {edu.core}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
