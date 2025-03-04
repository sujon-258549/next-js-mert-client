import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCart from "./ProductCart";
import { TProduct } from "@/types";

const FutureProducts = ({ data }: { data: TProduct[] }) => {
  console.log(data);

  return (
    <section className="bg-[#ffffff94] py-16 md:py-32">
      <div className="container">
        {/* header section category */}
        <div className="flex justify-between rounded-full mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link href={"/products"}>
            <Button variant={"outline"} className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        {/* category data */}
        <div className="grid gap-10 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data?.slice(0, 4)?.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
