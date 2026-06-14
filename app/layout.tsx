import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventDev | Developer Event Management Platform",
  description:
    "EventDev is a modern event management platform for developers, software engineers, and tech communities. Create, manage, and promote conferences, hackathons, workshops, meetups, and virtual events with seamless registration, speaker management, ticketing, and analytics.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "min-h-screen",
        schibstedGrotesk.variable,
        martianMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col dark" >
        <Navbar></Navbar>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5DFECA"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={2.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0.01}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
