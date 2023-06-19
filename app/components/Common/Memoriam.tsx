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
        px-5 pb-10 w-full pt-28 text-white lg:pb-20
        ${additionnalClasses && additionnalClasses}
      `)}
    >
      {/* <div className={container-block lg:flex lg:justify-end}> */}
      <div className={twMerge(`
        container-block lg:flex lg:justify-end
        ${containerClasses && containerClasses}
      `)}>
        <div className="lg:max-w-[560px]">
          {children}
          <p
            className={`
          ${showButton ? "mb-8 lg:mb-12" : ""}
          text-body-1 text-body-white font-medium font-general-sans max-w-2xl lg:text-2xl lg:leading-[38px]`}
          >
            {description}
          </p>
          {showButton && (
            <div
              className={twMerge(`
                lg:flex lg:justify-center lg:items-center
                ${buttonClasses && buttonClasses}
              `)}
            >
              <Link href={buttonLink ? buttonLink : "/memorial"}>
                {buttonType === "red" ? (
                  <button className="button button--red border-none outline-none m-0 py-3 px-16 font-medium font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-12 lg:py-6 lg:w-auto lg:font-semibold">
                    <span className="uppercase text-button text-white font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
                      {buttonText ? buttonText : "Learn More"}
                    </span>
                  </button>
                ) : (
                  <button className="button button--transparent border-none outline-none m-0 py-3 px-16 font-medium font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-12 lg:py-6 lg:w-auto lg:font-semibold">
                    <span className="uppercase text-button text-white font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
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
