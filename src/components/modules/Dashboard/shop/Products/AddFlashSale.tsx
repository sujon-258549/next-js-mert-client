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
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { createFlashSale } from "@/server/flash-sale";
const AddFlashSale = ({ products }: { products: string[] }) => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const discountPercentage = form.watch("discountPercentage");

  const Validation = !(products.length > 0) || !discountPercentage;
  console.log(Validation);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...", { duration: 2000 });
    try {
      const modifyData = {
        discountPercentage: Number(data?.discountPercentage),
        products,
      };
      console.log(modifyData);
      const result = await createFlashSale(modifyData);
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
          <Button disabled={!(products.length > 0)}>Add Flash Sale</Button>
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
                  name="discountPercentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount Percentage</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="number"
                          placeholder="Enter Your discount Percentage"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isSubmitting ? (
                  <Button className="w-full mt-4">
                    <LoaderButton />
                  </Button>
                ) : (
                  <Button
                    disabled={Validation}
                    type="submit"
                    className="w-full mt-4"
                  >
                    Send discount Percentage
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

export default AddFlashSale;
