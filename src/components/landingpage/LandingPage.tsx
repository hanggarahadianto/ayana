import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-10  w-full h-[35rem]">
      <div className="grid col-span-5 bg-blue-200">
        <div className="flex px-16 py-12">
          <p className="text-7xl font-bold mr-3">Discover</p>
          <p className="text-5xl font-medium">Your Dream House Here</p>
        </div>
      </div>
      <div className="grid col-span-5 bg-red-200">
        <div className="flex justify-center ">
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
