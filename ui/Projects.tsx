import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const professionalProjects = projects.filter(
    (p) => p.type === "professional",
  );
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects" className="px-8 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Professional Experiences
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
