import ManageBrand from "@/components/modules/Dashboard/shop/Brand/ManageBrand";
import { getAllBrand } from "@/server/Brand";
import React from "react";

const managePage = async () => {
  const { data, meta } = await getAllBrand();
  return (
    <div>
      <ManageBrand data={data} meta={meta} />
    </div>
  );
};

export default managePage;
