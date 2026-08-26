import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col border border-stone-100/50 hover:border-stone-200 hover:scale-[1.01]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-stone-500 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {project.timeframe}
          </p>
        </div>
        {project.logoUrl && (
          <img
            src={project.logoUrl}
            alt={`${project.title} logo`}
            className="h-14 w-14 object-contain rounded-lg"
          />
        )}
      </div>

      <p className="text-stone-600 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6 flex-grow">
        <h4 className="text-sm font-semibold text-stone-700 mb-3">
          Highlights
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-stone-600 flex items-start">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 mr-2 font-bold">
                •
              </span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-stone-50 to-stone-100 text-stone-700 rounded-full border border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-3 pt-6 border-t border-stone-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:text-white bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 border border-stone-200 rounded-full transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-violet-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-rose-500 border border-violet-500 rounded-full transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const professionalProjects = projects.filter(
    (p) => p.type === "professional",
  );
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects" className="pt-0 pb-20 px-8 relative overflow-hidden">
      {/* Slightly darker animated neutral gradient for subtle separation */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-violet-50 animate-gradient-shift" />
      {/* Gradient overlay for smooth transition from Hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-50 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-40 right-40 w-96 h-96 bg-gradient-to-br from-stone-100 to-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-stone-100 to-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 text-stone-800 flex items-center gap-3">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 text-stone-800 flex items-center gap-3">
            <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
              Professional Experiences
            </span>
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
