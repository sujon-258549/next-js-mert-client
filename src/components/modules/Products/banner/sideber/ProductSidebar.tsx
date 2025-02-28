import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";

const ProductSidebar = () => {
  return (
    <Card className="w-64 p-4 border rounded-lg bg-white">
      {/* Filter By Price */}
      <div className="mb-6">
        <h3 className="font-semibold">Filter By Price</h3>
        <div className="flex gap-2 mt-2">
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
        <Slider className="mt-2" defaultValue={[0]} max={1000} step={10} />
      </div>

      {/* Product Types */}
      <div className="mb-6">
        <h3 className="font-semibold">Product Types</h3>
        {[
          "Laptop & Accessories",
          "Computers-Pc",
          "Speakers & Headset",
          "Keyboards & Mouse",
          "Camera",
          "Video Recording",
          "Tablets",
          "Table Lights",
        ].map((type) => (
          <div key={type} className="flex items-center space-x-2 mt-1">
            <Checkbox id={type} />
            <Label htmlFor={type}>{type}</Label>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-semibold">Brands</h3>
        {["HP (15)", "Apple (58)", "Dell (64)", "Asus (11)", "Camera"].map(
          (brand) => (
            <div key={brand} className="flex items-center space-x-2 mt-1">
              <Checkbox id={brand} />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          )
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold">Rating</h3>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center space-x-2 mt-1">
            <Checkbox id={`rating-${rating}`} />
            <Label htmlFor={`rating-${rating}`} className="flex items-center">
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
            </Label>
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
