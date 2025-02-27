import { Button } from "@/components/ui/button";

import styles from "../Banner/banner.module.css";
const Subscribe = () => {
  return (
    <div>
      <section className="my-10">
        <div className={`${styles.banner}`}>
          <div className="bg-[url('/man.png')] bg-cover bg-top-left bg-no-repeat ">
            {/* <div className={`${styles.subscribe}`}> */}
            <div className="rounded-md lg:h-[516px] md:px-10 px-8 mx-auto py-10 lg:py-0 flex flex-col lg:flex-row-reverse  gap-5 items-center">
              {/* Right Image (Appears First on Mobile) */}
              <div className="w-full lg:w-[30%] relative  lg:-mt-5 h-[400px] md:h-[500px]"></div>

              {/* Left Content */}
              <div className="w-full lg:w-[70%]">
                <h1 className="text-3xl lg:block hidden md:text-4xl lg:text-5xl font-extrabold">
                  <span className="block my-3">
                    Stay Update with Exclusive{" "}
                  </span>
                  Offers
                </h1>

                <p className="max-w-2xl lg:text-left text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 pt-5">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="inline-flex w-full md:w-32 items-center rounded-full hover:text-black text-white justify-center px-5 py-3 text-base font-medium border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                    Buy Now
                  </Button>
                  <Button className="inline-flex w-full md:w-32 rounded-full items-center hover:text-white justify-center px-5 py-3 text-base font-medium border border-gray-300 bg-transparent hover:bg-customcolor text-black focus:ring-4 focus:ring-gray-100">
                    All Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
