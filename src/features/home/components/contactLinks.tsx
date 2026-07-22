import { Mail,   Globe,ExternalLink } from "lucide-react";


function ContactLinks() {

const links = [
  {
    title: "Email",
    value: "hello@lilian.dev",
    href: "mailto:hello@lilian.dev",
    icon: Mail,
  },

  {
    title: "GitHub",
    value: "github.com/lilian",
    href: "https://github.com",
    icon: Globe,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/lilian",
    href: "https://linkedin.com",
    icon: ExternalLink,
  },
];


return (

<div
className="
mt-8
flex
flex-col
gap-5

sm:flex-row
sm:flex-wrap
sm:gap-8
"
>


{
links.map((link)=>{

const Icon = link.icon;


return (

<a
key={link.title}
href={link.href}
target={link.title !== "Email" ? "_blank" : undefined}
rel="noreferrer"

className="
group
flex
items-center
gap-3

transition-opacity
hover:opacity-80
"
>


<div
className="
flex
h-9
w-9

items-center
justify-center

rounded-lg

border
border-[var(--color-accent-gold)]/40

bg-[var(--color-accent-gold)]/5

text-[var(--color-accent-gold)]

transition-all

group-hover:border-[var(--color-accent-gold)]
"
>

<Icon size={18}/>

</div>



<div>

<span
className="
block
text-xs
font-medium
text-[var(--color-text-primary)]
"
>
{link.title}
</span>


<span
className="
block
text-xs

text-[var(--color-text-secondary)]
"
>
{link.value}
</span>


</div>


</a>

)

})

}


</div>

)

}


export default ContactLinks;