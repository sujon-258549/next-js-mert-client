import Products from "@/components/modules/Dashboard/shop/Products/Products";
import { getAllCategory } from "@/server/Category";

const ProductPage = async () => {
  const { data, meta } = await getAllCategory();
  return (
    <div>
      <Products meta={meta} data={data} />
    </div>
  );
};

export default ProductPage;
