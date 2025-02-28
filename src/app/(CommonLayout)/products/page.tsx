import Banner from "@/components/modules/Products/banner/Banner/Banner";
import FutureCollection from "@/components/modules/Products/banner/FutureCollection/FutureCollection";
import Product from "@/components/modules/Products/banner/sideber/Product";
import ProductSidebar from "@/components/modules/Products/banner/sideber/ProductSidebar";
import { getAllProduct } from "@/server/Product";
import React from "react";

const Products = async () => {
  const { data } = await getAllProduct();
  return (
    <div className="container">
      <Banner />
      <FutureCollection />
      <div className="flex">
        <ProductSidebar />
        <Product data={data} />
      </div>
    </div>
  );
};

export default Products;
