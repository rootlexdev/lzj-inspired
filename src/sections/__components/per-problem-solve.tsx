import { ProblemsProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

interface Props {
    problem: ProblemsProps;
}

const PerProblemSolve = ({ problem }: Props) => {
    return (
        <div className="bg-white flex flex-col gap-y-4 p-4 rounded-xl">
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
            <p className="text-body-text leading-6">{problem.body}</p>
        </div>
    );
};

export default PerProblemSolve;
