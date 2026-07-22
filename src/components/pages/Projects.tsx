import SectionHeader from "../../features/home/components/SectionHeader";
import FeaturedProjectCard from "../../features/home/components/FeaturedProjectCard";
import ProjectCard from "../../features/home/components/ProjectCard";
import projectsData from "../../features/home/data/projectsData";
import Reveal from "../../components/common/Reveal";


function Projects() {

  const featuredProject = projectsData[0];

  const otherProjects = projectsData.slice(1);


  return (

    <section
      id="projects"
      className="
        bg-black
        py-16
        md:py-20
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}

        <Reveal direction="left">

          <SectionHeader
            title="Selected Work"
            number="02"
          />

        </Reveal>



        {/* Mobile */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:hidden
          "
        >

          {
            projectsData.map((project,index)=>(

              <Reveal
                key={project.id}
                delay={index * 0.15}
                direction="left"
              >

                <ProjectCard
                  project={project}
                  number={index + 1}
                />

              </Reveal>

            ))
          }


        </div>





        {/* Desktop */}

        <div className="hidden lg:block">


          {
            featuredProject && (

              <Reveal direction="up">

                <FeaturedProjectCard
                  project={featuredProject}
                />

              </Reveal>

            )
          }




          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-6
            "
          >

            {
              otherProjects.map((project,index)=>(


                <Reveal

                  key={project.id}

                  delay={index * 0.15}

                  direction={
                    index % 2 === 0
                    ? "left"
                    : "right"
                  }

                >


                  <ProjectCard

                    project={project}

                    number={index + 2}

                  />


                </Reveal>


              ))
            }


          </div>



        </div>


      </div>


    </section>

  );

}


export default Projects;