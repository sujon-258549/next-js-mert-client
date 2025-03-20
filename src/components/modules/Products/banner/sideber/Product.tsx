"use client";
import ProductCart from "@/components/modules/Home/FutureProducts/ProductCart";
import PagePagination from "@/components/modules/paginaction/Pagination";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TPagination, TProduct } from "@/types";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Products = ({ data, meta }: { data: TProduct[]; meta: TPagination }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <section className="w-full">
      <div className="">
        {/* header section category */}
        <div className="flex justify-between rounded-full mb-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-[18px] font-semibold">Featured Products</h2>
            {searchParams.toString().length > 0 && (
              <Button
                onClick={() => router.push(`${pathname}`, { scroll: false })}
                className="bg-black rounded-full"
              >
                Clear Filters
              </Button>
            )}
          </div>
          <Link href={"/products"}>
            {" "}
            <Button variant={"outline"} className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <Separator />
        {/* category data */}
        <div className="grid gap-10 pt-5 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((product: TProduct) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
        <PagePagination meta={meta} />
      </div>
    </section>
  );
};

export default Products;
