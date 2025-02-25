"use client";

import * as React from "react";
import {
  BotIcon,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import SingleLogo from "@/components/utils/SingleLogo";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Shop",
      url: "#",
      icon: BotIcon,
      items: [
        {
          title: "Manage Products",
          url: "/user/shop/products",
        },
        {
          title: "Manage Categories",
          url: "/user/shop/category",
        },
        {
          title: "Manage Brands",
          url: "/user/shop/manage-brands",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Password Change",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <div className="ml-3 mt-3 items-center flex gap-2">
        <SingleLogo />{" "}
        <span
          style={{ fontFamily: "kaftus" }}
          className="text-3xl font-extrabold"
        >
          Shop
        </span>
      </div> */}
      <SidebarMenuButton className="pl-4 pt-10 pb-5" size="lg" asChild>
        <Link href="/">
          <div className="flex items-center justify-center">
            <SingleLogo />{" "}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <h2
              className="font-bold text-2xl "
              style={{ fontFamily: "kaftus" }}
            >
              Shop
            </h2>
          </div>
        </Link>
      </SidebarMenuButton>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
