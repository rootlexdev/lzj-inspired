"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCardGiftcard, MdOutlineSpaceDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Cog } from "lucide-react";
import { BsQuestionCircle } from "react-icons/bs";
import SidebarItem from "./sidebar-item";
import { FaUsers } from "react-icons/fa";
import { CiBitcoin } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const AdminSideBar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-[18%] bg-[#F9FAFB] border-r border-r-border overflow-y-scroll">
            <div className="p-4 flex border-b border-b-muted">
                <Link href={`/`} className="flex items-center">
                    <Image
                        src={"/assets/images/logo.svg"}
                        alt="logo"
                        width={100}
                        height={50}
                        className="cursor-pointer h-[50px] rounded"
                    />
                </Link>
            </div>

            <div className="p-5">
                <div className="mb-5">
                    <h2 className="text-supporting-text font-bold text-sm mb-3">
                        ADMIN MAIN MENU
                    </h2>
                    <SidebarItem
                        icon={MdOutlineSpaceDashboard}
                        label="Overview"
                        url={`/`}
                        isActive={pathname === "/"}
                    />
                    <SidebarItem
                        icon={MdCardGiftcard}
                        label="Gift Cards"
                        url={`/giftcards`}
                        isActive={pathname.includes("/giftcards")}
                    />
                    <SidebarItem
                        icon={CiBitcoin}
                        label="Cryptocurrency"
                        url={`/Cryptocurrency`}
                        isActive={pathname.includes("/Cryptocurrency")}
                    />
                    <SidebarItem
                        icon={FaUsers}
                        label="Customers"
                        url={`/customers`}
                        isActive={pathname.includes("/customers")}
                    />
                    <SidebarItem
                        icon={HiOutlineBuildingOffice2}
                        label="Management"
                        url={`/management`}
                        isActive={pathname.includes("/management")}
                    />
                    <SidebarItem
                        icon={FaUsers}
                        label="App Banners"
                        url={`/app-banners`}
                        isActive={pathname.includes("/app-banners")}
                    />
                </div>

                <div>
                    <SidebarItem
                        icon={Cog}
                        label="Admin Settings"
                        url={`/admin-settings`}
                        isActive={pathname.includes("/admin-settings")}
                    />
                    <SidebarItem
                        icon={BsQuestionCircle}
                        label="Support Tickets"
                        url={`/support-tickets`}
                        isActive={pathname.includes("/support-tickets")}
                    />
                </div>
            </div>
        </aside>
    );
};

export default AdminSideBar;
