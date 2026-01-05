import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

interface Props {
    title: string;
    description: string;
}

const PerValue = ({ description, title }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!cardRef.current) return;

            const split = new SplitText(bodyRef.current, {
                type: "lines",
                linesClass: "perValue",
            });

            // We start with the card clipped (hidden)
            gsap.set(titleRef.current, {
                y: -50, // Optional slight nudge for feeling
            });
            gsap.set(split.lines, {
                y: 100,
            });

            const tl = gsap.timeline({
                defaults: {
                    duration: 0.5,
                    ease: "power4.inOut",
                },
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            });

            tl.to(titleRef.current, {
                y: 0,
            }).to(
                split.lines,
                {
                    y: 0,
                    stagger: 0.05,
                },
                "<"
            );
        },
        { scope: cardRef }
    ); // Scope ensures GSAP only looks inside this card

    return (
        <div ref={cardRef}>
            <div className="perValueTitle">
                <h2
                    ref={titleRef}
                    className="text-primary-gold font-bold text-xl mb-2"
                >
                    {title}
                </h2>
            </div>
            <p ref={bodyRef} className="text-white text-sm font-medium">
                {description}
            </p>
        </div>
    );
};

export default PerValue;
