import { Suspense, lazy } from "react";
import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import Timeline from "@/components/Timeline";
import AILab from "@/components/AILab";
import Contact from "@/components/Contact";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import { personal } from "@/data/content";

const ProjectGrid = lazy(() => import("@/components/ProjectGrid"));
const Terminal = lazy(() => import("@/components/Terminal"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Hero />
      <AboutBento />
      <Suspense fallback={<div className="section-border py-10 text-center font-mono text-xs text-muted-foreground">Loading projects...</div>}>
        <ProjectGrid />
      </Suspense>
      <ExperienceHighlights />
      <Suspense fallback={<div className="section-border py-10 text-center font-mono text-xs text-muted-foreground">Loading terminal...</div>}>
        <Terminal />
      </Suspense>
      <Timeline />
      <AILab />
      <Contact />

      <footer className="border-t border-border py-4 sm:py-5">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 text-center space-y-1">
          <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">
            SUBSYSTEM 7 · BUILT WITH CONVICTION · © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">
            {personal.email} · {personal.location}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
