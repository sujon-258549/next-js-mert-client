"use client";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "../utils/Logo";
import { TbLogin2 } from "react-icons/tb";
import HomeSearch from "../utils/HomeSearch";

const Navbar = () => {
  return (
    <section className="border-b border-slate-300">
      <div className="container ">
        <section className="flex py-2 justify-center items-center lg:justify-between flex-wrap ">
          <div>
            <Logo />
          </div>
          <div>
            <HomeSearch />
          </div>
          <div className="flex gap-2">
            <div>
              <button className="bg-transparent rounded-full border border-slate-500">
                {" "}
                <FaShoppingCart className="text-[38px] p-2" />
              </button>
            </div>
            <div>
              <button className="bg-transparent rounded-full border border-slate-500">
                {" "}
                <FaHeart className="text-[38px] p-2" />
              </button>
            </div>
            <div>
              <button className="bg-transparent flex px-5 py-2 items-center rounded-full border border-slate-500 text-black">
                Sign In <TbLogin2 className="ml-1 text-2xl" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Navbar;
