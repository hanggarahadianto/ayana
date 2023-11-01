import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-10  w-full lg:h-[35rem] shadow-lg h-60">
      <div className="grid col-span-5 bg-blue-200">
        <div className="lg:px-32 lg:py-20 px-4 py-8">
          <p className="lg:text-7xl text-2xl font-bold mr-3">Discover</p>
          <p className="lg:text-5xl text-xl font-medium lg:mt-10 mt-3">
            Your Dream House Here
          </p>
        </div>
      </div>
      <div className="grid col-span-5 bg-red-200">
        <div className="flex justify-center">
          <Image
            className="rounded-tl-3xl"
            src="/images/image1.jpg"
            height={800}
            width={1000}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
