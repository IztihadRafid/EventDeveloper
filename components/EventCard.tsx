import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string,
    image: string
}
const EventCard = ({title, image}:Props) => {
  return (
   <Link href={`/events`} id="event-card">
    <Image src={image} alt="image event" width={100} height={100}></Image>
    <p>{title}</p>
   </Link>
  )
}

export default EventCard
