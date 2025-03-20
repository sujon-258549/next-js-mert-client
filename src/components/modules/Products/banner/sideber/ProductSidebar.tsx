"use client";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TCategoryData } from "@/types";
import { Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
type TProductSidebarProps = {
  data: {
    categories: TCategoryData[];
    brands: TCategoryData[];
  };
};
const ProductSidebar = ({ data }: TProductSidebarProps) => {
  const { categories, brands } = data;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [price, setPrice] = useState([0]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handelSearchCategory = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    // router.push(`${pathname}?${query}=${value.toString()}`, { scroll: false });
    router.push(`${pathname}?${params.toString()}`, { scroll: false }); //multiple querysearchparams add to search params
  };
  return (
    <Card className="w-64 p-4 border rounded-lg bg-white">
      {/* Filter By Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Filter By Price</h3>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Min"
            className="border p-1 rounded w-1/2"
          />
          <input
            type="text"
            placeholder="Max"
            className="border p-1 rounded w-1/2"
          />
        </div>
        <div className="flex justify-between mt-5">
          <p>0$</p>
          <p>500000$</p>
        </div>
        <Slider
          className="mt-3"
          defaultValue={price}
          max={500000}
          step={10}
          onValueChange={(value) => {
            setPrice(value);
            handelSearchCategory("price", value[0]);
          }} // Update state on change
        />
        <p className="mt-4">Selected Price: {price[0]}</p>
      </div>

      {/* Product Types */}
      <h3 className="font-semibold">Filter By Category</h3>
      {categories.map((category) => (
        <div key={category._id} className="flex items-center space-x-2 mt-1">
          <input
            type="radio"
            id={category._id}
            name="productCategory"
            value={category._id}
            onClick={() => handelSearchCategory("category", category._id)}
            checked={selectedCategory === category._id}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-4 h-4"
          />
          <label
            htmlFor={category._id}
            className="text-gray-700 cursor-pointer"
          >
            {category.name}
          </label>
        </div>
      ))}

      {/* Brands */}
      <h3 className="font-semibold mt-5">Filter By Brands</h3>
      {brands.map((brand) => (
        <div key={brand._id} className="flex items-center space-x-2 mt-1">
          <input
            type="radio"
            id={brand._id}
            name="productBrand"
            value={brand._id}
            checked={selectedBrand === brand._id}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-4 h-4"
            onClick={() => handelSearchCategory("brand", brand._id)}
          />
          <label htmlFor={brand._id} className="text-gray-700 cursor-pointer">
            {brand.name}
          </label>
        </div>
      ))}

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold">Rating</h3>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center space-x-2 mt-1">
            <input
              onChange={() => setSelectedRating(rating)}
              checked={selectedRating === rating}
              type="radio"
              id={`rating-${rating}`}
              name="rating"
              onClick={() => handelSearchCategory("rating", rating)}
              //   className="hidden"
            />
            <label
              htmlFor={`rating-${rating}`}
              className="flex items-center cursor-pointer"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < rating
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold">Availability</h3>
        {["In Stock", "Pre Order", "Upcoming"].map((status) => (
          <div key={status} className="flex items-center space-x-2 mt-1">
            <Checkbox id={status} />
            <Label htmlFor={status}>{status}</Label>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProductSidebar;
