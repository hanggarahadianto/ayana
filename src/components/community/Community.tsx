import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Community() {
  return (
    <main className="lg:flex justify-center lg:px-16 px-8 py-12 mb-12 w-full">
      <div className="lg:grid grid-cols-2 bg-purple-200 lg:w-11/12 w-full rounded-lg shadow-lg">
        <div className="lg:px-16 lg:py-12 px-8 py-4">
          <p className="text-4xl font-bold">Stay Up to Date</p>
          <p className="text-lg mt-8">
            Get updates on all of our events and be the first to get notified
            when we have new home.
          </p>
        </div>
        <div className="lg:px-16 lg:py-12 px-8 py-2">
          <div className="flex">
            <p className="text-purple-900 font-semibold text-2xl mr-1">
              Sign Up Our Home
            </p>
          </div>

          <div className="flex w-full items-center space-x-2 lg:mt-8 py-2">
            <Input type="email" placeholder="Email" className="w-full" />
            <Button
              className="bg-blue-400 hover:bg-blue-500 lg:w-24 w-16 "
              type="submit"
            >
              <p className="text-xs lg:text-lg">Subscribe</p>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
