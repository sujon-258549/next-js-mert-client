"use client";

import { FaHeart, FaShopify, FaShoppingCart } from "react-icons/fa";
import Logo from "../utils/Logo";
import { TbLogin2 } from "react-icons/tb";
import HomeSearch from "../utils/HomeSearch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

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
              <button className="bg-transparent rounded-full border border-text-customcolor">
                {" "}
                <FaShoppingCart className="text-customcolor text-[38px] p-2" />
              </button>
            </div>
            <div>
              <button className="bg-transparent rounded-full border border-text-customcolor">
                {" "}
                <FaHeart className="text-[38px] text-customcolor p-2" />
              </button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="hover:bg-customcolor hover:text-white flex px-5 py-2 items-center rounded-full"
              >
                Sign In <TbLogin2 className="ml-1  text-2xl" />
              </Button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="flex px-5 hover:bg-customcolor hover:text-white py-2 items-center rounded-full border"
              >
                C Shop
                <FaShopify className="ml-1 text-2xl" />
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/148360784?v=4" />
                    <AvatarFallback>Profile Image</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-5">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuItem>My Order</DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <Button className="w-full bg-red-600">Log out</Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Navbar;
