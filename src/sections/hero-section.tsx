import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex items-center gap-x-2 text-sm text-body-text rounded-xl bg-light-grey pr-6">
                <button className="bg-primary-gold p-2 rounded-xl text-body-text ">
                    NEW
                </button>
                Our Advanced Customer Management system is live 🎉
            </div>
            <div>
                <div className="text-center font-bold text-[42px] font-clash-display my-6">
                    <h1 className="text-dark-navy ">
                        Building Smart, Adaptive Systems for
                    </h1>
                    <h1 className="text-body-text">
                        Africa’s Growing Businesses
                    </h1>
                </div>

                <p className="text-lg text-body-text">
                    Software that simplifies operations, automates workflows,
                    and unlocks data-driven clarity.
                </p>
            </div>

            <div className="flex items-center gap-x-6">
                <Button>Explore Solutions</Button>
                <Button variant={"outline"}>Book a Consultation</Button>
            </div>

            <div className="relative h-[600px] w-[80%] mx-auto my-10">
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
