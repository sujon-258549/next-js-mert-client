/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { isTokenExpired } from "@/lib/isTokenExpired";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { newToken } from "../AuthServer";

export const createBrand = async (data: FormData) => {
  const cookiesStore = await cookies();
  let token = cookiesStore.get("accessToken")!.value;
  if (!token || (await isTokenExpired(token))) {
    const { data } = await newToken();
    token = data?.accessToken;
    cookiesStore.set("accessToken", token);
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    revalidateTag("BRAND");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBrand = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand`, {
      next: {
        tags: ["BRAND"],
      },
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        // Authorization: (await cookies()).get("accessToken")!.value,
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteBrand = async (brandId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/brand/${brandId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("BRAND");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
