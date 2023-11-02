import ReservationAdminList from "@/components/admin/ReservationList";
import { Reservation } from "@/types/reservation.types";
import { GetReservationList } from "@/utils/api/admin/getReservation";

const page = async () => {
  const reservationList: Reservation[] = await GetReservationList();

  return (
    <div className="w-full h-screen">
      <div className="">
        <p className="text-3xl font-bold mb-20">Home List</p>
        <div className="grid grid-cols-3 gap-x-5 gap-y-4">
          {reservationList.map((Reservation) => (
            <div key={Reservation.ID}>
              <ReservationAdminList
                ID={Reservation.ID}
                phone={Reservation.phone}
                name={Reservation.name}
                date={Reservation.date}
                time={Reservation.time}
                params={{
                  id: "",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
