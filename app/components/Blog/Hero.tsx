export default function Hero() {
  return (
    <header className="bg-blog bg-cover bg-center px-5 py-16 text-center text-white sm:py-24 md:px-8 md:py-32 lg:py-36 lg:text-left">
      <div className="container-block">
        <div className="mx-auto w-[280px] sm:w-2/3 lg:mx-0">
          <h1 className="mb-3 text-h1-m font-black md:text-h1-t lg:text-h1-d">Our Blog</h1>
          <p className="font-general-sans text-p1-m text-body-white sm:text-base md:text-p1-t lg:text-p1-d">
            Access the latest spirit inspired words from our blog.
          </p>
        </div>
      </div>
    </header>
  );
}
