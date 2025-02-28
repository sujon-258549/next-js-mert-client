import { Button } from "@/components/ui/button";
import { getAllBrand } from "@/server/Brand";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TopBrands = async () => {
  const { data: categories } = await getAllBrand();
  return (
    <div className="pb-16 pt-10 md:pt-20 md:pb-32">
      {/* header section category */}
      <div className="flex justify-between rounded-full">
        <h2 className="text-2xl md:text-3xl font-bold">Top Brand</h2>
        <Link href={"/products"}>
          {" "}
          <Button variant={"outline"} className="rounded-full">
            All Collection
          </Button>
        </Link>
      </div>
      {/* category data */}
      <div className="grid grid-cols-2 pt-5 md:pt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array(8)
          ?.fill(categories[0])
          ?.map((category: Category, index: number) => (
            <div
              //   style={{ boxShadow: "1px 1px 8px" }}
              className="bg-[#ffffff8c] border-[10px] border-[#ffffff] rounded-md py-4"
              key={index}
            >
              <Image
                // @ts-expect-error src
                src={category?.logo}
                alt={category?.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopBrands;
