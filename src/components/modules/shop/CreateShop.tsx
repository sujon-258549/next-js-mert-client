/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import SingleLogo from "@/components/utils/SingleLogo";
import { Textarea } from "@/components/ui/textarea";
import IndexImageUpload from "@/components/ui/core/ImageUploder";
import { useState } from "react";
import ImagePreviewer from "@/components/ui/core/ImageUploder/ImagePreviewer";
import { toast } from "sonner";
import { createStore } from "@/server/Shop";
// import { zodResolver } from "@hookform/resolvers/zod";

import LoaderButton from "@/components/utils/Loader/LoaderButton";
// import { shopSchema } from "./createShop";

const CreateShop = () => {
  const [image, setImage] = useState<File[] | []>([]);
  const [imagePrevue, setImagePrevue] = useState<string[] | []>([]);
  const form = useForm();
  //     {
  //     // resolver: zodResolver(shopSchema),
  //     resolver: zodResolver(shopSchema),
  //   }
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const servicesOffered = data?.servicesOffered
      .split(",")
      .map((services: string) => services.trim())
      .filter((services: string) => services !== "");
    const modifiedData = {
      ...data,
      servicesOffered: servicesOffered,
      establishedYear: Number(data?.establishedYear),
    };
    console.log(modifiedData);
    const toastId = toast.loading("Registering shop...", { duration: 2000 });

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(modifiedData));
      formData.append("logo", image[0] as File);
      const result = await createStore(formData);
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        // Redirect or perform other actions on success
      } else {
        toast.error(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      toast.error("An error occurred while registering the shop.", {
        id: toastId,
        duration: 2000,
      });
      console.error(error);
    }
  };

  return (
    <section className="px-5 my-10">
      <div className="max-w-2xl mx-auto">
        <div
          style={{ boxShadow: "1px 1px 10px" }}
          className="border rounded-md p-5"
        >
          <div className="flex items-center gap-3 py-5">
            <div className="">
              <SingleLogo />
            </div>
            <div className="">
              <h1 className="text-xl font-bold lg:text-2xl">
                Shop Registration From
              </h1>
              <p>Welcome for Creating shop</p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="shopName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shop Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Shop Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessLicenseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business License Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Business License Number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter Address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="number"
                          placeholder="Enter Contact Number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Website URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="taxIdentificationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax Identification Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Tax Identification Number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="establishedYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Established Year</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="number"
                          placeholder="Enter Established Year"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="socialMediaLinks.facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Facebook URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="socialMediaLinks.twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Twitter URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="socialMediaLinks.instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter Instagram URL"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" md:flex gap-5">
                <div className="w-full md:w-[70%]">
                  <FormField
                    control={form.control}
                    name="servicesOffered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Offered</FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-36"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full md:w-[30%] mt-8">
                  {image.length > 0 ? (
                    <ImagePreviewer
                      setImagePreview={setImagePrevue}
                      imagePreview={imagePrevue}
                      setImageFiles={setImage}
                    />
                  ) : (
                    <IndexImageUpload
                      setImagePrevue={setImagePrevue}
                      imagePrevue={imagePrevue}
                      image={image}
                      label="Upload Images"
                      setImage={setImage}
                    />
                  )}
                </div>
              </div>{" "}
              {isSubmitting ? (
                <Button className="w-full mt-4">
                  <LoaderButton />
                </Button>
              ) : (
                <Button type="submit" className="w-full mt-4">
                  Register Shop
                </Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CreateShop;
