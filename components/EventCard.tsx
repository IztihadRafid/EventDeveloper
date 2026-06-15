import { EventItem } from "@/lib/contants";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ slug, title, image, date, time, location }: EventItem) => {
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="space-y-4 px-2 py-5">
        <h4 className="line-clamp-2 text-2xl font-semibold leading-tight text-white">
          {title}
        </h4>

        <div className="space-y-3 text-sm font-medium text-gray-400">
          <p className="flex items-center gap-3">
            <CalendarDays className="size-4 shrink-0 text-gray-400" />
            <span>{date}</span>
          </p>
          <p className="flex items-center gap-3">
            <Clock className="size-4 shrink-0 text-gray-400" />
            <span>{time}</span>
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="size-4 shrink-0 text-gray-400" />
            <span>{location}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
