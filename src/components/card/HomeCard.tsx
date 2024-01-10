"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { BathIcon, BedIcon, SquareGanttIcon } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const HomeCard: React.FC<HomeProps> = (data: HomeProps) => {
  const limitedContent = data.content.split(" ").slice(0, 40).join(" ");

  return (
    <div>
      <Link href={`/home/${data.ID}`}>
        <div className="md:max-w-md md:mx-auto h-72 lg:h-96 shadow-xl rounded-xl overflow-hidden relative bg-slate-200">
          <Image
            className="lg:hidden"
            src={data.image}
            alt={data.title}
            quality={75}
            priority={false}
            width="200"
            height="180"
          />
          <Image
            className="w-30 h-52 hidden lg:block"
            src={data.image}
            alt={data.title}
            quality={75}
            priority={false}
            width="600"
            height="900"
          />

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className={roboto.className}>
                <h3 className="lg:text-2xl text-sm font-semibold text-black">
                  {data.title}
                </h3>
              </div>
            </div>
            <p className="text-slate-500 font-semibold mt-2 lg:mt-2 text-xs lg:text-sm">
              {data.address}
            </p>

            {/* <p className="abosulute bottom-4 right-4 p-2 z-30">
              {limitedContent}
            </p> */}
            <div className="lg:py-6 py-2">
              <div className="lg:flex w-full lg:gap-x-10">
                <div className="flex lg:gap-2 gap-3">
                  <BedIcon className="text-slate-700 text-xs lg:text-lg" />
                  <p className="font-semibold text-slate-700 text-xs lg:text-lg">
                    {data.bedroom}
                  </p>
                </div>
                <div className="flex gap-2">
                  <BathIcon className="text-slate-700" />
                  <p className="font-semibold text-slate-700 text-xs lg:text-lg">
                    {data.bathroom}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <SquareGanttIcon className="text-slate-700" />
                <p className="font-semibold text-slate-700 text-xs lg:text-lg">
                  {data.square}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
