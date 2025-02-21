import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div>
      <section
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bannerbg2.png" and '')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Optional: setting height to cover the full viewport height
        }}
        className=""
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" md:text-4xl text-3xl lg:text-5xl font-extrabold">
              Don,t Miss Out on <br /> These Unbeatable Black <br /> Friday
              Deals!
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
