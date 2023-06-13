import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <span className="block text-secondary font-medium mb-2 text-detail font-general-sans">
          OUR MISSION
        </span>
        <h2 className="text-heading-2 font-bold w-[210px] mx-auto">
          Hour of solution is a body that believes.
        </h2>
        <p className="font-general-sans text-body text-body-1 font-medium my-5">
          We are an inter-denominational group of God&apos;s people who believe
          in the saving power of Jesus Christ. Our mission is to raise people
          who are part of God&apos;s End Time Army.
        </p>
        <div>
          <Link href="/">
            <button className="w-[215px] border border-primary button button--blue outline-none m-0 py-3 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
              <span className="text-button text-center text-white font-medium font-general-sans">
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
