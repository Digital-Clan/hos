export default function ValuesBeliefs() {
  const values = ["Growth", "Purpose", "Spirituality", "Worship", "Excellence", "Love", "Leadership"];

  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="w-full bg-[#F2F4FF] px-5 py-8 md:py-10">
          <div className="ml-auto max-w-[624px] lg:px-7">
            <h2 className="mb-4 sm:mb-6">
              <span className="mb-2 block font-general-sans text-xs-m font-medium uppercase text-primary md:text-xs-t lg:mb-0 lg:text-xs-d lg:font-semibold">
                Our
              </span>
              <span className="block text-h3-m font-bold md:text-h3-t lg:text-h3-d">Core Values</span>
            </h2>

            <div className="grid grid-cols-3 gap-x-5 gap-y-3">
              {values.map((value, index) => (
                <div className="flex items-center space-x-3" key={index}>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.00001 13.78L10.3467 9.4333C10.86 8.91997 10.86 8.07997 10.3467 7.56664L6.00001 3.21997"
                      stroke="#777777"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="font-general-sans text-sm-m font-medium text-body sm:text-sm-t lg:text-p1-d">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-light-red px-5 py-8 md:py-10">
          <div className="mr-auto max-w-[624px] lg:px-7">
            <h2 className="mb-4 sm:mb-6">
              <span className="mb-2 block font-general-sans text-xs-m font-medium uppercase text-secondary md:text-xs-t lg:mb-0 lg:text-xs-d lg:font-semibold">
                Our
              </span>
              <span className="block text-h3-m font-bold md:text-h3-t lg:text-h3-d">Beliefs</span>
            </h2>

            <p className="font-general-sans text-sm-m font-medium text-body sm:text-sm-t lg:text-p1-d">
              Lorem ipsum dolor sit amet consectetur elit dolor sit amet, dolor sit amet lorem ipsum sit amet dolor sit
              amet dolor sit amet,lorem ipsum lorem dolor sit. sit amet, dolor sit amet lorem ipsum sit amet dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
