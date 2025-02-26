/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../ui/form";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import SingleLogo from "@/components/utils/SingleLogo";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { createStore } from "@/server/Shop";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import IndexImageUpload from "@/components/ui/core/ImageUploader";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviewer";
import { Separator } from "@/components/ui/separator";
import { FaPlus } from "react-icons/fa";

const ProductsAddForm = () => {
  const [image, setImage] = useState<File[] | []>([]);
  const [imagePrevue, setImagePrevue] = useState<string[] | []>([]);
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      stock: "",
      weight: "",
      availableColors: [{ value: "" }],
      keyFeatures: [{ value: "" }],
      specification: [{ key: "", value: "" }],
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  const { append: appendColor, fields: fieldColor } = useFieldArray({
    control: form.control,
    name: "availableColors",
  });
  const { append: appendKyeFuture, fields: fieldKyeFuture } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });
  const { append: appendspecification, fields: fieldspecification } =
    useFieldArray({
      control: form.control,
      name: "specification",
    });

  const addAppendColor = () => {
    appendColor({
      value: "",
    });
  };
  const addAppendKyeFuture = () => {
    appendKyeFuture({
      value: "",
    });
  };
  const addAppendspecification = () => {
    appendspecification({
      key: "",
      value: "",
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // color create array
    const colorProperty = data.availableColors.map(
      (color: { value: string }) => color.value
    );
    // keyFeatures create array
    const keyFeatures = data.keyFeatures.map(
      (keyFuture: { value: string }) => keyFuture.value
    );
    // kye and value element added for specification
    const specification: { [key: string]: string } = {};
    data.specification.forEach((element: { key: string; value: string }) => {
      specification[element.key] = element.key;
    });
    console.log(colorProperty, keyFeatures, specification);
    // const toastId = toast.loading("Registering shop...", { duration: 2000 });

    // try {
    //   const formData = new FormData();
    //   formData.append("data", JSON.stringify(modifiedData));
    //   formData.append("logo", image[0] as File);
    //   const result = await createStore(formData);
    //   if (result?.success) {
    //     toast.success(result?.message, { id: toastId, duration: 2000 });
    //     // Redirect or perform other actions on success
    //   } else {
    //     toast.error(result?.message, { id: toastId, duration: 2000 });
    //   }
    // } catch (error: any) {
    //   toast.error("An error occurred while registering the shop.", {
    //     id: toastId,
    //     duration: 2000,
    //   });
    //   console.error(error);
    // }
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
                Product add From
              </h1>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <Separator />
              <h2 className="text-xl text-customcolor md:text-2xl font-bold">
                Basic Information
              </h2>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Product Name"
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
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="number"
                          placeholder="Enter Product Price"
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
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Product Category"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Product Brand"
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
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Product Weight"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="number"
                          placeholder="Enter Product Stock"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36"
                        placeholder="Enter your Description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Image uploader */}
              <Separator />
              <h2 className="text-xl text-customcolor md:text-2xl font-bold">
                Image
              </h2>
              <Separator />
              <div>
                <div className="w-full gap-3 flex mt-8">
                  {/* {image.length > 0 ? ( */}
                  <div
                    className={`${
                      image.length === 3 ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    <IndexImageUpload
                      setImagePrevue={setImagePrevue}
                      imagePrevue={imagePrevue}
                      image={image}
                      label="Upload Images"
                      setImage={setImage}
                    />
                  </div>

                  {/* ) : ( */}
                  <ImagePreviewer
                    setImagePreview={setImagePrevue}
                    imagePreview={imagePrevue}
                    setImageFiles={setImage}
                    className="flex gap-3 flex-wrap"
                  />
                  {/* )} */}
                </div>
              </div>

              {/* color */}
              <Separator />
              <div className="flex justify-between">
                <h2 className="text-xl text-customcolor md:text-2xl font-bold">
                  Available Colors
                </h2>
                <Button onClick={addAppendColor} variant={"outline"}>
                  <FaPlus />
                </Button>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {fieldColor.map((files, index) => (
                  <FormField
                    key={files.id} // Make sure `files.id` is unique
                    control={form.control}
                    name={`availableColors.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color {index + 1}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value || ""}
                            placeholder="Enter Available Colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              {/* kye future */}
              <Separator />
              <div className="flex justify-between">
                <h2 className="text-xl text-customcolor md:text-2xl font-bold">
                  Key Features
                </h2>
                <Button onClick={addAppendKyeFuture} variant={"outline"}>
                  <FaPlus />
                </Button>
              </div>
              <Separator />
              {fieldKyeFuture.map((files, index) => (
                <FormField
                  key={files.id} // Make sure `files.id` is unique
                  control={form.control}
                  name={`keyFeatures.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>keyFeatures {index + 1}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter keyFeatures"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              {/* kye future */}
              <Separator />
              <div className="flex justify-between">
                <h2 className="text-xl text-customcolor md:text-2xl font-bold">
                  Specification
                </h2>
                <Button onClick={addAppendspecification} variant={"outline"}>
                  <FaPlus />
                </Button>
              </div>
              <Separator />
              {fieldspecification.map((specificationField, index) => (
                <div key={specificationField.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name={`specification.${index}.key`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Future Name {index + 1}</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value || ""}
                              type="text"
                              placeholder="Enter Future name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`specification.${index}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Future Description {index + 1}</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value || ""}
                              type="text"
                              placeholder="Enter Future description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
              {isSubmitting ? (
                <Button className="w-full mt-4">
                  <LoaderButton />
                </Button>
              ) : (
                <Button type="submit" className="w-full mt-4">
                  Add Product
                </Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProductsAddForm;
