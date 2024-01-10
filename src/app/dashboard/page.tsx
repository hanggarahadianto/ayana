import HomeCard from "@/components/card/HomeCard";

import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";
import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
export default async function DashboardPage() {
  const homeList: Home[] = await GetHomeList();
  return (
    <div className="w-full">
      <div className="px-8 py-8 bg-[rgb(190,171,150)]">
        {/* <div className="px-8 py-8 bg-[#a48060]"> */}
        <div className="flex justify-center py-2">
          <div className={anton.className}>
            <p className="text-3xl lg:text-5xl text-white">Ayana Homes</p>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className={anton.className}>
            <p className="text-xl lg:text-3xl text-orange-600">
              On Sale Project
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 lg:px-8 lg:py-8 px-4">
          {homeList.map((Home) => (
            <div key={Home.ID}>
              <HomeCard
                ID={Home.ID}
                title={Home.title}
                content={Home.content}
                image={Home.image}
                address={Home.address}
                bathroom={Home.bathroom}
                bedroom={Home.bedroom}
                square={Home.square}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
