"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EventFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants/data";
import DropDown from "./Dropdown";
import FileUploader from "./FileUploader";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Checkbox } from "@/components/ui/checkbox";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};
export default function EventForm({ userId, type }: EventFormProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [files, setFiles] = useState<File[]>([]);
  const initialValues = eventDefaultValues;
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Upload Cover Image</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex-flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Event title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please Enter Event title.."
                      {...field}
                      className=" "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <DropDown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Add your description." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Event Venue</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Event Location or Online"
                      {...field}
                      className=" "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row ">
            <FormField
              control={form.control}
              name="startDateTime"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Start Date</FormLabel>
                  <FormControl className=" bg-white">
                    <div className=" py-2 rounded-md">
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDateTime"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>End Date</FormLabel>
                  <FormControl className=" bg-white">
                    <div className=" py-2 rounded-md">
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Free</FormLabel>
                  <FormControl className=" bg-white">
                    <Checkbox
                      id="isFree"
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl className=" bg-white">
                    <Input
                      type="number"
                      placeholder="Enter Price (LKR)"
                      {...field}
                      className=" p-regular-14"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormLabel>Any other URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL" {...field} className=" " />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" py-3 w-full">
            <Button
              type="submit"
              className=""
              disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? "Submitting...  "
                : `${type} Event`}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
