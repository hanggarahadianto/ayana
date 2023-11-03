import DeleteHome from "@/components/admin/DeleteHome";
import Image from "next/image";

interface HomeAdminProps {
  ID: string;
  image: string;
  title: string;
  params: {
    id: string;
  };
}

const HomeAdminList: React.FC<HomeAdminProps> = (data: HomeAdminProps) => {
  return (
    <div>
      <div
        key={data.ID}
        className="md:max-w-md md:mx-auto md:h-56 w-72 shadow-md rounded-xl overflow-hidden relative"
      >
        <div className="px-8 py-4 ">
          <Image
            className="w-60 h-20 rounded-xl object-cover"
            src={data.image}
            alt={data.title}
            priority={false}
            quality={75}
            width="600"
            height="1200"
          />
        </div>

        <div className="flex justify-between px-4">
          <h3 className="text-md font-semibold text-green-500">{data.title}</h3>
          <div>
            <DeleteHome params={data.params} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdminList;
