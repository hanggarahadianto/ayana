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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RequestFormSchema } from "@/utils/schema/OrderFormSchema";

type FormData = z.infer<typeof RequestFormSchema>;

interface PropsID {
  params: {
    id: string;
  };
}

const RequestForm: React.FC<PropsID> = ({ params }) => {
  // const form = useForm<z.infer<typeof RequestFormSchema>>({
  //   resolver: zodResolver(RequestFormSchema),
  // });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FormData) => {
    try {
      const body = {
        name: data.name,
        phone: data.phone,
        date: data.date.toDateString(),
        time: data.time,
        home_id: params.id,
      };
      console.log(body);
      const response = await fetch(
        `http://localhost:7000/reservation/create/${params.id}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log("Data received:", responseData);

        const addOrder = await response.json();
        console.log(addOrder);
      } else {
        console.error("Request failed:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
        >
          Reserve Now
        </button>
      </div>
    </form>
  );
};

//   return (
//     <Form {...form}>
//       {/* <Form {...form}> */}
//       <form
//         // onSubmit={form.handleSubmit(onSubmit)}
//         className="w-full"
//       >
//         <div className="space-y-2">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="john doe" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/* <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Phone</FormLabel>
//                 <FormControl>
//                   <Input placeholder="08568274824" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           /> */}

//           {/* <FormField
//             control={form.control}
//             name="date"
//             render={({ field }) => (
//               <FormItem className="flex flex-col">
//                 <FormLabel>Date</FormLabel>

//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant={"outline"}
//                         className={cn(
//                           "w-[240px] pl-3 text-left font-normal",
//                           !field.value && "text-muted-foreground"
//                         )}
//                       >
//                         {field.value ? (
//                           format(field.value, "PPP")
//                         ) : (
//                           <span>Pick a date</span>
//                         )}
//                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={field.value}
//                       onSelect={field.onChange}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//                 <FormMessage />
//               </FormItem>
//             )}
//           /> */}

//           {/* <FormField
//             control={form.control}
//             name="time"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Time</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select time when you come" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="16.00">09.00</SelectItem>
//                     <SelectItem value="17.00">10.00</SelectItem>
//                     <SelectItem value="19.00">11.00</SelectItem>
//                     <SelectItem value="20.00">12.00</SelectItem>
//                     <SelectItem value="21.00">13.00</SelectItem>
//                     <SelectItem value="21.00">14.00</SelectItem>
//                     <SelectItem value="21.00">15.00</SelectItem>
//                     <SelectItem value="21.00">16.00</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <FormMessage />
//               </FormItem>
//             )}
//           /> */}
//         </div>
//         <Button className="w-full mt-6" type="submit">
//           Reserve Now
//         </Button>
//       </form>
//     </Form>
//   );
// };

export default RequestForm;
