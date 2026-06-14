"use client";

import { ArrowDown } from "lucide-react";

const ExploreBtn = () => {
  return (
<button
  type="button"
  className="group relative mt-7 overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-4 backdrop-blur-sm"
>
  <span className="absolute inset-0 rounded-full origin-left scale-x-0 bg-gradient-to-r from-black to-[#1e4135] transition-transform duration-500 ease-out group-hover:scale-x-100" />

  <a
    href="#events"
    className="relative z-10 flex items-center justify-center gap-2 text-white"
  >
    Explore Events
    <ArrowDown />
  </a>
</button>
  );
};

export default ExploreBtn;