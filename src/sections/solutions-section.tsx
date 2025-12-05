import React from "react";
import SectionTitle from "./__components/section-title";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/utils/constants/solutions";
import PerSolution from "./__components/per-solution";

const SolutionsSection = () => {
    return (
        <div className="py-20 ">
            <SectionTitle title="Our solutions" />

            <div className="flex p-[5%] gap-x-12">
                <div className="flex-1">
                    <div className="flex flex-col gap-y-6">
                        <h1 className="font-clash-display text-[32px] font-bold">
                            Everything You Need to Run Your Business Efficiently{" "}
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

                <div className="w-[65%]">
                    <div className="grid grid-cols-1 gap-10">
                        {SOLUTIONS.splice(0, 3).map((solution, i) => {
                            return <PerSolution solution={solution} key={i} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsSection;
