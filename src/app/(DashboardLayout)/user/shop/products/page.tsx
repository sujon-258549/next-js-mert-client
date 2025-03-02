import Products from "@/components/modules/Dashboard/shop/Products/Products";
import { getAllProduct } from "@/server/Product";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  console.log(page);
  const { data, meta } = await getAllProduct(page, "5");
  return (
    <div>
      <Products meta={meta} data={data} />
    </div>
  );
};

export default ProductPage;
