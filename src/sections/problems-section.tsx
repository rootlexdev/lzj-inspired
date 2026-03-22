import { useRef } from "react";
import SectionTitle from "./__components/section-title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const PROBLEMS = [
    {
        icon: "📋",
        title: "Manual Processes",
        description:
            "Teams waste hours on repetitive tasks that could be automated.",
    },
    {
        icon: "🔍",
        title: "Scattered Data",
        description:
            "Information lives in spreadsheets, notebooks, and multiple disconnected tools.",
    },
    {
        icon: "⏱️",
        title: "Slow Decisions",
        description:
            "Without real-time insights, decisions are delayed or based on guesswork.",
    },
    {
        icon: "📉",
        title: "Limited Visibility",
        description:
            "Managers can't see what's happening across locations or departments.",
    },
];

const ProblemsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const fixingTextRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            // Split text animations
            const textContainer = textContainerRef.current;
            const fixingText = fixingTextRef.current;

            if (!textContainer || !fixingText) return;

            const containerSplits: InstanceType<typeof SplitText>[] = [];

            // Split the "We're fixing that!" text
            const splitWords = SplitText.create(fixingText, {
                type: "words",
            });
            gsap.set(splitWords.words, { scale: 0.5, opacity: 0.05 });

            // Split paragraph text
            textContainer.querySelectorAll("h3, p").forEach(element => {
                const split = SplitText.create(element, {
                    type: "lines",
                    mask: "lines",
                    linesClass: "line",
                });
                containerSplits.push(split);
                gsap.set(split.lines, { y: "-100%" });
            });

            const allLines = containerSplits.flatMap(s => s.lines);

            // Main timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            tl.to(allLines, {
                y: "0%",
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.04,
            }).to(
                splitWords.words,
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                "<0.2",
            );

            // Animate problem cards
            const problemCards = gsap.utils.toArray(
                ".problem-card",
            ) as HTMLElement[];
            gsap.fromTo(
                problemCards,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".problems-grid",
                        start: "top 80%",
                    },
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section ref={containerRef} className="py-24 px-[5%]">
            <SectionTitle title="Problems We Solve" />

            <div className="max-w-7xl mx-auto mt-12">
                <div className="bg-soft-white rounded-3xl p-8 lg:p-12">
                    <div className="lg:flex gap-12 items-start">
                        {/* Left: Text Content */}
                        <div className="lg:w-[45%] mb-10 lg:mb-0">
                            <div ref={textContainerRef} className="mb-8">
                                <h3 className="font-clash-display text-2xl lg:text-3xl font-bold text-dark-navy mb-6">
                                    Africa&apos;s Businesses Run on Manual Work.
                                </h3>

                                <p className="text-body-text leading-7 mb-6">
                                    Across Africa, businesses still rely heavily
                                    on manual processes, scattered data, and
                                    outdated tools to run daily operations.
                                    These inefficiencies aren&apos;t just
                                    inconvenient — they create bottlenecks that
                                    limit productivity, reduce visibility, and
                                    slow down decision-making.
                                </p>

                                <p className="text-body-text leading-7">
                                    Without centralized systems, teams struggle
                                    to track tasks, monitor performance, or
                                    maintain accountability. Information is
                                    often spread across spreadsheets, notebooks,
                                    messaging apps, and multiple tools.
                                </p>
                            </div>

                            <div className="overflow-hidden">
                                <h2
                                    ref={fixingTextRef}
                                    className="font-bold font-clash-display text-3xl lg:text-4xl bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                                    }}
                                >
                                    We&apos;re fixing that!
                                </h2>
                            </div>
                        </div>

                        {/* Right: Problem Cards Grid */}
                        <div className="lg:w-[55%]">
                            <div className="grid sm:grid-cols-2 gap-4 problems-grid">
                                {PROBLEMS.map(problem => (
                                    <div
                                        key={problem.title}
                                        className="problem-card bg-white rounded-2xl p-6 border border-light-grey hover:border-primary-gold/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <span className="text-3xl mb-4 block">
                                            {problem.icon}
                                        </span>
                                        <h4 className="font-clash-display font-semibold text-dark-navy text-lg mb-2">
                                            {problem.title}
                                        </h4>
                                        <p className="text-body-text text-sm leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemsSection;
