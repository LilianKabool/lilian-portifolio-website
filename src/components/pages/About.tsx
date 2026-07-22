import SectionHeader from "../../features/home/components/SectionHeader";
import aboutData from "../../features/home/data/aboutData";
import AboutCard from "../../features/home/components/aboutCard";
import Reveal from "../../components/common/Reveal";

function About() {
  return (
    <section
      id="about"
      className="
        bg-[#0b0b0c]
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
      "
    >

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Title Animation */}
        <Reveal direction="left">
          <SectionHeader 
            title="About Me" 
            number="01" 
          />
        </Reveal>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {aboutData.map((item, index) => (

            <Reveal
              key={item.id}
              delay={index * 0.15}
              direction="up"
            >

              <AboutCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;