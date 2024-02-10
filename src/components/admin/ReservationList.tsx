interface ReservationAdminProps {
  ID: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  home_id: string;
}

const ReservationAdminList: React.FC<ReservationAdminProps> = (
  data: ReservationAdminProps
) => {
  return (
    <div className=" py-2 w-full">
      <div className="grid grid-cols-12 justify-between bg-white rounded-lg px-8 py-4">
        <div className="col-span-4">
          <p>{data.name}</p>
        </div>
        <div className="col-span-3 ">
          <p>{data.phone}</p>
        </div>
        <div className="col-span-3">
          <p>{data.date}</p>
        </div>
        <div className="col-span-1 ml-7">
          <p>{data.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationAdminList;
