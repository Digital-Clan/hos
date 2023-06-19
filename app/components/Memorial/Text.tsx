import { twMerge } from "tailwind-merge";

export default function Text({ text, additionnalClasses }: { text: string; additionnalClasses?: string }) {
  return (
    <p
      className={twMerge(
        "font-general-sans text-p1-m font-medium text-body md:text-p1-t lg:text-p1-d",
        additionnalClasses
      )}
    >
      {text}
    </p>
  );
}
