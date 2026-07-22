import { motion } from "framer-motion";

import SectionHeader from "../../features/home/components/SectionHeader";
import TechCard from "../../features/home/components/TechCard";
import techStack from "../../features/home/data/techStack";


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.85,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



function Technologies() {


  return (

    <section
      id="technologies"
      className="bg-[#0b0b0c] py-16 md:py-20"
    >


      <div className="mx-auto max-w-7xl px-4 sm:px-6">



        {/* Header Animation */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            amount:0.3
          }}

          transition={{
            duration:0.7
          }}

        >

          <SectionHeader
            title="Technologies"
            number="04"
          />

        </motion.div>





        {/* Cards Animation */}


        <motion.div

          className="
          grid
          grid-cols-2
          gap-4

          sm:grid-cols-3

          md:grid-cols-4

          lg:grid-cols-7

          md:gap-6
          "

          variants={containerVariants}

          initial="hidden"

          whileInView="show"

          viewport={{
            amount:0.2
          }}

        >


          {
            techStack.map((tech)=>(

              <motion.div

                key={tech.name}

                variants={itemVariants}

                whileHover={{
                  y:-8,
                  scale:1.03
                }}

                transition={{
                  duration:0.3
                }}

              >

                <TechCard
                  tech={tech}
                />

              </motion.div>

            ))
          }


        </motion.div>


      </div>


    </section>

  );

}


export default Technologies;