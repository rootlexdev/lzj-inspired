"use client";
import { PartnersArr } from "@/utils/constants/partners";
import Image from "next/image";
import React from "react";

const PartnersScroll = () => {
    return (
        <div className="px-[5%]">
            <div className="flex items-center gap-x-6">
                <div className="flex-1 h-px bg-primary-gold"></div>
                <div>
                    <h1 className="text-body-text text-2xl text-center">
                        Trusted By over 2,000 top restaurants all over Nigeria
                    </h1>
                </div>
                <div className="flex-1 h-px bg-primary-gold"></div>
            </div>

            <div className="flex items-center gap-x-4 justify-center">
                {PartnersArr.map((partner, i) => {
                    return (
                        <Image
                            key={i}
                            src={`/assets/${partner}`}
                            alt={i.toString()}
                            width={100}
                            height={100}
                            className="w-12 h-12 lg:w-[150px] lg:h-[150px]"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PartnersScroll;
