import { PersonModule } from "@faker-js/faker";

export interface ProjectsProps {
  isLoading: boolean;
  person: PersonModule | undefined;
}

export default function Projects({ isLoading, person }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        {isLoading && <p className="text-center text-gray-600">Loading...</p>}
        {person && (
          <p className="text-center text-gray-600">{person.fullName()}</p>
        )}
      </div>
    </section>
  );
}
