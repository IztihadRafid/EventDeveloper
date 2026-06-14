import ExploreBtn from "@/components/ExploreBtn";

const Home = () => {
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
      <section>
        <h3>Featured Events</h3>
        <ul>
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}>Event {event}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Home;
