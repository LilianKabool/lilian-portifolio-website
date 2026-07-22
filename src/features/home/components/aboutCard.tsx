type AboutCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function AboutCard({
  icon: Icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        justify-between

        rounded-xl
        border
        border-[#2a2a1a]/60
        bg-[#121212]

        p-5
        sm:p-6
        lg:p-8

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-[var(--color-accent-gold)]/40
        hover:bg-[#171717]
        hover:shadow-xl
        hover:shadow-[var(--color-accent-gold)]/10
      "
    >
      <div>
        {/* Icon */}
        <div
          className="
            mb-5
            flex
            h-10
            w-10
            sm:h-12
            sm:w-12

            items-center
            justify-center

            rounded-lg

            border
            border-[var(--color-accent-gold)]/30

            bg-[var(--color-accent-gold)]/5

            text-[var(--color-accent-gold)]

            transition-all
            duration-500

            group-hover:rotate-6
            group-hover:scale-110
            group-hover:border-[var(--color-accent-gold)]
            group-hover:bg-[var(--color-accent-gold)]/10
          "
        >
          <Icon
            size={20}
            className="sm:h-[22px] sm:w-[22px]"
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mb-3

            text-lg
            sm:text-xl

            font-medium
            tracking-wide

            text-[var(--color-text-primary)]

            transition-colors
            duration-300

            group-hover:text-[var(--color-accent-gold)]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-sm
            leading-relaxed

            text-[var(--color-text-secondary)]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;