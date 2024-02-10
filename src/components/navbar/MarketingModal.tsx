"use client";

import Image from "next/image";
import Link from "next/link";

const MarketingModal = () => {
  return (
    <Link href={"/"}>
      <div className="flex justify-between text-center">
        <Image
          className="lg:hidden md:hidden cursor-pointer"
          src="/images/phone.jpg"
          height="50"
          width="50"
          alt="Logo"
        />
        <Image
          className="hidden lg:block md:block cursor-pointer "
          src="/images/phone.jpg"
          height="70"
          width="70"
          alt="Logo"
        />
        <div className="mt-5">
          <p>Hubungi Kami</p>
        </div>
      </div>
    </Link>
  );
};

export default MarketingModal;
