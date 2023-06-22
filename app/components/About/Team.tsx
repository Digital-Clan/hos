/* eslint-disable @next/next/no-img-element */
function Card() {
  return (
    <div className="group h-96 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
            alt=""
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Jane Doe</h1>
            <p className="text-lg">Photographer & Art</p>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className="mt-2 rounded-md bg-neutral-800 px-2 py-1 text-sm hover:bg-neutral-900">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const team = [
    {
      id: 1,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
    {
      id: 2,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
    {
      id: 3,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
    {
      id: 4,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
    {
      id: 5,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
    {
      id: 6,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
    },
  ];

  return (
    <section className="px-5 py-10">
      <div className="container-block mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {team.map((member) => (
            <Card key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
