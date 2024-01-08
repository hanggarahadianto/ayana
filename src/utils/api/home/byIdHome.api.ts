import { Home } from "@/types/home.types";

export const HomeDetails = async (id: string) => {
  const response = await fetch(`${process.env.URL}/home/getById/${id}`);

  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const homeID: Home[] = await response.json();

  return homeID;
};
