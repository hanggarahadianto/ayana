import { Home } from "@/types/home.types";

export const HomeDetails = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/home/getById/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }
  const homeID: Home[] = await response.json();

  return homeID;
};
