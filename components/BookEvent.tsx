"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { createBooking } from "@/lib/actions/booking.actions";

const BookEvent = ({eventId,slug}:{eventsId:string,slug:string}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit =async (e: React.FormEvent) => {
    const {success}= await createBooking({eventId,slug,email})
    if(success){
      setSubmitted(true);
    }
    else{
      console.error("Booking creation failed")
    }
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-xl">
      {submitted ? (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">
          <CheckCircle2 size={60} className="mx-auto mb-4 text-cyan-400" />

          <h3 className="text-2xl font-bold text-white">You`re Registered!</h3>

          <p className="mt-2 text-gray-300">
            Thanks for signing up. We`ll notify you about this event.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pr-4 pl-12 text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Reserve My Spot
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
