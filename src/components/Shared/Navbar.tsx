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
import { usePathname, useRouter } from "next/navigation";
import { protectRoute } from "@/constect";
import { useAppSelector } from "@/redux/hooks";
import { orderProductSelector } from "@/redux/features/cartSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathName = usePathname();
  const shop = user?.hasShop;
  console.log(shop);
  const handelLogOut = () => {
    logout();
    if (protectRoute.some((route) => pathName.match(route))) {
      router.push("/login");
    }
    setIsLoading(true);
  };
  const products = useAppSelector(orderProductSelector);
  console.log(products.length);
  const handleClick = () => {
    if (!user?.email) {
      toast.error("please login");
      router.push("/login");
    } else if (products.length === 0) {
      router.push("/products");
      toast.error("Please add product");
    } else {
      router.push("/cart");
    }
  };
  return (
    <section className="border-b z-50 border-slate-300 sticky top-0 left-0 bg-gray-100">
      <div className="container">
        <section className="flex py-2  items-center justify-between flex-wrap">
          {/* Logo Section */}
          <Link href={"/"}>
            <Logo />
          </Link>

          {/* Search Bar */}
          <div className="md:block hidden">
            <HomeSearch />
          </div>

          {/* User Actions */}
          <div className="flex gap-2 relative">
            {/* Cart Button */}
            <div className="">
              <button className="rounded-full z-0 absolute border px-2 -mt-1 -left-3 bg-white">
                {products?.length}
              </button>
            </div>
            <button
              onClick={handleClick}
              className="bg-transparent bg-white rounded-full border border-customcolor"
            >
              <FaShoppingCart className="text-customcolor text-[38px] p-2" />
            </button>

            {/* Wishlist Button */}
            <button className="bg-transparent bg-white rounded-full border border-customcolor">
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
                    <DropdownMenuItem>
                      {" "}
                      <Link href={"user/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
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
        <div className="block md:hidden max-w-sm mx-auto">
          <div
            className="
          mb-5"
          >
            <HomeSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
