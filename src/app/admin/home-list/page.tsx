import HomeAdminList from "@/components/admin/HomeAdminList";
import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";

const page = async () => {
  const homeList: Home[] = await GetHomeList();

  return (
    <div className="w-full h-screen">
      <div className="">
        <p className="text-3xl font-bold mb-20">Home List</p>
        <div className="grid grid-cols-3 gap-x-5 gap-y-4">
          {homeList.map((Home) => (
            <div key={Home.ID}>
              <HomeAdminList
                ID={Home.ID}
                title={Home.title}
                image={Home.image}
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
