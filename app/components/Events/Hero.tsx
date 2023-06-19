export default function Hero() {
  return (
    <header className="bg-events-m bg-cover bg-center px-5 py-16 text-center text-white sm:py-24 md:px-8 md:py-32 lg:bg-events-d lg:bg-right lg:py-36 lg:text-left">
      <div className="container-block">
        <div className="mx-auto w-[180px] sm:w-2/3 lg:mx-0">
          <h1 className="text-heading-1 mb-3 font-black md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[65px]">
            Our Events
          </h1>
          <p className="para-1x font-general-sans text-body-white sm:text-base md:text-lg lg:text-2xl">
            Explore the latest events at Hour of Solution
          </p>
        </div>
      </div>
    </header>
  );
}
