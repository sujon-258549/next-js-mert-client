import CheckoutPage from "../../../../components/modules/CheckOut/CheckOut";
import CommonBanner from "../../../../components/modules/Products/banner/ProductBanner";

const Shipping = () => {
  return (
    <div className="mt-10">
      <CommonBanner title="Shipping" path="Home - Cart - Shipping " />
      <CheckoutPage />
    </div>
  );
};

export default Shipping;
