/* eslint-disable @next/next/no-img-element */
function Card({ name, bio }: { name: string; bio: string }) {
  return (
    <div className="team-card relative overflow-hidden">
      <img
        className="h-full w-full object-cover transition-all duration-300 ease-in-out"
        src="https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png"
        alt=""
      />

      <div className="member absolute left-0 right-0 top-0 mx-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center space-y-3 bg-transparent text-center text-white transition-all duration-200 ease-in-out">
        <h3 className="font-general-sans text-h4-d font-semibold">{name}</h3>
        <p className="font-general-sans text-lg font-medium">{bio}</p>
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
    <section className="px-5 py-10 md:py-16 lg:py-20">
      <div className="container-block mx-auto">
        <div className="hidden lg:block">
          <div className="text-center lg:mb-8">
            <h2 className="mb-1 text-h3-m font-bold md:text-h3-t lg:text-h3-d">Meet Our Team</h2>
            <p className="mb-2 block font-general-sans text-xs-m font-medium text-secondary md:text-xs-t lg:mb-0 lg:text-xs-d">
              Committee Members
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {team.map((member) => (
              <Card key={member.id} name={member.name} bio={member.bio} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
