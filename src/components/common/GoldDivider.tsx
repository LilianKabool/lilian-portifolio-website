type GoldDividerProps = {
  className?: string;
};

function GoldDivider({ className  }: GoldDividerProps) {
  return (
    <div
      className={`h-[1px] bg-[#C6A15B] ${className}`}
    />
  );
}

export default GoldDivider;