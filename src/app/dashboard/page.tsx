import HomeCard from "@/components/card/HomeCard";
import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";
import React from "react";

export default async function DashboardPage() {
  const homeList: Home[] = await GetHomeList();
  return (
    <div className="w-full">
      <div className="flex justify-center lg:px-8 lg:py-8 mt-4 lg:mt-0">
        <p className="text-xl lg:text-4xl font-semibold text-purple-950 mb-3 ">
          Feature Home
        </p>
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
  );
}
