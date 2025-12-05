"use client";
import Image from "next/image";
import React from "react";
import Navlink from "./__components/nav-link";
import { MenuLinks } from "@/utils/constants/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="px-[10%] lg:px-[5%] py-10 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
                <div>
                    <Image
                        src={"/assets/logo.svg"}
                        width={60}
                        height={40}
                        className=""
                        alt="w-15 h-10"
                    />
                </div>

                <div className="hidden lg:flex items-center gap-x-1">
                    {MenuLinks.map((link, i) => {
                        return (
                            <Navlink
                                key={i}
                                active={pathname.includes(`/${link.url}`)}
                                text={link.text}
                                url={link.url}
                                hasDropdown={link.hasDropdown}
                            />
                        );
                    })}
                </div>
            </div>

            <div>
                <div className="hidden lg:flex items-center gap-x-4">
                    <Link className="text-dark-navy font-medium" href={"/"}>
                        Login
                    </Link>
                    <Link className="text-dark-navy font-medium" href={"/"}>
                        Contact Sales
                    </Link>

                    <Button>Start for free</Button>
                </div>

                <div className="flex flex-col gap-y-1.5 lg:hidden">
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
