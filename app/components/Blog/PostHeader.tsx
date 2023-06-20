export default function PostHeader() {
  return (
    <section className="bg-black px-5 pb-44 pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[350px] text-center text-white md:max-w-2xl">
        <span className="rounded-[40px] border-[1.5px] border-[#FEFEFE] px-8 py-2 font-general-sans text-xs-m font-medium uppercase transition-colors duration-200 ease-in-out hover:bg-white hover:text-black md:text-xs-t lg:text-h4-d">
          Blog
        </span>
        <h1 className="my-5 text-h1-m font-black md:my-8 md:text-h1-t lg:my-10 lg:text-h1-d">
          Budding Character for Great and mighty things.
        </h1>
        <p className="text-h4-m font-bold md:text-h4-t lg:text-h4-d lg:font-medium">May 12, 2023</p>
      </div>
    </section>
  );
}
