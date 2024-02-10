"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function Upload() {
  const { register, handleSubmit } = useForm();

  const ImageSchema = z.object({
    // file: z.string().min(1, "image is required"),
    title: z.any(),
    content: z.any(),
    address: z.any(),
    bathroom: z.any(),
    bedroom: z.any(),
    square: z.any(),
    file: z.any(),

    // content: z.string(),
    // title: z.string().min(1, "name is required").max(20),
  });

  type imageData = z.infer<typeof ImageSchema>;

  const form = useForm<z.infer<typeof ImageSchema>>({
    resolver: zodResolver(ImageSchema),
  });

  const onSubmit = async (data: imageData) => {
    const image = data.file[0];
    const title = data.title;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);

    const uploadResponse = await fetch("http://localhost:8080/home/img", {
      method: "POST",
      mode: "no-cors",

      body: formData,
    });
  };

  return (
    <form className="mt-60 mx-16" onSubmit={handleSubmit(onSubmit)}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        {...register("title")}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        // aria-describedby="file_input_help"
        // id="file_input"
        type="text"
      />
      <input
        {...register("content")}
        placeholder="content"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("address")}
        placeholder="address"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("bathroom")}
        placeholder="bathroom"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("bedroom")}
        placeholder="bedroom"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("square")}
        placeholder="square"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="text"
      />
      <input
        {...register("file")}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
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
}
