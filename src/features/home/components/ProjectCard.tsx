import { ArrowUpRight } from "lucide-react";

import type { Project } from "../data/projects";


type ProjectCardProps = {
  project: Project;
  number: number;
};

function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <div
      className="
group
flex
flex-col
justify-between
overflow-hidden
rounded-2xl
border
border-[#2a2a1a]/60
bg-[#121212]
p-6
md:p-8
transition-all
duration-300
hover:border-[var(--color-accent-gold)]/40
"
    >
      <div>
        {/* Number + Image */}

        <div className="mb-6 flex items-start justify-between gap-4">
          <span
            className="
font-display
text-4xl
text-[var(--color-accent-gold)]
"
          >
            {String(number).padStart(2, "0")}
          </span>

          <div
            className="
h-28
w-40
overflow-hidden
rounded-lg
"
          >
            <img
              src={project.image}
              alt={project.title}
              className="
h-full
w-full
object-cover
transition-transform
duration-500
group-hover:scale-105
"
            />
          </div>
        </div>

        <h3
          className="
font-display
text-xl
font-semibold
text-[var(--color-text-primary)]
md:text-2xl
"
        >
          {project.title}
        </h3>

        <p
          className="
mt-3
text-sm
leading-relaxed
text-[var(--color-text-secondary)]
"
        >
          {project.description}
        </p>

        {/* Tags */}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="
rounded-full
border
border-[var(--color-muted)]/30
bg-[#1a1a1a]
px-3
py-1
text-xs
text-[var(--color-text-secondary)]
"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.projectUrl}
        className="
mt-6
flex
items-center
gap-2
text-sm
text-[var(--color-text-primary)]
transition-colors
hover:text-[var(--color-accent-gold)]
"
      >
        View Project
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

export default ProjectCard;
