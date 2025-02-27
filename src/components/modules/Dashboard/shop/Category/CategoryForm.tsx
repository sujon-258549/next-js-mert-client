/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormHadar from "@/components/utils/FormHadar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviewer";
import IndexImageUpload from "@/components/ui/core/ImageUploader";
import { useState } from "react";
import { createCategory } from "@/server/Category";
import { toast } from "sonner";
const CategoryForm = () => {
  const [image, setImage] = useState<File[] | []>([]);
  const [imagePrevue, setImagePrevue] = useState<string[] | []>([]);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering shop...", { duration: 2000 });
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("icon", image[0] as File);
      const result = await createCategory(formData);
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        // Redirect or perform other actions on success
      } else {
        toast.error(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      console.log(error);
      //   toast.error(error, {
      //     id: toastId,
      //     duration: 2000,
      //   });
    }
  };
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Category</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <FormHadar
              formHadar="Create Category"
              formParagraph="Welcome to the Create Category page. Please fill in the details to create a new category."
            />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Established Year</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="text"
                          placeholder="Enter Your Category Name"
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
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
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
                    Create Category
                  </Button>
                )}
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryForm;
