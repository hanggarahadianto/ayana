import { RequestFormSchema } from "@/utils/schema/RequestFormSchema";
import { z } from "zod";

interface RequesData {
  name: string;
  phone: string;
  date: string;
  time: string;
  home_id: string;
}

export const SendRequest = async (
  { params }: any,
  { body }: any
): Promise<any> => {
  const url = `http://localhost:8080/reservation/post/${params.id}`;
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/reservation/post/${params.id}`;

  console.log(url);

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
};
