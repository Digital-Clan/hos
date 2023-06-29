export default function Hero({ isFinal }: { isFinal: boolean }) {
  return (
    <header className="bg-donate bg-cover bg-right px-8 py-20 text-white sm:py-24 md:py-32 lg:bg-center lg:pb-72 lg:pt-28">
      <div className="mx-auto max-w-[578px] text-center lg:max-w-3xl">
        <h1 className="mb-5 text-h1-m font-black md:text-h1-t lg:mb-8 lg:text-h1-d">
          {!isFinal ? "Support our cause" : "Thank you for supporting our cause."}
        </h1>
        {!isFinal && (
          <p className="font-general-sans text-p1-m text-body-white sm:text-base md:text-p1-t lg:text-p1-d">
            Contribute to what God is doing in the lives of people around the world through your generosity.
          </p>
        )}
      </div>
    </header>
  );
}
