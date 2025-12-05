import React from "react";
import SectionTitle from "./__components/section-title";
import { VALUES } from "@/utils/constants/choose-us";
import PerValue from "./__components/per-value";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <div className="py-24 bg-dark-navy relative">
            <Image
                src={"/assets/grey-logo.svg"}
                width={100}
                height={100}
                alt="grey-logo"
                style={{
                    position: "absolute",
                    width: 500,
                    height: 400,

                    right: 100,
                    top: 50,

                    opacity: 0.7,
                    transform: "rotate(-15deg)",
                }}
            />
            <SectionTitle title="why choose us" />

            <div className="flex items-center mt-24 p-[5%] gap-12">
                <div>
                    <h1 className="font-clash-display text-soft-white font-semibold text-[28px] mb-10">
                        Built for Reliability, Designed for Growth
                    </h1>

                    <div className="grid grid-cols-2 gap-6">
                        {VALUES.map((value, i) => {
                            return (
                                <PerValue
                                    title={value.title}
                                    description={value.description}
                                    key={i}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="relative  w-[55%] p-10 rounded-xl bg-slate-grey">
                    <Image
                        src={"/assets/choose-us-dashboard.png"}
                        alt="Choose us dashboard"
                        width={100}
                        height={100}
                        className="h-[300px] w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
