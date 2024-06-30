import ReservationAdminList from "@/components/admin/ReservationList";
import { Reservation } from "@/types/reservation.types";
import { GetReservationList } from "@/utils/api/admin/getReservation";

const ReservationPage = async () => {
  const reservationList: Reservation[] = await GetReservationList();

  return (
    <div className="w-full h-screen">
      <div className="">
        <p className="text-3xl font-bold mb-20">Reservation List</p>
        <div className="rounded-lg">
          <div className="grid grid-cols-12 py-4">
            <th className="col-span-3">Name</th>
            <th className="col-span-3">Phone</th>
            <th className="col-span-3">Date</th>
            <th className="col-span-3">Time</th>
          </div>

          {reservationList.map((Reservation) => (
            <div key={Reservation.ID}>
              <ReservationAdminList
                ID={Reservation.ID}
                phone={Reservation.phone}
                name={Reservation.name}
                date={Reservation.date}
                time={Reservation.time}
                home_id={Reservation.home_ID}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
