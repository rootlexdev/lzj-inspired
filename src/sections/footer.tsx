import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <div className="p-[7.5%] lg:flex justify-between items-center">
                <div className="w-full lg:max-w-[50%] mb-10 lg:mb-0">
                    <h1 className="font-clash-display text-[36px] font-bold mb-10">
                        Ready to Transform Your Business Operations?
                        <span>Try LZJ</span>
                    </h1>

                    <p className="text-body-text text-lg">
                        Build Smarter. Operate Better. Grow Faster
                    </p>
                </div>
                <div>
                    <Button>Sign up for free</Button>
                </div>
            </div>

            {/* MID SECTION OF FOOTER */}
            <div className=" lg:flex items-center justify-between bg-soft-white p-[7.5%]">
                <div className="max-w-[30%]">
                    <div className="flex items-center gap-x-4 mb-4">
                        <Image
                            src={"/assets/logo.svg"}
                            alt="logo"
                            className="w-[60px] h-10 object-contain"
                            width={100}
                            height={100}
                        />

                        <h1 className="font-clash-display text-4xl font-bold">
                            LZJ_ESOL’N
                        </h1>
                    </div>

                    <p className="text-sm text-body-text">
                        LZJ builds modern, scalable digital systems designed for
                        African businesses. From workflows to analytics, we help
                        teams operate with clarity, speed, and accountability,
                        no complexity, no clutter. Transform how your business
                        works with technology that feels premium, performs
                        reliably, and grows with you.
                    </p>
                    {/* ICONS */}
                    <div className="flex items-center gap-x-4 text-lg text-body-text mt-10">
                        <BsFacebook />
                        <BsLinkedin />
                        <BsTwitterX />
                        <BsInstagram />
                    </div>
                </div>
                <div className="lg:flex justify-between gap-x-20">
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">
                            Company
                        </h3>
                        <Link href={"/"}>About Us</Link>
                        <Link href={"/"}>Careers</Link>
                        <Link href={"/"}>Blog</Link>
                        <Link href={"/"}>Research</Link>
                    </div>
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">
                            Solutions
                        </h3>
                        <Link href={"/"}>Business</Link>
                        <Link href={"/"}>Enterprise</Link>
                        <Link href={"/"}>Supply Chain</Link>
                        <Link href={"/"}>Custom Solutions</Link>
                        <Link href={"/"}>All Solutions</Link>
                    </div>
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">
                            Solutions
                        </h3>
                        <Link href={"/"}>Business</Link>
                        <Link href={"/"}>Enterprise</Link>
                        <Link href={"/"}>Supply Chain</Link>
                        <Link href={"/"}>All Solutions</Link>
                    </div>
                </div>
            </div>
            <div className="bg-soft-white p-10 flex justify-center items-center text-slate-grey border-t border-light-grey">
                <p>© LZJ_ESOL’N 2025. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
