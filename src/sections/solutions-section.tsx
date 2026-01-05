import React from "react";
// import "@/lib/styles/solutions.css";
// import { ScrollTrigger } from "gsap/all";
import SectionTitle from "./__components/section-title";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/utils/constants/solutions";
import PerSolution from "./__components/per-solution";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const SolutionsSection = () => {
    const containerRef = React.useRef(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.to(".solutions-list", {
                yPercent: -100 * (SOLUTIONS.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${(SOLUTIONS.length - 1) * 100}%`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <div className="py-20  solutions-container">
            <SectionTitle title="Our solutions" />

            <div
                className="lg:flex p-[5%] h-screen items-center gap-x-12"
                ref={containerRef}
            >
                {/* LEFT SIDE: Sticky Content */}
                <div className="flex-1 mb-10 lg:mb-0">
                    <div className="flex flex-col gap-y-6">
                        <h1 className="font-clash-display text-[32px] font-bold">
                            Everything You Need to Run Your Business
                            Efficiently{" "}
                        </h1>

                        <p className="text-body-text leading-6">
                            Our solutions combine automation, intelligence, and
                            clean design to help businesses eliminate guesswork.
                            Whether you’re managing processes, people, or
                            performance, we give you the tools to operate with
                            confidence.
                        </p>

                        <Button>Book a Demo</Button>
                    </div>
                </div>

                {/* RIGHT SIDE: Scrolling List */}
                <div className="w-full lg:w-[65%] h-screen overflow-hidden">
                    <div className="flex flex-col solutions-list">
                        {SOLUTIONS.map((solution, i) => {
                            return (
                                <div
                                    key={i}
                                    className="h-screen flex items-center"
                                >
                                    <PerSolution solution={solution} key={i} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsSection;
