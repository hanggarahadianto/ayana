import { Home } from "@/types/home.types";

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
