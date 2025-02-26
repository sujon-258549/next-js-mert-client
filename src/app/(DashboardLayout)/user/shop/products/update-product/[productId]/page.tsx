import UpdateProductForm from "@/components/modules/Dashboard/shop/Products/UpdateProductForm";
import { getOneProduct } from "@/server/Product";

const UpdateProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const data = await getOneProduct(productId);
  return (
    <div>
      <UpdateProductForm productdata={data.data} />
    </div>
  );
};

export default UpdateProduct;
