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

type FormData = z.infer<typeof HomeFormSchema>;

const PostHome = () => {
  const form = useForm<z.infer<typeof HomeFormSchema>>({
    resolver: zodResolver(HomeFormSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const body = {
        title: data.title,
        content: data.content,
        address: data.address,
        bathroom: data.bathroom,
        bedroom: data.bedroom,
        square: data.square,
        file: data.file,
      };
      console.log(body);
      const response = await fetch("http://localhost:7000/home/post", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Data received:", responseData);

        const postHome = await response.json();
        console.log(postHome);
      } else {
        console.error("Request failed:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home Name</FormLabel>
                <FormControl>
                  <Input placeholder="home name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathroom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathroom</FormLabel>
                <FormControl>
                  <Input placeholder="Bathroom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bedroom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedroom</FormLabel>
                <FormControl>
                  <Input placeholder="Bedroom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="square"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Square</FormLabel>
                <FormControl>
                  <Input placeholder="Square" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem className="w-80 cursor">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  {/* <Label htmlFor="picture">Picture</Label> */}
                  <Input
                    className="cursor-pointer"
                    placeholder="Image"
                    {...field}
                    type="file"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Order Now
        </Button>
      </form>
    </Form>
  );
};

export default PostHome;
