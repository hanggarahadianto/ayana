// "use client";
"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { sendResponse } from "next/dist/server/image-optimizer";
interface PropsID {
  params: {
    id: string;
  };
}
const formSchema = z.object({
  name: z.string(),
  phone: z.string().min(11, "phone is required"),
  date: z.date({
    required_error: "A date is required.",
  }),
  time: z.string(),
});

// export default function Home() {
const RequestForm: React.FC<PropsID> = ({ params }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // const response = await sendResponse(form);
      // const url = `${process.env.URL}/resevervation/post`;
      const url = `http://34.101.222.121:8080/reservation/post/${params.id}`;
      console.log(url);
      const body = {
        name: data.name,
        phone: data.phone,
        date: data.date.toDateString(),
        time: data.time,
        home_id: params.id,
      };
      const res = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {}
  };

  // const handleSubmit = async (data: form) => {
  //   console.log("clicked");
  // };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="08568274824" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>

              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time when you come" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="10.00">10.00</SelectItem>
                  <SelectItem value="11.00">11.00</SelectItem>
                  <SelectItem value="12.00">12.00</SelectItem>
                  <SelectItem value="13.00">13.00</SelectItem>
                  <SelectItem value="14.00">14.00</SelectItem>
                  <SelectItem value="15.00">15.00</SelectItem>
                  <SelectItem value="16.00">16.00</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RequestForm;
