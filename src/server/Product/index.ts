/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("PRODUCT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProduct = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
      next: {
        tags: ["PRODUCT"],
      },
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
