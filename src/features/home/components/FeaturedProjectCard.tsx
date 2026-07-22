import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";


type FeaturedProjectProps = {
  project: Project;
  number?: number;
};


function FeaturedProjectCard({
  project,
  number = 1,
}: FeaturedProjectProps) {


  const formattedNumber = String(number).padStart(2, "0");


  return (

    <article
      className="
      group

      overflow-hidden

      rounded-2xl

      border
      border-[#2a2a1a]/60

      bg-[#121212]

      p-5
      sm:p-8
      lg:p-10

      transition-all
      duration-300

      hover:border-[var(--color-accent-gold)]/40
      "
    >


      <div
        className="
        grid
        grid-cols-1

        gap-8

        lg:grid-cols-12

        items-center
        "
      >


        {/* Project Information */}

        <div
          className="
          flex
          flex-col

          lg:col-span-5
          "
        >


          <span
            className="
            font-display

            text-4xl
            sm:text-5xl

            text-[var(--color-accent-gold)]
            "
          >
            {formattedNumber}
          </span>



          <h3
            className="
            mt-4

            font-display

            text-2xl
            sm:text-3xl

            font-semibold

            text-[var(--color-text-primary)]
            "
          >
            {project.title}
          </h3>



          <p
            className="
            mt-4

            text-sm
            sm:text-base

            leading-relaxed

            text-[var(--color-text-secondary)]
            "
          >
            {project.description}
          </p>



          {/* Tags */}

          {
            project.tags?.length > 0 && (

            <div
              className="
              mt-6

              flex
              flex-wrap

              gap-2
              "
            >

              {
                project.tags.map((tag)=>(
                  
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

                ))
              }


            </div>

            )
          }





          {/* Button */}

          <a
            href={
              project.caseStudyUrl ??
              project.projectUrl
            }

            target="_blank"

            rel="noreferrer"

            className="
            group/link

            mt-8

            flex
            items-center

            gap-2

            text-sm
            font-medium

            text-[var(--color-text-primary)]

            transition-colors

            hover:text-[var(--color-accent-gold)]
            "
          >


            <span>
              View Case Study
            </span>


            <ArrowUpRight

              size={16}

              className="
              transition-transform

              group-hover/link:-translate-y-0.5

              group-hover/link:translate-x-0.5
              "

            />


          </a>


        </div>







        {/* Project Image */}


        <div
          className="
          overflow-hidden

          rounded-xl

          border
          border-[#2a2a1a]/40

          lg:col-span-7

          aspect-video
          "
        >

          <img

            src={project.image}

            alt={project.title}

            loading="lazy"

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


    </article>


  );

}


export default FeaturedProjectCard;