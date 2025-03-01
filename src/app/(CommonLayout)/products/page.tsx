import Banner from "@/components/modules/Products/banner/Banner/Banner";
import ProductContact from "@/components/modules/Products/banner/Contact/Contact";
import FutureCollection from "@/components/modules/Products/banner/FutureCollection/FutureCollection";
import Product from "@/components/modules/Products/banner/sideber/Product";
import ProductSidebar from "@/components/modules/Products/banner/sideber/ProductSidebar";
import { getAllProduct } from "@/server/Product";
import React from "react";

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  // @ts-expect-error page
  const { page } = searchParams;
  const { data, meta } = await getAllProduct(page, "6");
  return (
    <div className="container">
      <Banner />
      <FutureCollection />
      <div className="flex gap-5 mb-10 md:mb-20">
        <ProductSidebar />
        <Product data={data} meta={meta} />
      </div>
      <ProductContact />
    </div>
  );
};

export default Products;
