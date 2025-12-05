import React from "react";
import SectionTitle from "./__components/section-title";
import { PROBLEMS_WE_SOLVE } from "@/utils/constants/problems";
import PerProblemSolve from "./__components/per-problem-solve";

const ProblemsSection = () => {
    return (
        <div className="py-20">
            <SectionTitle title="problems we solve" />

            <div className=" px-[5%] py-20">
                <div className=" lg:flex px-[5%] py-10 lg:p-[5%] bg-soft-white rounded-xl gap-10">
                    <div className="flex flex-col justify-between flex-1 mb-10 lg:mb-0">
                        <div>
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

                        <h1 className="font-bold font-clash-display text-primary-gold text-xl lg:text-[44px]">
                            We’re fixing that!
                        </h1>
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
