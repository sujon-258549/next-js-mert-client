import { Button } from "@/components/ui/button";
import { getAllCategory } from "@/server/Category";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

const HomeCategory = async () => {
  const { data: categories } = await getAllCategory();
  return (
    <div className="py-16 md:py-32">
      {/* header section category */}
      <div className="flex justify-between rounded-full">
        <h2 className="text-2xl md:text-3xl font-bold">Category</h2>
        <Link href={"/products"}>
          {" "}
          <Button variant={"outline"} className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      {/* category data */}
      <div className="grid grid-cols-2 pt-5 md:pt-10 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {Array(12)
          ?.fill(categories[0])
          ?.map((category: Category, index: number) => (
            <div
              style={{ boxShadow: "1px 1px 8px" }}
              className="bg-[#ffffff8c] border-2 border-[#ffffff] rounded-md py-4"
              key={index}
            >
              <Image
                // @ts-expect-error src
                src={category?.icon}
                alt={category?.name}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h4 className="text-sm md:text-xl pt-2 text-center font-serif">
                {category?.name}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCategory;
