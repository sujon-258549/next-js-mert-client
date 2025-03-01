import React from "react";

import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
const CaponForm = () => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  //   const Validation = !caponeCod;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...", { duration: 2000 });
    try {
      //   const modifyData = {
      //     discountPercentage: Number(data?.discountPercentage),
      //     products,
      //   };
      //   const result = await
      //   if (result?.success) {
      //     toast.success(result?.message, { id: toastId, duration: 2000 });
      //     // Redirect or perform other actions on success
      //   } else {
      //     toast.error(result?.message, { id: toastId, duration: 2000 });
      //   }
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
      <div className="space-y-6">
        <Card className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="caponeCod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Use Coupon Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        type="number"
                        placeholder="Enter Your Use Coupon Coded"
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
                <Button type="submit" className="w-full mt-4">
                  Apply
                </Button>
              )}
            </form>
          </Form>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Payment Details</h2>
          <p className="flex justify-between">
            Subtotal <span>subtotal.toFixed(2)</span>
          </p>
          <p className="flex justify-between">
            Shipping <span>shippingCost.toFixed(2)</span>
          </p>
          <p className="flex justify-between font-bold text-lg">
            Total <span>grandTotal.toFixed(2)</span>
          </p>
          <div className="flex gap-2 mt-4">
            <Checkbox
              // onClick={() => setCondition(!condition)}
              className=" text-black"
            />
            <p className="-mt-1">
              I have read and agree to the Terms and Conditions, Privacy
              Policy and Refund and Return Policy
            </p>
          </div>
          <Button disabled className="mt-4 w-full ">
            Confirm Order
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CaponForm;
