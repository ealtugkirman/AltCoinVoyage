"use client"
import Image from "next/image";
import Logo from "../public/altcoinvoyagelogo.png";
import Lottie from "lottie-react";
import ani from "../public/animation.json"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="items-center mt-7 text-center justify-center ">
        {/* <Lottie className="mt-12"  animationData={ani} loop={true} /> */}
        <Image src={Logo} />
        <p className="text-red-300 italic">
          Your guide on crypto  world
        </p>
      </div>
    </main>
  );
}
