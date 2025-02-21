import { Button } from "@/components/ui/button";
import Image from "next/image";
import bannerPng from "../../../assets/Banner/bannerpng.png";
const Banner = () => {
  return (
    <div>
      <section className=" my-10">
        <div
          style={{
            background:
              'linear-gradient(to bottom,  rgba(255, 255, 255, 0), #ffffffbe), url("/bannerbg2.png"), url("/banner.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Optional: Full viewport height
          }}
          className=" rounded-md lg:h-[516px] md:px-10 lg:flex-row flex-col-reverse px-8 mx-auto py-10 lg:py-0 lg:flex gap-5 items-center md:grid-cols-2"
        >
          <div className=" lg:w-[60%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Don't Miss Out on <br />
              <span className="block my-3">These Unbeatable Black</span>
              Friday Deals!
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 pt-5">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <Button className="inline-flex items-center mr-2 rounded-full hover:text-black text-white justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Buy Now
            </Button>
            <Button className="inline-flex rounded-full items-center hover:text-white justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 bg-transparent hover:bg-customcolor text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              All Products
            </Button>
          </div>
          <div className="lg:w-[40%] relative   md:mt-0 lg:-mt-5 h-[300px] md:h-[500px]">
            <Image
              src={bannerPng}
              alt="banner-png"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
