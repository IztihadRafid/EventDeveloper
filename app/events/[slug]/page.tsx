import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock3,
  MapPin,
  Building2,
  Users,
  Monitor,
  User,
  Tag,
  ClipboardList,
} from "lucide-react";
import BookEvent from "@/components/BookEvent";
import { IEvent } from "@/database/event.model";
import { getSimilarEventBySlug } from "@/lib/actions/event.actions";
import EventCard from "@/components/EventCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const request = await fetch(`${BASE_URL}/api/events/${slug}`);
  const { event } = await request.json();

  if (!event) {
    return notFound();
  }
  const bookings=10
  const similarEvents:IEvent[] = await getSimilarEventBySlug(slug);

  return (
   <section>
     <article className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className=" relative h-[400px] md:h-[450px]">
        <Image
          src={event?.image}
          alt={event?.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-1/2 w-full max-w-7xl -translate-x-1/2 px-5">
          <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">
            {event?.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {event?.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={18} />
              {event?.time}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {event?.location}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-8 lg:col-span-2">
          {/* Overview */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>

            <p className="leading-8 text-gray-300">
              {event?.description}
            </p>
          </section>

          {/* Agenda */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <ClipboardList className="text-blue-400" />
              <h2 className="text-2xl font-semibold">Agenda</h2>
            </div>

            {Array.isArray(event?.agenda) ? (
              <ul className="space-y-3">
                {event?.agenda?.map(
                  (item: string, index: number) => (
                    <li
                      key={index}
                      className="rounded-xl bg-white/5 p-4 text-gray-300"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-gray-300">{event?.agenda}</p>
            )}
          </section>

          {/* Organizer */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <User className="text-green-400" />
              <h2 className="text-2xl font-semibold">Organizer</h2>
            </div>

            <p className="text-gray-300">{event?.organizer}</p>
          </section>
        </div>

        {/* Right Side */}
        <aside className="space-y-6">
          <section className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="mb-6 text-xl font-semibold">
              Event Details
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p>{event?.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Time</p>
                  <p>{event?.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">Venue</p>
                  <p>{event?.venue}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>{event?.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Monitor className="text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Mode</p>
                  <p>{event?.mode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-pink-400" />
                <div>
                  <p className="text-sm text-gray-400">Audience</p>
                  <p>{event?.audience}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tags */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <Tag className="text-yellow-400" />
              <h2 className="text-xl font-semibold">Tags</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {Array.isArray(event?.tags) ? (
                event?.tags?.map(
                  (tag: string, index: number) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  )
                )
              ) : (
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  {event?.tags}
                </span>
              )}
            </div>
          </section>
        </aside>
      </div>
    </article>

    {/* form */}
   <section className="mx-auto max-w-7xl px-5 pb-20">
  <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-white/5 p-8 backdrop-blur">
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-white">
        Book Your Spot
      </h2>

      {bookings > 0 ? (
        <p className="mt-3 text-gray-300">
          Join{" "}
          <span className="font-semibold text-cyan-400">
            {bookings}
          </span>{" "}
          people who have already booked their spot!
        </p>
      ) : (
        <p className="mt-3 text-gray-300">
          Be the first to book your spot 🚀
        </p>
      )}
    </div>

    <BookEvent />
  </div>
</section>

<section>
    <h2>Similar Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-6 w-[90%] mx-auto">
        {
            similarEvents.length>0 && similarEvents.map((similarEvent)=>(
                <div className="w-96" key={similarEvent._id}><EventCard {...similarEvent}></EventCard></div>
            ))
        }
    </div>
</section>
   </section>
  );
};

export default EventDetailsPage;