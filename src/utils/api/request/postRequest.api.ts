import { RequestFormSchema } from "@/utils/schema/RequestFormSchema";
import { z } from "zod";

interface RequesData {
  name: string;
  phone: string;
  date: string;
  time: string;
  home_id: string;
}

export const SendRequest = async (data: RequesData): Promise<any> => {
  const url = `${process.env.URL}/reservation/post/${data.home_id}`;
  //   const url = `${process.env.URL}/reservation/post/${params.id}`;
  //   const body = {
  //     name: data.name,
  //     phone: data.phone,
  //     date: data.date.toDateString(),
  //     time: data.time,
  //     // home_id: params.id,
  //   };
  console.log(url);

  const res = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
};
