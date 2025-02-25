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
import { Textarea } from "@/components/ui/textarea";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviewer";
import IndexImageUpload from "@/components/ui/core/ImageUploader";
import { useState } from "react";
import { toast } from "sonner";
import { createBrand } from "@/server/Brand";

const BrandForm = () => {
  const [image, setImage] = useState<File[] | []>([]);
  const [imagePrevue, setImagePrevue] = useState<string[] | []>([]);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Brand Creating...", { duration: 2000 });
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", image[0] as File);
      const result = await createBrand(formData);
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        // Redirect or perform other actions on success
      } else {
        toast.error(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      console.log();
      toast.error(error.slice(0, 20), {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Brands</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <FormHadar
              formHadar="Create Brands"
              formParagraph="Welcome to the Create Brands page. Please fill in the details to create a new Brands."
            />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className=" md:flex gap-5">
                  <div className="w-full md:w-[70%]">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Name</FormLabel>
                          <FormControl>
                            <Textarea {...field} value={field.value || ""} />
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
                    Create Brand
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

export default BrandForm;
