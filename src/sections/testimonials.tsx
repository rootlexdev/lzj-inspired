import React from "react";
import SectionTitle from "./__components/section-title";
import { TESTIMONIALS } from "@/utils/constants/testimonials";
import PerTestimonial from "./__components/per-testimonial";

const Testimonials = () => {
    return (
        <div className="py-20 w-full overflow-hidden">
            <SectionTitle title="Testimonials" />

            <h1 className="text-center font-clash-display text-[36px] w-full lg:w-[30%] mx-auto my-10 font-bold">
                SEE WHAT PEOPLE ARE SAYING ABOUT US
            </h1>

            <div>
                <div className="flex items-center gap-x-4 relative right-20 mb-6">
                    {TESTIMONIALS.slice(0, 7).map((testimonial, i) => {
                        return (
                            <PerTestimonial testimonial={testimonial} key={i} />
                        );
                    })}
                </div>
                <div className="flex items-center gap-x-4 right-40 relative">
                    {TESTIMONIALS.slice(8, 14).map((testimonial, i) => {
                        return (
                            <PerTestimonial testimonial={testimonial} key={i} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
