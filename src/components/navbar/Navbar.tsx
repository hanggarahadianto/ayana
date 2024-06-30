// import { signOut, useSession } from "next-auth/react";
// import SigninButton from "../auth/SigninButton";
import Logo from "./Logo";

import MarketingModal from "./MarketingIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import MarketingSpot from "../marketing/Marketing";
import RequestForm from "../form/Request";
import ReservationAdminList from "../admin/ReservationList";
import { GetReservationList } from "@/utils/api/admin/getReservation";
import ReservationPage from "../../../app/admin/reservation/page";

const Navbar = () => {
  // const { data: session } = useSession();

  return (
    <div className="flex border-b bg-white w-full z-50">
      {/* <div className=" bg-white py-4"> */}
      <div className="container flex mx-auto justify-between bg-white py-4">
        <Logo />
        <Dialog>
          <DialogTrigger>
            <MarketingModal />
          </DialogTrigger>

          <DialogContent>
            <MarketingSpot />
          </DialogContent>

          {/* <DialogContent>

            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>  */}
        </Dialog>

        {/* {session?.user ? (
          <>
            <div className="flex">
              <p className="mr-20 text-gray-800">Welcome</p>
              <p className="text-gray-600">{session.user.data.name}</p>
            </div>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <SigninButton />
        )} */}
        {/* <Image
          className="lg:hidden md:hidden cursor-pointer"
          src="/images/ayana.png"
          height="50"
          width="50"
          alt="Logo"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
