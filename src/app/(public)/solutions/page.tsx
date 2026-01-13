"use client";
import { Button } from "@/components/ui/button";
import SolutionsSection2 from "@/sections/solutions-section-2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Solutions = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 px-6 md:px-20">
                <div className="flex flex-col gap-6 justify-center">
                    <h3 className="text-primary font-clash-display text-2xl font-semibold text-center md:text-left">
                        LZJ Solutions
                    </h3>
                    <h1 className="text-3xl md:text-5xl font-clash-display font-bold text-center md:text-left">
                        Software that fits, made just for you
                    </h1>
                    <p className="text-body-text text-center md:text-left">
                        LZJ Solutions delivers custom business apps in weeks—so
                        you get exactly what you need, when you need it.
                    </p>

                    <Link href={"/get-started"} className="block">
                        <Button className="w-full md:w-fit">Get Started</Button>
                    </Link>
                </div>

                <div className="relative z-10">
                    <Image
                        src={"/assets/images/business-woman.jpg"}
                        alt="business woman"
                        width={300}
                        height={100}
                        className="w-[200px] md:w-100 h-[200px] md:h-100 object-cover rounded-xl"
                    />
                    <Image
                        src={"/assets/images/menu.png"}
                        alt="menu order"
                        width={200}
                        height={100}
                        className="w-[200px] md:w-[300px] h-[100px] md:h-[150px] object-cover rounded-md absolute z-10 top-4 md:top-10 right-0"
                    />
                    <Image
                        src={"/assets/images/activity-timeline.png"}
                        alt="menu order"
                        width={200}
                        height={100}
                        className="w-[100px] md:w-[150px] h-[150px] md:h-[300px] object-contain rounded-md absolute -bottom-20 right-0"
                    />
                </div>
            </div>

            <SolutionsSection2 />
        </div>
    );
};

export default Solutions;
