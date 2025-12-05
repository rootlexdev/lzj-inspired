import { SolutionsProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

interface Props {
    solution: SolutionsProps;
}

const PerSolution = ({ solution }: Props) => {
    const { body, image, title } = solution;

    return (
        <div className=" lg:flex items-center gap-10 mb-5">
            <div className="flex-1">
                <h1 className="font-clash-display font-bold text-dark-navy mb-4 text-[28px]">
                    {title}
                </h1>
                <p className="text-body-text ">{body}</p>
            </div>
            <div className="relative h-[400px] w-[400px] ">
                <Image
                    fill
                    src={`/assets/${image}`}
                    alt={title}
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default PerSolution;
