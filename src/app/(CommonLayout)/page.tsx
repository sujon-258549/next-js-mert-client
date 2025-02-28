import Product from "@/components/modules/Home/Product/Product";
import Banner from "../../components/modules/Home/Banner/Banner";
import HomeCategory from "@/components/modules/Home/Category/Category";
import FutureProducts from "@/components/modules/Home/FutureProducts/FutureProducts";
import Subscribe from "@/components/modules/Home/Subscribe/Subscribe";
import TopBrands from "@/components/modules/Home/Brand/TopBrands";
import FlashSale from "@/components/modules/Home/FlashSale/Flashsale";

const CommonPage = () => {
  return (
    <div>
      <div className="container">
        <Banner />
        <Product />
        <HomeCategory />
      </div>
      <FutureProducts />
      <div className="container">
        <FlashSale />
        <TopBrands />
        <Subscribe />
      </div>
    </div>
  );
};

export default CommonPage;
