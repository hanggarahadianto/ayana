import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-blue-100">
          <div className="px-16 py-12 grid gap-4">
            <div>
              <Link href={"/admin/post-home"}>
                <Button className="bg-blue-400 hover:bg-blue-500 w-36">
                  <p className="text-white font-semibold">Add New Home</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/tambah-rumah"}>
                <Button className="bg-blue-400 hover:bg-blue-500 w-36">
                  <p className="text-white font-semibold">Tambah Rumah</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/home-list"}>
                <Button className="bg-blue-400 hover:bg-blue-500 w-36">
                  <p className="text-white font-semibold">Home List</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/add-image"}>
                <Button className="bg-blue-400 hover:bg-blue-500 w-36">
                  <p className="text-white font-semibold">Add Image</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/reservation"}>
                <Button className="bg-blue-400 hover:bg-blue-500 w-36">
                  <p className="text-white font-semibold">Reservation</p>
                </Button>
              </Link>
            </div>
            <div className="bottom-1">
              <Link href={"/admin/login"}>
                <Button className="bg-green-400 hover:bg-green-500">
                  <p className="text-white font-semibold">Login</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-9 px-16 py-8 bg-white">{children}</div>
      </div>
    </>
  );
}
