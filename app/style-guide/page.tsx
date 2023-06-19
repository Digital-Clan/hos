export default function Page() {
  return (
    <div className="p-5 lg:px-8">
      <h1 className="font-aeonik mb-10 text-4xl font-black text-primary">Style Guide</h1>

      <h1 className="font-aeonik mb-2 text-4xl font-black text-primary">Hour of Solution Website</h1>
      <h1 className="font-aeonik mb-2 text-4xl font-bold text-primary">Hour of Solution Website</h1>
      <h1 className="font-aeonik mb-2 text-4xl font-medium text-primary">Hour of Solution Website</h1>

      <div className="my-10" />

      <h1 className="mb-2 font-general-sans text-4xl font-normal text-primary">Hour of Solution Website</h1>
      <h1 className="mb-2 font-general-sans text-4xl font-medium text-primary">Hour of Solution Website</h1>
      <h1 className="mb-2 font-general-sans text-4xl font-semibold text-primary">Hour of Solution Website</h1>

      <div className="my-10" />

      <div className="flex flex-col space-y-3">
        <p className="text-smallest font-aeonik text-primary">I am here testing the stuff - Smallest Text</p>
        <p className="text-detail font-aeonik text-primary">I am here testing the stuff - Detail Text</p>
        <p className="font-aeonik text-body text-primary">I am here testing the stuff - Body Text</p>
        <button className="text-button font-aeonik rounded-3xl bg-primary px-8 py-2 text-white">
          I am here testing the stuff - Button Text
        </button>
        <p className="text-heading-4 font-aeonik text-primary">I am here testing the stuff - Heading 4 Text</p>
        <p className="text-heading-3 font-aeonik text-primary">I am here testing the stuff - Heading 2 Text</p>
        <p className="text-heading-2 font-aeonik text-primary">I am here testing the stuff - Heading 2 Text</p>
        <p className="text-heading-1 font-aeonik text-primary">I am here testing the stuff - Heading 1 Text</p>
      </div>
    </div>
  );
}
