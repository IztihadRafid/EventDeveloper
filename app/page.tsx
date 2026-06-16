import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const Home =async () => {
  const response = await fetch(`${BASE_URL}/api/events`)
  const {events} = await response.json()
  console.log(events)
  return (
    <section className="">
      <div>
        <h1 className="text-center lg:text-6xl md:text-4xl text-2xl font-bold text-white mt-10">
          Your Gateway to the <br />
          <span className="bg-gradient-to-b from-white to-blue-300 bg-clip-text text-transparent">
            Best Developer Events
          </span>
        </h1>
        <p className="text-center mt-5">
          Explore conferences, coding competitions, meetups, and tech workshops
          worldwide.
        </p>
      </div>
      <div className="flex justify-center">
        <ExploreBtn></ExploreBtn>
      </div>
      <section className="w-[90%] l mx-auto">
        <h3 className="text-4xl text-center p-10 mt-14">Featured Events</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
          {events?.map((event:IEvent) => (
            <li key={event?.slug}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Home;
