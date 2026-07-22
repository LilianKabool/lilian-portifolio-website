import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import Button from "./Button";
import { navLinks } from "../../constants/navigation";



const menuVariants: Variants = {

  hidden:{
    opacity:0,
    height:0,
    y:-20
  },


  show:{
    opacity:1,
    height:"auto",
    y:0,

    transition:{
      duration:0.35,
      ease:[0.22,1,0.36,1]
    }
  },


  exit:{
    opacity:0,
    height:0,
    y:-20,

    transition:{
      duration:0.25,
      ease:[0.22,1,0.36,1]
    }
  }

};





const navContainerVariants: Variants = {

  hidden:{},

  show:{

    transition:{
      staggerChildren:0.12
    }

  }

};





const navItemVariants: Variants = {

  hidden:{
    opacity:0,
    y:-20
  },


  show:{
    opacity:1,
    y:0,

    transition:{
      duration:0.5,
      ease:[0.22,1,0.36,1]
    }
  }

};





function Navbar() {


  const [isOpen,setIsOpen] = useState(false);




  return (

<nav
className="
border-b
border-[var(--color-muted)]/70

bg-black/80

backdrop-blur-md

sticky
top-0

z-50
"
>



<div
className="
mx-auto

flex

h-20

max-w-7xl

items-center

justify-between

px-5

sm:px-6
"
>





{/* Logo */}


<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.7,
ease:[0.22,1,0.36,1]
}}

>


<Link

to="/"

className="
font-display

text-3xl

sm:text-4xl

text-[var(--color-accent-gold)]

transition-transform

duration-300

hover:scale-105
"

>

LILIAN

</Link>


</motion.div>







{/* Desktop Menu */}


<motion.div


className="
hidden

items-center

gap-8

md:flex
"


variants={navContainerVariants}

initial="hidden"

animate="show"


>


{

navLinks.map((link)=>(


<motion.div

key={link.path}

variants={navItemVariants}

>


<Link

to={link.path}

className="
text-sm

text-[var(--color-text-secondary)]

transition-colors

duration-300

hover:text-[var(--color-text-primary)]
"

>

{link.label}

</Link>


</motion.div>


))

}


</motion.div>







{/* Desktop CV */}


<motion.div

className="
hidden

md:block
"

initial={{

opacity:0,

x:40

}}

animate={{

opacity:1,

x:0

}}

transition={{

duration:0.7,

ease:[0.22,1,0.36,1]

}}

>


<Button

text="Download CV"

download="/cv.pdf"

/>


</motion.div>









{/* Mobile Button */}


<motion.button


whileTap={{

scale:0.9

}}


onClick={()=>setIsOpen(!isOpen)}


className="
md:hidden

text-[var(--color-text-primary)]
"


aria-label="menu"


>


{

isOpen ?

<X size={28}/>

:

<Menu size={28}/>

}


</motion.button>




</div>









{/* Mobile Menu */}


<AnimatePresence>


{

isOpen && (


<motion.div


variants={menuVariants}

initial="hidden"

animate="show"

exit="exit"


className="
overflow-hidden

border-t

border-[var(--color-muted)]/70

bg-black

md:hidden
"


>


<div

className="
flex

flex-col

gap-6

px-5

py-6
"

>


{

navLinks.map((link,index)=>(


<motion.div

key={link.path}


initial={{

opacity:0,

x:-30

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:index*0.08,

duration:0.4

}}


>


<Link

to={link.path}

onClick={()=>setIsOpen(false)}


className="
text-[var(--color-text-secondary)]

transition-colors

hover:text-[var(--color-text-primary)]
"

>

{link.label}

</Link>


</motion.div>


))


}





<motion.div


initial={{

opacity:0,

y:20

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:0.3

}}


>


<Button

text="Download CV"

download="/cv.pdf"

/>


</motion.div>





</div>


</motion.div>


)

}


</AnimatePresence>





</nav>

  );

}



export default Navbar;