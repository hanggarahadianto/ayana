import DeleteHome from "@/components/admin/DeleteHome";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

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
        className="md:max-w-md md:mx-auto md:h-56 w-72 shadow-md rounded-xl overflow-hidden relative bg-slate-200"
      >
        <div className="px-8 py-4 ">
          <Image
            className="w-60 h-32 rounded-xl object-cover"
            src={data.image}
            alt={data.title}
            priority={false}
            quality={75}
            width="600"
            height="1200"
          />
        </div>

        <div className="flex justify-between px-4">
          <div className={roboto.className}>
            <h3 className="text-md font-semibold text-black">{data.title}</h3>
          </div>
          <div>
            <DeleteHome params={data.params} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdminList;
