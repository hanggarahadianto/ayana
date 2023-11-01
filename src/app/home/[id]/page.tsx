import RequestForm from "@/components/form/Request";
import { Button } from "@/components/ui/button";
import { HomeDetails } from "@/utils/api/home/byIdHome.api";
import { BathIcon, BedIcon, SquareGanttIcon } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface HomeProps {
  params: {
    id: string;
  };
}

const RestaurantPage: FC<HomeProps> = async ({ params }) => {
  const homeData: any = await HomeDetails(params.id);

  return (
    <div>
      <Image
        className="w-full hidden lg:block h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        src={homeData.data.image}
        height="1000"
        width="1000"
        alt="logo"
      />

      <div className="lg:flex justify-center content-center bg-red-50 px-4 py-4 ">
        <section className="mt-10 w-full lg:px-12 lg:py-8 bg-slate-100 mr-16  rounded-lg shadow-2xl">
          <div className="border-b-2 border-b-gray-200 py-8 px-4">
            <p className="text-4xl font-bold text-green-600">
              {homeData.data.title}
            </p>
            <p className="font-medium text-base text-purple-800 mt-1">
              {homeData.data.address}
            </p>
          </div>

          <div className="px-4 py-2">
            <Image
              className="w-full object-cover h-72 rounded-lg "
              src={homeData.data.image}
              height="1000"
              width="1000"
              alt="logo"
            />
          </div>

          <div className="py-4 px-4">
            <div className="flex gap-x-12">
              <div className="flex gap-2">
                <BedIcon className="text-blue-700" />
                <p className="font-semibold text-blue-700">
                  {homeData.data.bedroom}
                </p>
              </div>
              <div className="flex gap-2">
                <BathIcon className="text-blue-700" />
                <p className="font-semibold text-blue-700">
                  {homeData.data.bathroom}
                </p>
              </div>
              <div className="flex gap-2">
                <SquareGanttIcon className="text-blue-700" />
                <p className="font-semibold text-blue-700">
                  {homeData.data.square}
                </p>
              </div>
            </div>
            <div className="py-10">
              <p>{homeData.data.content}</p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        <section className="lg:w-96 w-full bg-slate-100 mt-10 shadow-2xl lg:mr-8">
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

          <div className="border-b-gray-200 px-4 py-2 border-b-2 w-full flex content-center justify-center ">
            <p className="font-semibold">Call Our Marketing Team</p>
          </div>

          <div className="px-4 py-2">
            <div className="px-4 py-2">Call Us</div>
            <Button className="bg-slate-100 hover:bg-slate-100 border-2 border-green-200"></Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RestaurantPage;
