import { cn } from "@/lib/utils";
import { SolutionsProps } from "@/utils/interfaces";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

interface Props {
    solution: SolutionsProps;
    active?: boolean;
}

const PerSolution = ({ solution, active = false }: Props) => {
    const { body, image, title } = solution;

    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const bodyRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const tl = gsap.timeline({ paused: true });

            const splitTitle = SplitText.create(titleRef.current, {
                type: "words",
            });

            tl.fromTo(
                containerRef.current,
                { opacity: 0, y: -50, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3 }
            );

            tl.from(
                splitTitle.words,
                {
                    y: 40,
                    opacity: 0,
                    stagger: 0.06,
                    ease: "power3.out",
                    duration: 0.6,
                },
                0
            );

            tl.from(
                bodyRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.out",
                },
                0.2
            );

            tl.fromTo(
                imageRef.current,
                {
                    clipPath: "inset(0 0 100% 0)",
                    scale: 1.05,
                },
                {
                    clipPath: "inset(0 0 0% 0)",
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                0.1
            );

            tlRef.current = tl;

            // return () => {
            //     splitTitle.revert(); // VERY important
            // };
        },
        {
            scope: containerRef,
        }
    );

    useGSAP(
        () => {
            if (!tlRef.current) return;

            if (active) {
                tlRef.current.play();
            } else {
                tlRef.current.reverse();
            }
        },
        { dependencies: [active] }
    );
    return (
        <div
            className={cn(
                "lg:flex items-center gap-10 mb-12 lg:mb-5 transition",
                active ? "z-20" : "z-0"
            )}
            ref={containerRef}
        >
            <div className="flex-1 mb-6 lg:mb-0">
                <h1
                    ref={titleRef}
                    className="font-clash-display font-bold text-dark-navy mb-4 text-[28px]"
                >
                    {title}
                </h1>
                <p ref={bodyRef} className="text-body-text">
                    {body}
                </p>
            </div>
            <div
                ref={imageRef}
                className="relative h-[400px] w-full lg:w-[400px] "
            >
                <Image
                    fill
                    src={`/assets/${image}`}
                    alt={title}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default PerSolution;
