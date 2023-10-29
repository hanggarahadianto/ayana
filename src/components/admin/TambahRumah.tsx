"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { HomeFormSchema } from "@/utils/schema/HomeFormSchema";

const TambahRumah = () => {
  const form = useForm<z.infer<typeof HomeFormSchema>>({
    resolver: zodResolver(HomeFormSchema),
  });

  const { register, handleSubmit } = useForm();

  const rumahSchema = z.object({
    title: z.any(),
    content: z.any(),
    address: z.any(),
    bathroom: z.any(),
    bedroom: z.any(),
    square: z.any(),
    // title: z.string().min(1, "name is required").max(20),
    // content: z.string().min(1, "content is required"),
    // address: z.string().min(1, "address is required"),
    // bathroom: z.string().min(1, "bathroom is required"),
    // bedroom: z.string().min(1, "bedroom is required"),
    // square: z.string().min(1, "square is required"),
    file: z.any(),
  });

  type FormData = z.infer<typeof rumahSchema>;

  // const form = new FormData();
  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("address", data.address);
      formData.append("bathroom", data.bathroom);
      formData.append("bedroom", data.bedroom);
      formData.append("bedroo ", data.bedroom);
      formData.append("file", data.file[0]);

      const response = await fetch("http://localhost:7000/home/post", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: formData,
      });
      console.log(formData);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error("Request failed:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="mt-20 mx-16 h-screen" onSubmit={handleSubmit(onSubmit)}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        {...register("title")}
        placeholder="title"
        className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("content")}
        placeholder="content"
        className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("address")}
        placeholder="address"
        className="block w-full text-sm px-4 py-2 text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("bathroom")}
        placeholder="bathroom"
        className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("bedroom")}
        placeholder="bedroom"
        className="block w-full text-sm px-4 py-2 text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("square")}
        placeholder="square"
        className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("file")}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>

      <button
        type="submit"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
      >
        Upload to Cloud
      </button>
    </form>
  );
};

export default TambahRumah;
