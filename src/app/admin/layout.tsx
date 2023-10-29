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
          <div className="px-16 py-8 grid gap-4">
            <div>
              <Link href={"/admin/post-home"}>
                <Button>
                  <p>Add New Home</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/tambah-rumah"}>
                <Button>
                  <p>Tambah Rumah</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/home-list"}>
                <Button className="bg-blue-200 hover:bg-blue-300">
                  <p className="text-2xl font-bold">Home List</p>
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/admin/add-image"}>
                <Button className="bg-blue-200 hover:bg-blue-300">
                  <p className="text-2xl font-bold">Add Image</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 px-16 py-8">{children}</div>
      </div>
    </>
  );
}
