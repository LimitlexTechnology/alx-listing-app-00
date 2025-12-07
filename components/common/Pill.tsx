import { ReactNode } from "react";

export default function Pill({
  title,
  selected,
  onClick,
  icon,
}: {
  title: string;
  selected?: boolean;
  onClick?: (title: string) => void;
  icon?: ReactNode;
}) {
  return (
    <button
      className={`text-[13px]/[1.5] md:text-[15px] lg:text-[19px] text-nowrap px-6 py-2.5 rounded-full border font-semibold transition flex flex-row gap-2 items-center ${
        selected ? "text-[#161117] border-[#161117]" : "text-[#8C8C8C] border-[#e9e9e9]"
      }`}
      onClick={() => onClick?.(title)}
      aria-pressed={selected}
    >
      {icon}
      {title}
    </button>
  );
}

