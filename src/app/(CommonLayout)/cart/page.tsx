import ShoppingCart from "@/components/modules/cart/CartMani";
import ProductContact from "@/components/modules/Products/banner/Contact/Contact";
import CommonBanner from "@/components/modules/Products/banner/ProductBanner";

const CartPage = () => {
  return (
    <div className="pt-10">
      <div className="container">
        <CommonBanner title="Cart Page" path="Home - Cart Page" />
      </div>
      <ShoppingCart />
      <section className="mt-10">
        <div className="container ">
          <ProductContact />
        </div>
      </section>
    </div>
  );
};

export default CartPage;
