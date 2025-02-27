import DetailsProduct from "@/components/modules/Dashboard/shop/Products/DetailsProduct";
import { getOneProduct } from "@/server/Product";
import React from "react";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params;
  const { data } = await getOneProduct(productId);
  console.log(data);
  return (
    <div>
      <DetailsProduct data={data} />
    </div>
  );
};

export default page;
