import { Button } from "@/components/ui/button";
import styles from "../Banner/banner.module.css";
import subscribeImage from "../.././../../assets/Home/man.png";
import Image from "next/image";
const Subscribe = () => {
  return (
    <div>
      <section className="my-10">
        <div className={`${styles.banner}`}>
          <div>
            <div className="rounded-md relative lg:h-[420px] md:px-10 px-8  py-10  lg:py-0 md:flex  gap-5 items-center">
              {/* Right Image (Appears First on Mobile) */}

              {/* Left Content */}
              <div className="w-full md:w-[65%]  md:py-10 lg:py-0">
                <h1 className="text-3xl hidden lg:block md:text-4xl lg:text-5xl font-extrabold">
                  <span className="block my-3">
                    Stay Update with Exclusive{" "}
                  </span>
                  Offers
                </h1>
                <h1 className="text-3xl text-center md:text-left lg:hidden block md:text-4xl lg:text-5xl font-extrabold">
                  Stay Update with Exclusive Offers
                </h1>

                <p className="max-w-2xl md:text-left text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 pt-5">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>

                {/* Buttons */}
                <div className="">
                  <form>
                    <div className="md:flex md:justify-start justify-center mx-auto md:mx-0 gap-3 max-w-md ">
                      <input
                        type="text"
                        id="first_name"
                        className="bg-white border rounded-full text-[16px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Email"
                        required
                      />
                      <Button className="inline-flex w-full mt-5 md:mt-0 md:w-32 items-center rounded-full hover:text-black text-white justify-center  text-base font-medium  focus:ring-4 focus:ring-gray-100">
                        Subscribe
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-[35%] mx-auto">
                {/* className={`${styles.man1}`} */}
                <div>
                  <Image
                    className="md:absolute mt-10 -mb-10 md:-mb-0 md:mt-0 mx-auto bottom-0 right-0 w-[350px] h-[300px] md:w-[294px] md:h-[300px] lg:w-[340px] lg:h-[360px]"
                    src={subscribeImage}
                    alt="sub"
                  />
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
