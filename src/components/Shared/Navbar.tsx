"use client";
import { FaHeart, FaShopify, FaShoppingCart } from "react-icons/fa";
import Logo from "../utils/Logo";
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
import Link from "next/link";
import { useUser } from "@/Context/UserContext";
import { LogIn, LogOut } from "lucide-react";
import { logout } from "@/server/AuthServer";

const Navbar = () => {
  const { user, setIsLoading } = useUser();
  const shop = user?.hasShop;
  console.log(shop);
  const handelLogOut = () => {
    logout();
    setIsLoading(true);
  };
  return (
    <section className="border-b border-slate-300">
      <div className="container">
        <section className="flex py-2 justify-center items-center lg:justify-between flex-wrap">
          {/* Logo Section */}
          <Link href={"/"}>
            <Logo />
          </Link>

          {/* Search Bar */}
          <div>
            <HomeSearch />
          </div>

          {/* User Actions */}
          <div className="flex gap-2">
            {/* Cart Button */}
            <button className="bg-transparent rounded-full border border-customcolor">
              <FaShoppingCart className="text-customcolor text-[38px] p-2" />
            </button>

            {/* Wishlist Button */}
            <button className="bg-transparent rounded-full border border-customcolor">
              <FaHeart className="text-[38px] text-customcolor p-2" />
            </button>

            {/* User Authenticated */}
            {user ? (
              <>
                {/* Shop Button */}
                {!shop && (
                  <Link href={"/create-shop"}>
                    <Button
                      variant="outline"
                      className="flex p2-5 bg-customcolor text-white py-2 items-center rounded-full border"
                    >
                      Create Shop
                      <FaShopify className="ml-1 text-2xl" />
                    </Button>
                  </Link>
                )}
                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="border-none">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/148360784?v=4" />
                      <AvatarFallback>Profile Image</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-5 bg-customcolor text-white w-[200px]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>My Shop</DropdownMenuItem>
                    <DropdownMenuItem>My Order</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handelLogOut}>
                      <Button className="bg-red-500 text-white">
                        <LogOut /> <span>Log out</span>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              /* User Not Authenticated */
              <Link href="/login">
                <Button className="">
                  <LogIn /> <span>Sign In </span>
                </Button>
              </Link>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Navbar;
