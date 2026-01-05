import React, { useRef } from "react";
import SectionTitle from "./__components/section-title";
import { VALUES } from "@/utils/constants/choose-us";
import PerValue from "./__components/per-value";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhyChooseUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    duration: 1.2,
                    ease: "power4.inOut",
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                    toggleActions: "play reverse play reverse",
                },
                // onComplete
            });

            tl.to(
                containerRef.current,
                {
                    backgroundColor: "#0b0d13",
                    opacity: 1,
                    rotate: 0,
                },
                "<"
            );
        },
        {
            scope: containerRef,
        }
    );

    return (
        <div ref={containerRef} className="py-24 bg-soft-white relative">
            <Image
                src={"/assets/grey-logo.svg"}
                width={100}
                height={100}
                alt="grey-logo"
                className="w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] right-6 top-12 lg:right-24 lg:top-12"
                style={{
                    position: "absolute",

                    opacity: 0.7,
                    transform: "rotate(-15deg)",
                }}
            />
            <SectionTitle title="why choose us" />

            <div className="lg:flex items-center mt-24 p-[5%] gap-12">
                <div className="mb-10 lg:mb-0">
                    <h1 className="font-clash-display text-soft-white font-semibold text-[28px] mb-10">
                        Built for Reliability, Designed for Growth
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <div className="relative  lg:w-[55%] p-10 rounded-xl bg-slate-grey">
                    <Image
                        src={"/assets/choose-us-dashboard.png"}
                        alt="Choose us dashboard"
                        width={1600}
                        height={900}
                        className="h-[300px] w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
