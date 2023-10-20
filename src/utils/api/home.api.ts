import { Home } from "@/types/home.types";

export const GetHomeList = async () => {
  const res = await fetch("http://localhost:7000/home/get", {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const homeList = await res.json();
  // console.log(homeList);

  return homeList.data;
};

const api_URL = "http://localhost:7000/home/getById";

export const HomeDetails = async (id: string) => {
  const response = await fetch(`${api_URL}/${id}`);

  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const homeID: Home[] = await response.json();
  // console.log(restaurantDataID);
  return homeID;
};
