import { ArrowUp } from "lucide-react";


function FooterBottom() {


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };



  return (

    <div
      className="
      flex

      flex-col
      gap-4

      border-t
      border-[#2a2a1a]/40

      pt-6

      text-xs

      text-[var(--color-text-secondary)]

      sm:flex-row
      sm:items-center
      sm:justify-between
      "
    >



      <p>
        © {new Date().getFullYear()} LILIAN. All rights reserved.
      </p>





      <button

        type="button"

        onClick={scrollToTop}

        aria-label="Scroll to top"

        className="
        flex

        h-9
        w-9

        items-center
        justify-center

        self-end

        rounded-md

        border
        border-[var(--color-accent-gold)]/40

        bg-[var(--color-accent-gold)]/5

        text-[var(--color-accent-gold)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:bg-[var(--color-accent-gold)]

        hover:text-black

        focus:outline-none

        focus:ring-2

        focus:ring-[var(--color-accent-gold)]

        sm:self-auto
        "
      >

        <ArrowUp size={16}/>

      </button>



    </div>

  );

}


export default FooterBottom;