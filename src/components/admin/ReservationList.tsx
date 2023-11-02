import DeleteHome from "@/components/admin/DeleteHome";
import Image from "next/image";

interface ReservationAdminProps {
  ID: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  params: {
    id: string;
  };
}

const ReservationAdminList: React.FC<ReservationAdminProps> = (
  data: ReservationAdminProps
) => {
  return (
    <div>
      <div
        key={data.ID}
        className="md:max-w-md md:mx-auto md:h-36 w-72 shadow-md rounded-xl overflow-hidden relative"
      >
        <div className="flex justify-between px-4">
          <h3 className="text-lg font-semibold text-green-500">{data.name}</h3>
          <div>
            <DeleteHome params={data.params} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationAdminList;
