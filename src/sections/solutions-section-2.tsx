import React, { useRef, useState } from "react";
import SectionTitle from "./__components/section-title";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/utils/constants/solutions";
import PerSolution from "./__components/per-solution";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const SolutionsSection2 = () => {
    const [activeSolution, setActiveSolution] = useState<number>(0);
    const leftTimeline = useRef<gsap.core.Timeline | null>(null);

    const containerRef = useRef(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            leftTimeline.current = gsap.timeline({ paused: true });

            leftTimeline.current
                .from(headingRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power3.out",
                })
                .from(
                    textRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    },
                    0.1
                )
                .from(
                    buttonRef.current,
                    {
                        y: 10,
                        opacity: 0,
                        duration: 0.25,
                    },
                    0.2
                );

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${SOLUTIONS.length * window.innerHeight}px`,
                pin: true,
                scrub: 1,
                // 🔥 THIS IS THE FIX
                onEnter: () => leftTimeline.current?.play(),
                onLeaveBack: () => leftTimeline.current?.reverse(),
                onUpdate: self => {
                    const progress = self.progress;
                    const index = Math.floor(progress * SOLUTIONS.length);
                    const clampedIndex = Math.min(index, SOLUTIONS.length - 1);

                    setActiveSolution(prev =>
                        prev !== clampedIndex ? clampedIndex : prev
                    );
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <div className="py-20 solutions-container">
            <SectionTitle title="Our solutions" />

            <div
                className="lg:flex p-[5%] h-screen items-center gap-x-12"
                ref={containerRef}
            >
                {/* LEFT SIDE: Sticky Content */}
                <div className="flex-1 mb-10 lg:mb-0" ref={leftRef}>
                    <div className="flex flex-col gap-y-6">
                        <h1
                            ref={headingRef}
                            className="font-clash-display text-[32px] font-bold"
                        >
                            Everything You Need to Run Your Business
                            Efficiently{" "}
                        </h1>

                        <p ref={textRef} className="text-body-text leading-6">
                            Our solutions combine automation, intelligence, and
                            clean design to help businesses eliminate guesswork.
                            Whether you’re managing processes, people, or
                            performance, we give you the tools to operate with
                            confidence.
                        </p>

                        <Button ref={buttonRef}>Book a Demo</Button>
                    </div>
                </div>

                {/* RIGHT SIDE: Scrolling List */}
                <div className="w-full lg:w-[65%] h-screen relative">
                    {SOLUTIONS.map((solution, i) => {
                        // const solution =
                        const activeSolutionSection = activeSolution === i;
                        return (
                            <div
                                key={i}
                                className={cn(
                                    "absolute h-screen flex items-center top-0"
                                )}
                            >
                                <PerSolution
                                    active={activeSolutionSection}
                                    solution={solution}
                                    key={i}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SolutionsSection2;
