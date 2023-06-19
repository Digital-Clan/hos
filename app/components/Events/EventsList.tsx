import EventCard from "../Common/EventCard";

export default function EventsList() {
  const liveEvents = [
    {
      id: 1,
      title: "DIVINE SETTLEMENT",
      liveEvent: true,
      scripture: "1 Peter 5:10",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      timeStart: "10:00 AM",
      timeEnd: "06:00 PM",
      venue: "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "DIVINE SETTLEMENT",
      liveEvent: false,
      scripture: "1 Peter 5:10",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      timeStart: "10:00 AM",
      timeEnd: "06:00 PM",
      venue: "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
    {
      id: 2,
      title: "DIVINE SETTLEMENT",
      liveEvent: false,
      scripture: "1 Peter 5:10",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      timeStart: "10:00 AM",
      timeEnd: "06:00 PM",
      venue: "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
  ];

  return (
    <section className="px-5 py-12 md:px-8">
      <div className="container-block">
        <div className="mb-20 lg:mb-24">
          <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
            Live Events
          </h2>
          <div className="flex flex-col space-y-10">
            {liveEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
            Upcoming Events
          </h2>
          <div className="flex flex-col space-y-10">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
