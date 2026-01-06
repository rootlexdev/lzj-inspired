import SectionTitle from "./__components/section-title";
import { PROBLEMS_WE_SOLVE } from "@/utils/constants/problems";
import PerProblemSolve from "./__components/per-problem-solve";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import _SplitText from "gsap/SplitText";

const ProblemsSection = () => {
    useGSAP(() => {
        const containerSplits: _SplitText[] = [];
        const fixingText = document.querySelector(".fixing-text");

        const textContainer = document.querySelector(
            ".problems-text-container"
        );

        const splitWords = SplitText.create(fixingText, {
            type: "words",
        });

        gsap.set(splitWords.words, { scale: "0.5", opacity: 0.05 });

        textContainer?.querySelectorAll("h3, p").forEach(element => {
            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line",
            });

            containerSplits.push(split);
            gsap.set(split.lines, { y: "-100%" });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".problems-section",
                start: "top 80%",
                end: "top 40%",
            },
        });

        // Animate ALL lines at once with a small stagger for better speed
        const allLines = containerSplits.flatMap(s => s.lines);

        const bigWords = splitWords.words;

        tl.to(
            allLines,
            {
                y: "0%",
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.05, // Small positive stagger is usually snappier than negative
            },
            "<0.3"
        ).to(
            bigWords,
            {
                scale: 1,
                opacity: 1,
                stagger: 0.15,
            },
            "<"
        ); // Starts almost immediately after the menu starts opening
    });

    return (
        <div className="py-20 problems-section">
            <SectionTitle title="problems we solve" />

            <div className=" px-[5%] py-20">
                <div className=" lg:flex px-[5%] py-10 lg:p-[5%] bg-soft-white rounded-xl gap-10">
                    <div className="flex flex-col justify-between flex-1 mb-10 lg:mb-0">
                        <div className="problems-text-container">
                            <h3 className="font-clash-display text-xl lg:text-2xl font-semibold mb-6">
                                Africa’s Businesses Run on Manual Work.
                            </h3>

                            <p className="text-body-text leading-6 mb-6 text-sm lg:text-base">
                                Across Africa, businesses still rely heavily on
                                manual processes, scattered data, and outdated
                                tools to run daily operations. These
                                inefficiencies aren’t just inconvenient — they
                                create bottlenecks that limit productivity,
                                reduce visibility, and slow down
                                decision-making.
                            </p>

                            <p className="text-body-text leading-6 mb-6 text-sm lg:text-base">
                                Without centralized systems, teams struggle to
                                track tasks, monitor performance, or maintain
                                accountability. Information is often spread
                                across spreadsheets, notebooks, messaging apps,
                                and multiple tools, making it almost impossible
                                to get a real-time, accurate view of what’s
                                happening in the business.
                            </p>
                        </div>

                        <div className="overflow-hidden">
                            <h1 className="font-bold font-clash-display text-primary-gold text-xl lg:text-[44px] fixing-text">
                                We’re fixing that!
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[55%]">
                        {PROBLEMS_WE_SOLVE.map((problem, i) => {
                            return (
                                <PerProblemSolve problem={problem} key={i} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemsSection;
