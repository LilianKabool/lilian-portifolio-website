import { motion } from "framer-motion";

import ContactLinks from "../../features/home/components/contactLinks";
import FooterBottom from "../../features/home/components/FooterBottom";
import GoldDivider from "../common/GoldDivider";


function Contact() {


  return (

    <footer
      id="contact"
      className="
        border-t
        border-[#2a2a1a]/40

        bg-black

        pt-16
        pb-8
      "
    >


      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



        <div
          className="
            mb-16
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >



          <div className="max-w-2xl">



            {/* Title */}

            <motion.h2

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:false,
                amount:0.4
              }}

              transition={{
                duration:0.8,
                ease:"easeOut"
              }}

              className="
                font-display
                text-3xl
                font-light
                leading-tight

                sm:text-4xl
                lg:text-5xl
              "

            >

              Let's create something meaningful.

            </motion.h2>






            {/* Divider */}

            <motion.div

              initial={{
                scaleX:0,
                opacity:0
              }}

              whileInView={{
                scaleX:1,
                opacity:1
              }}

              viewport={{
                once:false
              }}

              transition={{
                duration:0.7,
                delay:0.2
              }}

              className="origin-left"

            >

              <GoldDivider className="my-5 w-12"/>


            </motion.div>







            {/* Description */}

            <motion.p

              initial={{
                opacity:0,
                y:25
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:false,
                amount:0.4
              }}

              transition={{
                duration:0.7,
                delay:0.3
              }}


              className="
                max-w-xl

                text-sm
                leading-7

                text-[var(--color-text-secondary)]

                sm:text-base
              "

            >

              I'm currently open to new opportunities and interesting
              projects.

              <br className="hidden sm:block"/>

              Let's build something exceptional together.

            </motion.p>







            {/* Contact Links */}


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
                once:false,
                amount:0.3
              }}

              transition={{
                duration:0.7,
                delay:0.5
              }}

              className="mt-10"

            >

              <ContactLinks/>

            </motion.div>



          </div>



        </div>







        {/* Footer Bottom */}


        <motion.div

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          viewport={{
            once:false
          }}

          transition={{
            duration:0.8,
            delay:0.6
          }}

        >

          <FooterBottom/>

        </motion.div>




      </div>



    </footer>

  );

}


export default Contact;