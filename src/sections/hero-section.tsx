import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 px-10 lg:px-0">
            <div className=" items-center gap-x-4 text-xs lg:text-sm text-body-text rounded-full bg-light-grey p-2.5 px-6 lg:p-0 lg:pr-4">
                <button className="hidden lg:inline-flex bg-primary-gold py-3 px-2 lg:p-2 rounded-xl text-body-text ">
                    NEW
                </button>
                <span className="text-center inline-block lg:text-left">
                    Our Advanced Customer Management system is live 🎉
                </span>
            </div>
            <div>
                <div className="text-center font-bold text-3xl lg:text-[42px] font-clash-display my-6">
                    <h1 className="text-dark-navy ">
                        Building Smart, Adaptive Systems for
                    </h1>
                    <h1 className="text-body-text">
                        Africa’s Growing Businesses
                    </h1>
                </div>

                <p className="text-sm lg:text-lg text-body-text text-center">
                    Software that simplifies operations, automates workflows,
                    and unlocks data-driven clarity.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
                <Button className="w-full lg:w-fit">Explore Solutions</Button>
                <Button variant={"outline"} className="w-full lg:w-fit">
                    Book a Consultation
                </Button>
            </div>

            <div className="relative h-[400px] lg:h-[600px] w-full lg:w-[80%] mx-auto my-10">
                <Image
                    src={"/assets/hero-dashboard.png"}
                    fill
                    alt="hero-dashboard"
                    className="object-cover object-top"
                />
            </div>
        </div>
    );
};

export default HeroSection;
