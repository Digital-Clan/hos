import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="mb-10">Animations & Transitions</h1>

      <div className="bg-primary p-8">
        <button className="button button--white font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-8 py-2 font-bold outline-none">
          <span className="text-button">Get Started</span>
        </button>
      </div>

      <div className="mt-5 bg-[rgba(18,18,18,0.8)] p-8">
        <button className="button button--white font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-8 py-2 font-bold outline-none">
          <span className="text-button">Get Started</span>
        </button>
      </div>

      <div className="bg-primary p-8">
        <Link href="/" className="link font-general-sans text-[22px] font-semibold">
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
}
