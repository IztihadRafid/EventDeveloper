import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="">
      <nav
        className="flex justify-between items-center rounded-2xl 
        bg-black/30 backdrop-blur-md border border-white/4 
        px-6 py-3 shadow-lg"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/devevent.png" alt="logo" width={54} height={54} />
          <p className="text-2xl font-semibold hidden md:block">DevEvent</p>
        </Link>

        <ul className="flex gap-4 items-center">
          <Link
            className="bg-gray-900  text-sm hover:bg-[#1e4135] transition-colors duration-500 px-4 py-2 rounded-full"
            href="/"
          >
            Home
          </Link>

          <Link
            className="bg-gray-900 text-sm hover:bg-[#1e4135] transition-colors duration-500 px-4 py-2 rounded-full"
            href="/"
          >
            Events
          </Link>

          <Link
            className="bg-gray-900 text-sm hover:bg-[#1e4135] transition-colors duration-500 px-4 py-2 rounded-full"
            href="/"
          >
            Create Events
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
