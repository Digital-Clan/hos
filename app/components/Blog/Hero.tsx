export default function Hero() {
  return (
    <header className="px-5 md:px-8 py-16 text-center blog-hero bg-cover bg-center text-white lg:text-left sm:py-24 md:py-32 lg:py-36">
      <div className="container-block">
        <div className="w-[280px] mx-auto sm:w-2/3 lg:mx-0">
          <h1 className="text-heading-1 mb-3 font-black md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[65px]">
            Our Blog
          </h1>
          <p className="font-general-sans para-1x text-body-white sm:text-base md:text-lg lg:text-2xl">
            Access the latest spirit inspired words from our blog.
          </p>
        </div>
      </div>
    </header>
  );
}
