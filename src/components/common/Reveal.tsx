import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
};


function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {


  const animations = {

    up: {
      hidden: {
        opacity: 0,
        y: 50,
      },

      visible: {
        opacity: 1,
        y: 0,
      },
    },


    left: {
      hidden: {
        opacity: 0,
        x: -50,
      },

      visible: {
        opacity: 1,
        x: 0,
      },
    },


    right: {
      hidden: {
        opacity: 0,
        x: 50,
      },

      visible: {
        opacity: 1,
        x: 0,
      },
    },

  };



  return (

    <motion.div

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: false,   // ⭐ يعيد الأنيميشن كل مرة
        amount: 0.2,
      }}

      variants={animations[direction]}

      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}

    >

      {children}

    </motion.div>

  );

}


export default Reveal;