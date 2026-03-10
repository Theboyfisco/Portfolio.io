import { useState } from "react";
import { projects, Project } from "@/data/content";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import RoleSwitcher from "./RoleSwitcher";

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => (
  <div className="bg-surface border border-border p-4 sm:p-5 flex flex-col lift-card">
    <img
      src={project.screenshot}
      alt={`${project.name} screenshot`}
      loading="lazy"
      className="w-full h-40 object-cover border border-border mb-3 image-hover"
    />
    <div className="mb-3">
      <h3 className="font-display text-base sm:text-lg">{project.name}</h3>
      <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">{project.subtitle} · {project.period}</p>
    </div>
    <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-1">{project.problem}</p>
    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4">
      {project.stack.map((t) => (
        <span key={t} className="font-mono text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 border border-border text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-system text-[10px] sm:text-xs">
        <ExternalLink className="w-3 h-3" /> LIVE
      </a>
      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-system text-[10px] sm:text-xs">
        <Github className="w-3 h-3" /> REPO
      </a>
      <button onClick={onOpen} className="sm:ml-auto btn-primary-system text-[10px] sm:text-xs">
        <ArrowRight className="w-3 h-3" /> CASE STUDY
      </button>
    </div>
  </div>
);

const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-2 sm:p-4"
    onClick={onClose}
  >
    <div
      className="w-full max-w-5xl my-4 sm:my-8 md:my-16 bg-surface border border-border"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 md:p-6 border-b border-border gap-3">
        <div>
          <h2 className="font-display text-lg sm:text-xl md:text-2xl">{project.name}</h2>
          <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">{project.subtitle} · {project.period}</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-system text-[10px] sm:text-xs">
            <ExternalLink className="w-3 h-3" /> LIVE
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-system text-[10px] sm:text-xs">
            <Github className="w-3 h-3" /> REPO
          </a>
          <button onClick={onClose} className="btn-system p-1.5 sm:p-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 border-b border-border grid md:grid-cols-2 gap-4">
        <img src={project.screenshot} alt={`${project.name} screenshot`} loading="lazy" className="w-full border border-border" />
        <img src={project.demoGif} alt={`${project.name} demo`} loading="lazy" className="w-full border border-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        <div className="bg-surface p-4 sm:p-6 space-y-4">
          {[
            { label: "PROBLEM", text: project.problem },
            { label: "CONSTRAINTS", text: project.constraints },
            { label: "SOLUTION", text: project.solution },
            { label: "IMPACT", text: project.impact },
            { label: "KEY TRADEOFFS", text: project.keyTradeoffs },
            { label: "WHAT I'D IMPROVE NEXT", text: project.improvements },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[10px] text-accent-amber mb-1.5">{item.label}</div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-surface p-4 sm:p-6">
          {project.hasRoleSwitcher && project.roles ? (
            <RoleSwitcher roles={project.roles} />
          ) : (
            <div className="h-full flex flex-col">
              <div className="font-mono text-[10px] text-muted-foreground mb-4">STACK</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1.5 border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ProjectGrid = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-border py-10 sm:py-14 md:py-20 bg-surface reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="font-mono text-xs text-accent-amber mb-5 sm:mb-6">PROJECTS</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setOpenProject(p)} />
          ))}
        </div>
      </div>

      {openProject && <CaseStudyModal project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
};

export default ProjectGrid;
