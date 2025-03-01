/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { toast } from "sonner";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import CaponForm from "./CoponForm";

const CheckoutPage = () => {
  //   const form = useForm();
  //   const {
  //     formState: { isSubmitting },
  //   } = form;
  //   //   const Validation = !caponeCod;
  //   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //     const toastId = toast.loading("Creating...", { duration: 2000 });
  //     try {
  //       //   const modifyData = {
  //       //     discountPercentage: Number(data?.discountPercentage),
  //       //     products,
  //       //   };
  //       //   const result = await
  //       //   if (result?.success) {
  //       //     toast.success(result?.message, { id: toastId, duration: 2000 });
  //       //     // Redirect or perform other actions on success
  //       //   } else {
  //       //     toast.error(result?.message, { id: toastId, duration: 2000 });
  //       //   }
  //     } catch (error: any) {
  //       console.log(error);
  //       //   toast.error(error, {
  //       //     id: toastId,
  //       //     duration: 2000,
  //       //   });
  //     }
  //   };

  return (
    <section className="mt-10">
      <div className="grid md:grid-cols-3 gap-8 p-6 container">
        {/* Cart Items */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Email Address" />
            <Input
              placeholder="Street Name and House Number"
              className="md:col-span-2"
            />
            <Input placeholder="City" />
            <Input placeholder="Region" />
            <Input placeholder="Postal Code" className="md:col-span-2" />
            <Input placeholder="Comment" className="md:col-span-2 h-20" />
          </div>

          {/* Shipping Options */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Shipping</h2>
          <RadioGroup>
            <Label className="flex items-center gap-2">
              <RadioGroupItem value="free" /> Free Shipping - $0 (7-30 days)
            </Label>
            <Label className="flex items-center gap-2">
              <RadioGroupItem value="regular" /> Regular Shipping - $7.50 (7-14
              days)
            </Label>
            <Label className="flex items-center gap-2">
              <RadioGroupItem value="express" /> Express Shipping - $12.50
              (Fastest)
            </Label>
          </RadioGroup>
        </Card>

        {/* Coupon & Payment Details */}
        <div>
          <CaponForm />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
