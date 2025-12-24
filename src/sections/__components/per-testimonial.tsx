import { TestimonialsProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

interface Props {
    testimonial: TestimonialsProps;
}

const PerTestimonial = ({ testimonial }: Props) => {
    const { logo, position, review, title } = testimonial;
    return (
        <div className="flex flex-col bg-soft-white p-5 rounded-xl w-[250px] lg:w-[300px] py-6 shrink-0 min-h-[200px] testimonial-marquee-item">
            <div className="flex items-center border-b border-b-light-grey pb-2 mb-3">
                <div className="flex-1">
                    <h3 className="text-dark-navy font-medium">{title}</h3>
                    <p className="text-dark-navy font-light text-xs">
                        {position}
                    </p>
                </div>
                <Image
                    src={`/assets/${logo}`}
                    alt="testimonial"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px]"
                />
            </div>
            <div className="">
                <p className="text-body-text text-xs">{review}</p>
            </div>
        </div>
    );
};

export default PerTestimonial;
