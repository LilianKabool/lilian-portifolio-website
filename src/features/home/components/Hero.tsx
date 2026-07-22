import { motion } from "framer-motion";

import Button from "../../../components/common/Button";
import GoldDivider from "../../../components/common/GoldDivider";
import ScrollIndicator from "../../../components/common/ScrollIndicator";

import { ArrowRight } from "lucide-react";


function Hero() {


  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };



  const downloadCV = () => {

    const link = document.createElement("a");

    link.href = "/cv.pdf";
    link.download = "Lilian-CV.pdf";

    link.click();

  };



  return (

    <section
      className="
      relative
      flex
      min-h-[calc(100vh-88px)]

      flex-col
      justify-center

      overflow-hidden

      py-10
      sm:py-12
      "
    >



      <div
        className="
        mx-auto
        w-full
        max-w-7xl

        px-5
        sm:px-6
        "
      >




        {/* NAME */}


        <motion.h1

          initial={{
            opacity:0,
            y:40,
            scale:0.92,
            filter:"blur(14px)",
            letterSpacing:"0.35em"
          }}


          animate={{
            opacity:1,
            y:0,
            scale:1,
            filter:"blur(0px)",
            letterSpacing:"0.15em"
          }}


          transition={{
            duration:1.2,
            ease:[0.22,1,0.36,1]
          }}


          className="
          font-display

          text-6xl
          leading-none

          font-semibold

          text-[var(--color-accent-gold)]

          sm:text-8xl

          lg:text-9xl

          "

        >

          LILIAN

        </motion.h1>








        {/* TITLE */}


        <motion.h2


          initial={{
            opacity:0,
            x:80
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            delay:0.35,
            duration:0.9,
            ease:[0.22,1,0.36,1]
          }}


          className="
          mt-4

          font-display

          text-2xl
          font-light

          tracking-wide

          text-[var(--color-text-primary)]

          sm:text-4xl

          lg:text-5xl

          "

        >

          Frontend Developer

        </motion.h2>










        {/* DESCRIPTION */}



        <motion.p


          initial={{
            opacity:0,
            y:25
          }}


          animate={{
            opacity:1,
            y:0
          }}


          transition={{
            delay:0.6,
            duration:0.8
          }}



          className="
          mt-5

          max-w-xl

          text-base

          leading-relaxed

          text-[var(--color-text-secondary)]

          sm:text-lg

          lg:text-xl

          "

        >

          Crafting modern web experiences

          <br className="hidden sm:block"/>

          with clean code and attention to detail.

        </motion.p>









        {/* DIVIDER */}



        <motion.div


          initial={{
            scaleX:0,
            opacity:0
          }}


          animate={{
            scaleX:1,
            opacity:1
          }}


          transition={{
            delay:0.85,
            duration:0.8
          }}


          className="
          origin-left
          "

        >

          <GoldDivider
            className="
            my-6
            w-12
            sm:w-16
            "
          />


        </motion.div>









        {/* BUTTONS */}



        <motion.div


          initial={{
            opacity:0,
            y:30
          }}


          animate={{
            opacity:1,
            y:0
          }}


          transition={{
            delay:1,
            duration:0.8,
            type:"spring",
            stiffness:90
          }}



          className="
          flex

          flex-col

          gap-3

          sm:flex-row

          sm:gap-4

          "

        >


          <Button

            text="View Work"

            onClick={scrollToProjects}

            icon={
              <ArrowRight size={18}/>
            }

          />




          <Button

            text="Download CV"

            onClick={downloadCV}

          />



        </motion.div>





      </div>









      {/* SCROLL */}



      <motion.div


        initial={{
          opacity:0,
          y:20
        }}


        animate={{
          opacity:1,
          y:[0,12,0]
        }}


        transition={{
          opacity:{
            delay:1.5,
            duration:0.8
          },

          y:{
            delay:1.5,
            duration:1.8,
            repeat:Infinity,
            ease:"easeInOut"
          }
        }}



        className="
        absolute

        bottom-5

        left-1/2

        -translate-x-1/2

        "

      >

        <ScrollIndicator/>


      </motion.div>





    </section>

  );

}


export default Hero;