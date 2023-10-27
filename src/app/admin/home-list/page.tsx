import { Button } from "@/components/ui/button";
import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";

import Link from "next/link";
import HomeAdmin from "../homeAdmin";

const page = async () => {
  const homeList: Home[] = await GetHomeList();

  return (
    <div className="bg-white">
      <div className="w-full h-screen">
        <div className="flex justify-between">
          <div className="">
            <p className="text-3xl font-bold mb-20">Home List</p>
            <div className="flex gap-x-4">
              {homeList.map((Home) => (
                <div key={Home.ID}>
                  <HomeAdmin
                    ID={Home.ID}
                    title={Home.title}
                    // content={Home.content}
                    image={Home.image}
                    params={{
                      id: "",
                    }} // address={Home.address}
                    // bathroom={Home.bathroom}
                    // bedroom={Home.bedroom}
                    // square={Home.square}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
