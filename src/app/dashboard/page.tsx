import HomeCard from "@/components/card/HomeCard";
import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";
import React from "react";

export default async function DashboardPage() {
  const homeList: Home[] = await GetHomeList();
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-8 py-8">
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
