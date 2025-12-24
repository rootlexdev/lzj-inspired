"use client";
import { PartnersArr } from "@/utils/constants/partners";
import Image from "next/image";
import "@/lib/styles/marquee.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PartnersScroll = () => {
    useGSAP(() => {
        const marqueeTrack = document.querySelector(".partners-marquee-track");
        const items = gsap.utils.toArray(
            ".partner-marquee-item"
        ) as HTMLElement[];
        items.forEach(item => marqueeTrack?.appendChild(item.cloneNode(true)));

        let targetVelocity = 0;
        let marqueePosition = 0;
        let smoothVelocity = 0;

        gsap.ticker.add(() => {
            if (!marqueeTrack) return;
            smoothVelocity += (targetVelocity - smoothVelocity) * 0.5;

            const baseSpeed = 0.45;
            const speed = baseSpeed + smoothVelocity * 9;

            marqueePosition -= speed;

            const trackWidth = marqueeTrack.scrollWidth / 2;
            if (marqueePosition <= -trackWidth) {
                marqueePosition = 0;
            }

            gsap.set(marqueeTrack, {
                x: marqueePosition,
            });
            targetVelocity *= 0.9;
        });
    });

    return (
        <div className="lg:px-[5%]">
            <div className="flex items-center gap-x-2 lg:gap-x-2">
                <div className="flex-1 h-px bg-primary-gold"></div>
                <div className="w-3/4 lg:w-fit">
                    <h1 className="text-body-text text-base lg:text-2xl text-center ">
                        Trusted By over 2,000 top restaurants all over Nigeria
                    </h1>
                </div>
                <div className="flex-1 h-px bg-primary-gold"></div>
            </div>

            <div className="  partners-marquee">
                <div className="partners-marquee-track flex items-center gap-x-4 justify-center">
                    {PartnersArr.map((partner, i) => {
                        return (
                            <Image
                                key={i}
                                src={`/assets/${partner}`}
                                alt={i.toString()}
                                width={100}
                                height={100}
                                className="w-12 h-12 lg:w-[150px] lg:h-[150px] partner-marquee-item"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PartnersScroll;
