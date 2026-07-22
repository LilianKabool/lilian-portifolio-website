import type { Technology } from "../data/technology";


type TechCardProps = {
  tech: Technology;
};



function TechCard({tech}:TechCardProps) {


return (

<div
className="
group
flex
flex-col
items-center
justify-center
gap-3
rounded-xl
border
border-[#2a2a1a]/60
bg-[#121212]
p-6
transition-all
duration-300
hover:-translate-y-1
hover:border-[var(--color-accent-gold)]/40
hover:bg-[#181818]
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
grayscale
transition-all
duration-300
group-hover:grayscale-0
"
>


<img

src={tech.icon}

alt={tech.name}

className="
h-8
w-8
object-contain
"

/>


</div>




<span
className="
text-xs
font-medium
tracking-wide
text-[var(--color-text-secondary)]
transition-colors
group-hover:text-[var(--color-text-primary)]
"
>

{tech.name}

</span>



</div>

)


}


export default TechCard;