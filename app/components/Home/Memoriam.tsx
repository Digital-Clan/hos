import Link from "next/link";

export default function Memoriam() {
  return (
    <section className="px-5 pb-10 pt-28 home-memoriam text-white">
      <div>
        <span className="block font-general-sans text-detail">IN MEMORIAM</span>
        <h2 className="my-2 max-w-[240px] text-heading-2">A life dedicated to the service of GOD.</h2>
        <p className="text-body-1 text-body-white font-medium font-general-sans mb-4">
          Pastor Paul Adewunmi was a man of exceptional character while he was
          here with us. He lived a life that glorified GOD in his time on earth.
          This section is dedicated to his memory and to the continuation of the
          ministry he started based on instructions given to him by the Holy
          Spirit.
        </p>
        <Link href="/" className="">
          <button className="w-[189px] button button--red border-none outline-none m-0 py-3 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
            <span className="uppercase text-button text-white font-medium font-general-sans">
              Learn More
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
