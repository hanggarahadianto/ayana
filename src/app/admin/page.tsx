import HomeCard from "@/components/card/HomeCard";
import { Button } from "@/components/ui/button";
import { Home } from "@/types/home.types";
import { GetHomeList } from "@/utils/api/home/getHome.api";


const page = async () => {
  const homeList: Home[] = await GetHomeList();

  return (
    <div className="bg-white grid grid-cols-12">
      <div className="col-span-3 bg-blue-100 w-full h-screen">
        <div className="px-16 py-8 ">
          <Button className="bg-blue-200 hover:bg-blue-300">
            <p className="text-2xl font-bold">Home List</p>
          </Button>
        </div>
      </div>
      <div className="col-span-9 bg-red-200 w-full h-screen">
        <div className="px-16 py-8">
          <div className="flex justify-between">
            <div className="">
              <p className="text-3xl font-bold mb-20">Home List</p>
              {homeList.map((Home) => (
                <div key={Home.ID}>
                  <HomeCard
                    ID={Home.ID}
                    title={Home.title}
                    content={Home.content}
                    image={Home.image}
                    address={Home.address}
                    bathroom={Home.bathroom}
                    bedroom={Home.bedroom}
                    square={Home.square}
                  />
                </div>
              ))}
            </div>

            <Button className="bg-blue-300">
              <p>Add New Home</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
