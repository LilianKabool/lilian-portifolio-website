import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll Down"
      className="group flex flex-col items-center gap-2"
    >
      <span className="text-xs tracking-[0.3em] text-[var(--color-text-secondary)]">
        SCROLL
      </span>

      <ChevronDown
        className="animate-bounce text-[var(--color-accent-gold)]"
        size={22}
      />
    </button>
  );
}

export default ScrollIndicator;