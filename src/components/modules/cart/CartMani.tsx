/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { useAppSelector } from "@/redux/hooks";
import { orderProductSelector, TCartProduct } from "@/redux/features/cartSlice";
import { TProduct } from "@/types";

const ShoppingCart = () => {
  const [condition, setCondition] = useState(false);
  console.log(condition);
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const caponeCod = form.watch("caponeCod");

  const Validation = !caponeCod;
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

  const products = useAppSelector(orderProductSelector);

  return (
    <section className="mt-10">
      <div className="grid md:grid-cols-3 gap-8 p-6 container">
        {/* Cart Items */}
        <Card className="md:col-span-2 p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <p className="text-gray-500">Total Cart Items: {products.length}</p>
          </div>
          <div className="mt-4 space-y-4">
            {products?.map((product: TCartProduct) => (
              <div
                key={product._id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg">
                    <img src={product.imageUrls[0]} />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-gray-500">brand: {product.brand.name}</p>
                    <p className="font-bold">Price: ${product.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p>Quantity</p>
                  <Button variant="outline" size="icon">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span>{product?.orderQuantity}</span>
                  <Button variant="outline" size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button className="bg-black rounded-full">Continue Shopping</Button>
            <Button className="bg-red-500 rounded-full">Clear Cart</Button>
          </div>
        </Card>

        {/* Coupon & Payment Details */}
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
                  <Button
                    disabled={Validation}
                    type="submit"
                    className="w-full mt-4"
                  >
                    Apply
                  </Button>
                )}
              </form>
            </Form>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-bold pb-3">Payment Details</h2>
            <p className="flex justify-between font-medium">
              Subtotal <span className="font-bold">$300</span>
            </p>
            <p className="flex justify-between font-medium py-2">
              Discount <span className="font-bold">$200</span>
            </p>
            <p className="flex justify-between font-medium">
              Shipment cost <span className="font-bold">$150</span>
            </p>
            <p className="flex justify-between font-medium pt-5">
              Grand total <span className="font-bold">$1500</span>
            </p>

            <Button disabled={condition} className="mt-4 w-full ">
              Confirm Order
            </Button>
          </Card>
          <div className="flex gap-2 mt-4">
            <Checkbox
              onClick={() => setCondition(!condition)}
              className=" text-black"
            />
            <p className="-mt-1 text-sm">
              I have read and agree to the Terms and Conditions, Privacy
              Policy and Refund and Return Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
