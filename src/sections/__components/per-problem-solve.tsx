import { ProblemsProps } from "@/utils/interfaces";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

interface Props {
    problem: ProblemsProps;
}

const PerProblemSolve = ({ problem }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!cardRef.current) return;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: 1,
                },
            });

            gsap.set(cardRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                y: 100,
            });

            tl.to(cardRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
                duration: 0.8,
                y: 0,
                ease: "power4.out",
            });
        },
        { scope: cardRef }
    );

    return (
        <div
            ref={cardRef}
            className="bg-white flex flex-col gap-y-4 p-4 rounded-xl problem-card"
        >
            <Image
                src={`/assets/${problem.icon}`}
                alt={problem.title}
                width={100}
                height={100}
                className="w-24 h-24"
            />

            <h1 className="font-clash-display text-xl font-semibold">
                {problem.title}
            </h1>
            <p className="text-body-text leading-6 text-sm lg:text-base">
                {problem.body}
            </p>
        </div>
    );
};

export default PerProblemSolve;
