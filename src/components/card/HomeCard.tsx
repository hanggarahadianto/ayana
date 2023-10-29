"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { BathIcon, BedIcon, SquareGanttIcon } from "lucide-react";

const HomeCard: React.FC<HomeProps> = (data: HomeProps) => {
  const limitedContent = data.content.split(" ").slice(0, 40).join(" ");

  return (
    <div>
      <Link href={`/home/${data.ID}`}>
        <div className="md:max-w-md md:mx-auto md:h-96 shadow-md rounded-xl overflow-hidden relative">
          <Image
            className="w-30 h-52"
            src={data.image}
            alt={data.title}
            quality={75}
            priority={false}
            width="600"
            height="900"
          />

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-green-500">
                {data.title}
              </h3>
            </div>
            <p className="text-purple-900 font-semibold">{data.address}</p>

            {/* <p className="abosulute bottom-4 right-4 p-2 z-30">
              {limitedContent}
            </p> */}
            <div className="py-8">
              <div className="flex gap-x-12">
                <div className="flex gap-2">
                  <BedIcon className="text-blue-700" />
                  <p className="font-semibold text-blue-700">{data.bedroom}</p>
                </div>
                <div className="flex gap-2">
                  <BathIcon className="text-blue-700" />
                  <p className="font-semibold text-blue-700">{data.bathroom}</p>
                </div>
                <div className="flex gap-2">
                  <SquareGanttIcon className="text-blue-700" />
                  <p className="font-semibold text-blue-700">{data.square}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
