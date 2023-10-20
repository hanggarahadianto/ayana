import RequestForm from "@/components/form/Request";
import { Button } from "@/components/ui/button";
import { HomeDetails } from "@/utils/api/home.api";
import {
  BathIcon,
  BedIcon,
  PhoneCall,
  Square,
  SquareAsteriskIcon,
  SquareDashedBottom,
  SquareGanttIcon,
} from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface RestaurantProps {
  params: {
    id: string;
  };
}

const RestaurantPage: FC<RestaurantProps> = async ({ params }) => {
  const homeData: any = await HomeDetails(params.id);

  return (
    <div>
      <Image
        className="w-full  h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        src={homeData.data.image}
        height="1000"
        width="1000"
        alt="logo"
      />
      <div className="">
        <div className="flex justify-center content-center bg-red-50 px-4 py-4 ">
          <section className="mt-10 w-7/12 px-4 py-2 bg-slate-100 mr-20 rounded-lg shadow-2xl">
            <div className="border-b-2 border-b-gray-200 py-8">
              <p className="text-3xl font-bold">{homeData.data.title}</p>
              <p className="font-medium text-base">
                Wirasana Purbalingga Jawa Tengah
              </p>
            </div>

            <Image
              className="w-full object-cover h-72 rounded-lg "
              src={homeData.data.image}
              height="1000"
              width="1000"
              alt="logo"
            />
            <div className="py-4">
              <div className="flex gap-x-12">
                <BedIcon className="text-blue-700" />
                <BathIcon className="text-blue-700" />
                <SquareGanttIcon className="text-blue-700" />
              </div>
            </div>
            <div className="py-8 w-11/12">
              <p>{homeData.data.content}</p>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          <div className="w-80 bg-slate-100 mt-10 shadow-2xl">
            <div className="px-8 py-4 flex justify-center">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Make Reservation</p>
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="bg-green-200"></div>
              {/* ------------------------- */}
              <RequestForm params={params} />

              {/* ------------------------- */}
            </div>
            <div className="">
              <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
                <p className="font-semibold">Delivery or Takeout</p>
              </div>

              <div className="px-4 py-2">
                <div className="px-4 py-2">Takeout</div>
                <Button className="bg-slate-100 hover:bg-slate-100 border-2 border-green-200">
                  {/* <div className="flex ">
                    <PhoneCall className="text-black" />
                    <p className="text-red-800 ml-2">{homeData.data.phone}</p>
                  </div> */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
