import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  text: string;
  route?: string;
  download?: string;
  icon?: ReactNode;
  onClick?: () => void;
};

function Button({
  text,
  route,
  download,
 icon,
  onClick,
}: ButtonProps) {
  const classes =
    "inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent-gold)] px-6 py-3 text-sm transition-all duration-300 hover:bg-[var(--color-accent-gold)] hover:text-black";

  if (download) {
    return (
      <a href={download} download className={classes}>
        {text}
        {icon}
      </a>
    );
  }

  if (route) {
    return (
      <Link to={route} className={classes}>
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
      {icon}
    </button>
  );
}

export default Button;