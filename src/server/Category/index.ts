/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (data: FormData) => {
  console.log(data);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
      next: {
        tags: ["CATEGORY"],
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
export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/category/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
