import SectionTitle from "./__components/section-title";
import { TESTIMONIALS } from "@/utils/constants/testimonials";
import PerTestimonial from "./__components/per-testimonial";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonials = () => {
    useGSAP(() => {
        const trackLR = document.querySelector(".testimonials-track"); // Left to Right
        const trackRL = document.querySelector(".testimonials-track-r-l"); // Right to Left

        // 1. Clone items for both tracks
        const items = gsap.utils.toArray(
            ".testimonial-marquee-item"
        ) as HTMLElement[];
        items.forEach(item => {
            trackLR?.appendChild(item.cloneNode(true));
            trackRL?.appendChild(item.cloneNode(true));
        });

        // 2. Separate State for each track (or shared velocity, separate position)
        let targetVelocity = 0;
        let smoothVelocity = 0;
        let posLR = 0;
        let posRL = 0;

        gsap.ticker.add(() => {
            if (!trackLR || !trackRL) return;

            // Smooth out the velocity once per frame
            smoothVelocity += (targetVelocity - smoothVelocity) * 0.1;
            const speed = 0.45 + smoothVelocity * 9;

            // Update Left-to-Right Position
            posLR -= speed;
            const widthLR = trackLR.scrollWidth / 2;
            if (posLR <= -widthLR) posLR = 0;

            // Update Right-to-Left Position (moves opposite)
            posRL += speed;
            const widthRL = trackRL.scrollWidth / 2;
            if (posRL >= 0) posRL = -widthRL;

            // Apply transforms
            gsap.set(trackLR, { x: posLR });
            gsap.set(trackRL, { x: posRL });

            // Friction
            targetVelocity *= 0.9;
        });

        window.addEventListener("wheel", e => {
            targetVelocity = e.deltaY * 0.01; // Adjust the 0.01 to change sensitivity
        });
    });

    return (
        <div className="py-20 w-full overflow-hidden">
            <SectionTitle title="Testimonials" />

            <h1 className="text-center font-clash-display text-[36px] w-full lg:w-[30%] mx-auto my-10 font-bold p-10 lg:p-0">
                SEE WHAT PEOPLE ARE SAYING ABOUT US
            </h1>

            <div>
                <div className="flex items-center gap-x-4 relative right-20 mb-6 testimonials-track">
                    {TESTIMONIALS.slice(0, 7).map((testimonial, i) => {
                        return (
                            <PerTestimonial testimonial={testimonial} key={i} />
                        );
                    })}
                </div>
                <div className="flex items-center gap-x-4 right-40 relative testimonials-track-r-l">
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
