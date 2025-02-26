import Products from "@/components/modules/Dashboard/shop/Products/Products";
import { getAllProduct } from "@/server/Product";

const ProductPage = async () => {
  const { data, meta } = await getAllProduct();
  return (
    <div>
      <Products meta={meta} data={data} />
    </div>
  );
};

export default ProductPage;
