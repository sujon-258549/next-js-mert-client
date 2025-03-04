/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TOrder } from "@/types/order";
import { cookies } from "next/headers";

export const createOrder = async (orderData: TOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/order`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(orderData),
    });
    // revalidateTag("BRAND");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
