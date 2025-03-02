"use client";
import { Button } from "@/components/ui/button";
import { getAllProduct } from "@/server/Product";
import { TProduct } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState<TProduct[] | []>([]);
  useEffect(() => {
    const fetchdata = async () => {
      const [productsData] = await Promise.all([getAllProduct()]);
      setProducts(productsData.data);
    };
    fetchdata();
  }, []);
  return (
    <div className="">
      <div className="grid gap-10 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.slice(0, 4)?.map((product: TProduct) => (
          <div
            key={product._id}
            style={{
              boxShadow: "1px 1px 10px ",
              background:
                "linear-gradient(to bottom, white, white 80%, #8dbac1 100%, #0498AF 100%)",
            }}
            className="group border-2 border-white flex w-full max-w-sm mx-auto md:max-w-full flex-col self-center overflow-hidden rounded-lg"
          >
            <a
              className="relative mx-3 mt-2 flex h-60 lg:h-44 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="peer absolute top-0 right-0 h-full w-full object-cover"
                src={product?.imageUrls[0]}
                alt="product image"
              />
              <img
                className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                src={product?.imageUrls[1]}
                alt="product image"
              />
              <svg
                className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-customcolor transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                />
              </svg>
              {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
            </a>
            <div className="mt-4 px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-customcolor">
                <Link href={`/products/details-product/${product?._id}`}>
                  {product?.name}
                </Link>
              </h5>

              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-black">
                    ${product?.price}
                  </span>
                </p>
              </div>
              <Button className="w-full">
                {" "}
                <FaCartArrowDown /> Buy Now{" "}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
