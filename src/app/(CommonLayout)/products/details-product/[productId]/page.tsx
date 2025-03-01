import { getOneProduct } from "@/server/Product";
import ProductBanner from "../../../../../components/modules/Products/banner/ProductBanner";
import ProductDetails from "@/components/modules/Products/banner/Details/ProductDetails";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params;
  const { data } = await getOneProduct(productId);
  console.log(data);
  return (
    <div className="mt-10">
      <ProductBanner
        title="Product Details"
        path="Home - Shop - Product Details"
      />
      <ProductDetails data={data} />
    </div>
  );
};

export default page;
