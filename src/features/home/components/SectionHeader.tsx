import GoldDivider from "../../../components/common/GoldDivider";


type SectionHeaderProps = {
  title: string;
  number: string;
};



function SectionHeader({
  title,
  number,
}: SectionHeaderProps) {


  return (

    <div
      className="
      mb-10

      flex
      items-end
      justify-between

      gap-4

      sm:mb-12
      "
    >


      {/* Title Side */}

      <div
        className="
        flex
        flex-col

        gap-2

        min-w-0
        "
      >


        <h2
          className="
          font-display

          truncate

          text-2xl

          text-[var(--color-text-primary)]

          sm:text-3xl

          md:text-4xl
          "
        >
          {title}
        </h2>



        <GoldDivider className="w-12 sm:w-16"/>


      </div>






      {/* Number Side */}

      <div
        className="
        flex
        flex-col

        items-end

        gap-2

        shrink-0
        "
      >


        <span
          className="
          font-mono

          text-xs

          tracking-widest

          text-[var(--color-text-secondary)]

          sm:text-sm
          "
        >
          {number}
        </span>



        <GoldDivider className="w-6 sm:w-8"/>


      </div>



    </div>

  );

}


export default SectionHeader;