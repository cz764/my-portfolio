import Image from "next/image";
import { type Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative gap-0 py-0 text-base transition-shadow hover:shadow-md md:flex-row">
      {project.thumbnailUrl && (
        <div className="relative aspect-[8/5] w-full overflow-hidden md:ml-5 md:w-[45%] md:shrink-0 md:self-center md:rounded-lg">
          <Image
            src={project.thumbnailUrl}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-contain"
          />
        </div>
      )}
      <CardContent className="flex-1 gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="relative z-10 h-7 px-2.5 text-xs"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                  </a>
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{project.timeframe}</p>
          </div>
          {project.logoUrl && (
            <Image
              src={project.logoUrl}
              alt={`${project.title} logo`}
              className="h-12 w-12 rounded-lg object-contain"
              width={48}
              height={48}
            />
          )}
        </div>

        <p className="leading-relaxed text-foreground">{project.description}</p>

        <ul className="space-y-1.5">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-foreground"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/30"
              />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
