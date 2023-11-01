"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/dashboard"}>
      <Image
        className="md:block lg:hidden cursor-pointer"
        src="/images/ayana.png"
        height="50"
        width="50"
        alt="Logo"
      />
      <Image
        className="hidden lg:block md:block cursor-pointer "
        src="/images/ayana.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
