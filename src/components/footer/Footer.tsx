import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  Twitter,
  YoutubeIcon,
} from "lucide-react";
import Logo from "../navbar/Logo";

export default function Footer() {
  return (
    <div className="lg:flex py-4 shadow-lg bg-orange-50">
      <div className=" w-96 px-8 py-4 order-b-2 border-gray-100">
        <Logo />
        <p className="py-8">
          Ayana Home best house, using technology to imagine the future of
          hospitality.
        </p>
        <div className="grid gap-2 grid-cols-4 cursor-pointer">
          <Twitter className="w-16 h-10" />
          <FacebookIcon className="w-16 h-10" />
          <InstagramIcon className="w-16 h-10" />
          <YoutubeIcon className="w-16 h-10" />
        </div>
      </div>
      <div>
        <div className="flex gap-4 lg:gap-24 font-bold px-8 py-4 cursor-pointer mt-5 lg:ml-40">
          <span>About</span>
          <span>Career</span>
          <span>Newsroom</span>
          <span>Mobile App</span>
        </div>

        <div className="flex gap-y-4 mt-10 px-8 lg:ml-40">
          <div className="">
            <p>Discover Book</p>
            <p>Nearby Restaurant</p>
            <p>Stories</p>
            <p>Guide</p>
            <p>The Hit List</p>
            <p>Events</p>
          </div>
          <div className="lg:ml-40 px-8">
            <span className="font-semibold">Contact Us</span>
            <p>Admin Officer : +628534938535</p>
            <p>Email Officer : ayanagrup@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
