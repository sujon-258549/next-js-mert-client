import Product from "@/components/modules/Home/Product/Product";
import Banner from "../../components/modules/Home/Banner/Banner";
import HomeCategory from "@/components/modules/Home/Category/Category";
import FutureProducts from "@/components/modules/Home/FutureProducts/FutureProducts";
import Subscribe from "@/components/modules/Home/Subscribe/Subscribe";

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
        <Subscribe />
      </div>
    </div>
  );
};

export default CommonPage;
