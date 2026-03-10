import { experienceHighlights, testimonial } from "@/data/content";

const ExperienceHighlights = () => {
  return (
    <section id="highlights" className="section-border py-10 sm:py-14 md:py-16 reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="font-mono text-xs text-accent-amber mb-5">EXPERIENCE HIGHLIGHTS</div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="border border-border p-4 bg-surface lift-card">
            <ul className="space-y-2">
              {experienceHighlights.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-4 bg-surface lift-card">
            <div className="font-mono text-[10px] text-accent-amber mb-2">TESTIMONIAL</div>
            <p className="text-sm text-muted-foreground italic">“{testimonial.quote}”</p>
            <p className="font-mono text-[10px] text-muted-foreground mt-3">— {testimonial.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
