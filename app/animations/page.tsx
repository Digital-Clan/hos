import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="mb-10">Animations & Transitions</h1>

      <div className="bg-primary p-8">
        <button className="button button--white border-none outline-none m-0 py-2 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
          <span className="text-button">Get Started</span>
        </button>
      </div>

      <div className="bg-[rgba(18,18,18,0.8)] p-8 mt-5">
        <button className="button button--white border-none outline-none m-0 py-2 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
          <span className="text-button">Get Started</span>
        </button>
      </div>

      <div className="bg-primary p-8">
        <Link href="/" className="link text-[22px] font-semibold font-general-sans">Terms and Conditions</Link>
      </div>
    </div>
  );
}
