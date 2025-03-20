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

export const getAllProduct = async (
  page?: string,
  limit?: string,
  query?: Record<string, string>
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
        method: "GET",
        headers: {
          //   Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "Application/json",
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getOneProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("PRODUCT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateProduct = async (
  data: FormData,
  productId: string
): Promise<any> => {
  console.log(productId);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
      {
        method: "PATCH",
        body: data,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("PRODUCT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update product
// export const updateProduct = async (
//     productData: FormData,
//     productId: string
//   ): Promise<any> => {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
//         {
//           method: "PATCH",
//           body: productData,
//           headers: {
//             Authorization: (await cookies()).get("accessToken")!.value,
//           },
//         }
//       );
//       revalidateTag("PRODUCT");
//       return res.json();
//     } catch (error: any) {
//       return Error(error);
//     }
//   };
