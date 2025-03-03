"use client";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import Link from "next/link";
import {
  FaCartArrowDown,
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import Comedown from "./Comedowns";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/features/cartSlice";

const FlashSale = ({ data }: { data: TProduct[] }) => {
  const dispatch = useAppDispatch();
  const handelAddToCart = (product: TProduct) => {
    dispatch(addProduct(product));
  };
  return (
    <section className="py-16 md:py-32">
      <div className="">
        {/* header section category */}
        <div className="flex justify-between rounded-full mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Flash Deals</h2>
          <div className="md:block hidden mt-1">
            <Comedown />
          </div>
          <Link href={"/products"}>
            {" "}
            <Button variant={"outline"} className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="block md:hidden mb-10 md:-mt-0 -mt-6">
          <Comedown />
        </div>
        {/* category data */}
        <div className="grid gap-10 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.slice(2, 5)?.map((product: TProduct) => (
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
                className="relative mx-3 mt-2 flex h-60 lg:h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="peer absolute top-0 w-20 right-0 h-full w-full object-cover"
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
                <p className="text-[16px] pb-2 items-center flex gap-2 text-black">
                  <FaStar className="text-yellow-500" />: 5.00
                </p>
                <div>
                  <Link href={`/products/details-product/${product?._id}`}>
                    <h5 className="text-xl tracking-tight font-semibold text-customcolor">
                      {product?.name}
                    </h5>
                  </Link>
                </div>
                <p className="text-[16px] pb-2 pt-2 items-center flex gap-2 text-black">
                  {product?.description.slice(0, 30)}
                </p>
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-xl tracking-tight font-semibold text-black">
                    Price:{" "}
                    <span className="text-gray-800">
                      $
                      {Math.floor((product?.offerPrice as number) + 1) ?? "N/A"}
                    </span>
                    <del className="ml-2 text-[16px] text-gray-500">
                      ${product.price ?? "N/A"}
                    </del>
                  </h4>
                </div>
              </div>
              <div className="px-5 pb-5 -mt-5">
                <div className="flex gap-3 ">
                  <button className="bg-transparent rounded-full border border-customcolor">
                    <FaHeart className="text-[38px] text-customcolor p-2" />
                  </button>
                  <button className="bg-transparent rounded-full border border-customcolor">
                    <FaShoppingCart className="text-[38px] text-customcolor p-2" />
                  </button>
                  <Button
                    onClick={() => handelAddToCart(product)}
                    disabled={!product.stock}
                    variant={"outline"}
                    className="w-full rounded-full"
                  >
                    {" "}
                    <FaCartArrowDown /> Add to cart{" "}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
