import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function DashboardSection() {
  return (
    <div className="flex justify-center">
      <div className="px-12 py-12">
        <div className="flex justify-center">
          <div className={anton.className}>
            <p className="text-3xl font-bold text-purple-800 content-center ">
              Featured House
            </p>
          </div>
        </div>

        <div className="flex justify-center ">
          <p className="mt-3 font-semibold w-96 lg:w-full text-center">
            Di Ayana, Anda dapat menikmati berbagai fasilitas unggulan yang akan
            membuat Anda betah tinggal di sini
          </p>
        </div>
        <div className="flex justify-center">
          <div className="lg:flex justify-between mt-10 gap-10">
            <div className="h-100 grid gap-y-2 w-60 mt-2">
              <Image
                className="rounded-2xl object-cover h-80"
                src="/images/feature1.jpg"
                width={300}
                height={0}
                alt=""
              />

              <p className="font-semibold t">STYLISH AFFORDABLE HOUSING</p>
              <p>
                Ayana presents affordable housing for you, fellow first
                homeowner
              </p>
            </div>
            <div className="w-60 h-100 grid gap-y-2 mt-2">
              <Image
                className="rounded-2xl object-cover h-80"
                src="/images/feature2.jpg"
                height={0}
                width={300}
                alt=""
              />

              <p className="font-semibold">STYLISH AFFORDABLE HOUSING</p>
              <p>
                Ayana presents affordable housing for you, fellow first
                homeowner
              </p>
            </div>
            <div className="w-60 h-100 grid gap-y-2 mt-2">
              <Image
                className="rounded-2xl object-cover h-80"
                src="/images/feature3.jpg"
                width={300}
                height={0}
                alt=""
              />
              <p className="font-semibold">STYLISH AFFORDABLE HOUSING</p>
              <p>
                Ayana presents affordable housing for you, fellow first
                homeowner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
