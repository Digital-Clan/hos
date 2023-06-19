import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  showButton?: boolean;
  buttonType?: "red" | "white";
  buttonLink?: string;
  buttonText?: string;
  buttonClasses?: string;
  additionnalClasses?: string;
  children: React.ReactNode;
  description: string;
  containerClasses?: string;
}

export default function Memoriam({
  showButton,
  additionnalClasses,
  children,
  description,
  buttonType,
  buttonLink,
  buttonText,
  buttonClasses,
  containerClasses,
}: Props) {
  return (
    <section
      className={twMerge(`
        w-full px-5 pb-10 pt-28 text-white lg:pb-20
        ${additionnalClasses && additionnalClasses}
      `)}
    >
      <div
        className={twMerge(`
        container-block lg:flex lg:justify-end
        ${containerClasses && containerClasses}
      `)}
      >
        <div className="lg:max-w-[560px]">
          {children}
          <p
            className={`
          ${showButton ? "mb-8 lg:mb-12" : ""}
          max-w-2xl font-general-sans text-p1-m font-medium text-body-white md:text-p1-t lg:text-p1-d`}
          >
            {description}
          </p>
          {showButton && (
            <div
              className={twMerge(`
                lg:flex lg:items-center lg:justify-center
                ${buttonClasses && buttonClasses}
              `)}
            >
              <Link href={buttonLink ? buttonLink : "/memorial"}>
                {buttonType === "red" ? (
                  <button className="button button--red font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-medium outline-none lg:w-auto lg:px-12 lg:py-6 lg:font-semibold">
                    <span className="font-general-sans text-bt-m font-medium uppercase text-white lg:text-bt-d lg:font-semibold">
                      {buttonText ? buttonText : "Learn More"}
                    </span>
                  </button>
                ) : (
                  <button className="button button--transparent font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-medium outline-none lg:w-auto lg:px-12 lg:py-6 lg:font-semibold">
                    <span className="font-general-sans text-bt-m font-medium uppercase text-white lg:text-bt-d lg:font-semibold">
                      {buttonText ? buttonText : "Learn More"}
                    </span>
                  </button>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
