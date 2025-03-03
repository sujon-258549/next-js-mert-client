import Product from "@/components/modules/Home/Product/Product";
import Banner from "../../components/modules/Home/Banner/Banner";
import HomeCategory from "@/components/modules/Home/Category/Category";
import FutureProducts from "@/components/modules/Home/FutureProducts/FutureProducts";
import Subscribe from "@/components/modules/Home/Subscribe/Subscribe";
import TopBrands from "@/components/modules/Home/Brand/TopBrands";
import FlashSale from "@/components/modules/Home/FlashSale/FlashSale";
import { getAllProduct } from "@/server/Product";

const CommonPage = async () => {
  const { data } = await getAllProduct();
  console.log(data);
  return (
    <div>
      <div className="container">
        <Banner />
        <Product />
        <HomeCategory />
      </div>
      <FutureProducts data={data} />
      <div className="container">
        <FlashSale data={data} />
        <TopBrands />
        <Subscribe />
      </div>
    </div>
  );
};

export default CommonPage;
