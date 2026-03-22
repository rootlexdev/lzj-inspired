import { useRef } from "react";
import SectionTitle from "./__components/section-title";
import { TESTIMONIALS_2 } from "@/utils/constants/testimonials";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
}

// const PerTestimonial = ({ testimonial }: { testimonial: Testimonial }) => (
//     <div className="testimonial-marquee-item shrink-0 w-[320px] lg:w-[400px] bg-soft-white rounded-2xl p-6 border border-light-grey">
//         <div className="flex items-center gap-3 mb-4">
//             <div className="w-12 h-12 rounded-full bg-primary-gold/20 flex items-center justify-center">
//                 {testimonial.avatar ? (
//                     <Image
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         width={48}
//                         height={48}
//                         className="w-full h-full rounded-full object-cover"
//                     />
//                 ) : (
//                     <span className="text-primary-gold font-semibold">
//                         {testimonial.name.charAt(0)}
//                     </span>
//                 )}
//             </div>
//             <div>
//                 <h4 className="font-semibold text-dark-navy">
//                     {testimonial.name}
//                 </h4>
//                 <p className="text-body-text text-sm">
//                     {testimonial.role}, {testimonial.company}
//                 </p>
//             </div>
//         </div>
//         <p className="text-body-text text-sm leading-relaxed">
//             &quot;{testimonial.content}&quot;
//         </p>

//         {/* Star rating */}
//         <div className="flex items-center gap-1 mt-4">
//             {[...Array(5)].map((_, i) => (
//                 <svg
//                     key={i}
//                     className="w-4 h-4 text-primary-gold"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                 >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//             ))}
//         </div>
//     </div>
// );

const PerTestimonial = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="testimonial-marquee-item shrink-0 w-[320px] lg:w-[400px] bg-soft-white rounded-2xl p-6 border border-light-grey">
        {/* Header with Initial */}
        <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary-gold/20 flex items-center justify-center">
                <span className="text-primary-gold font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                </span>
            </div>
            <div>
                <h4 className="font-semibold text-dark-navy">
                    {testimonial.name}
                </h4>
                <p className="text-body-text text-sm">
                    {testimonial.role}, {testimonial.company}
                </p>
            </div>
        </div>

        {/* Content */}
        <p className="text-body-text text-sm leading-relaxed">
            &quot;{testimonial.content}&quot;
        </p>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-primary-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    </div>
);

const TestimonialsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const trackLR = document.querySelector(".testimonials-track-lr");
            const trackRL = document.querySelector(".testimonials-track-rl");

            if (!trackLR || !trackRL) return;

            // Clone items for infinite scroll
            const itemsLR = gsap.utils.toArray(
                ".testimonials-track-lr .testimonial-marquee-item",
            ) as HTMLElement[];
            const itemsRL = gsap.utils.toArray(
                ".testimonials-track-rl .testimonial-marquee-item",
            ) as HTMLElement[];

            itemsLR.forEach(item => trackLR.appendChild(item.cloneNode(true)));
            itemsRL.forEach(item => trackRL.appendChild(item.cloneNode(true)));

            let posLR = 0;
            let posRL = 0;
            const speed = 0.5;

            gsap.ticker.add(() => {
                // Left to Right track
                posLR -= speed;
                const widthLR = trackLR.scrollWidth / 2;
                if (posLR <= -widthLR) posLR = 0;

                // Right to Left track
                posRL += speed;
                const widthRL = trackRL.scrollWidth / 2;
                if (posRL >= 0) posRL = -widthRL;

                gsap.set(trackLR, { x: posLR });
                gsap.set(trackRL, { x: posRL });
            });
        },
        { scope: containerRef },
    );

    return (
        <section ref={containerRef} className="py-24 overflow-hidden">
            <SectionTitle title="Testimonials" />

            <div className="text-center max-w-2xl mx-auto mt-8 mb-16 px-6">
                <h2 className="font-clash-display text-3xl lg:text-4xl font-bold text-dark-navy mb-4">
                    Trusted by Businesses{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                        }}
                    >
                        Across Nigeria
                    </span>
                </h2>
                <p className="text-body-text">
                    See what restaurant owners and managers are saying about LZJ
                    RMS.
                </p>
            </div>

            {/* Marquee Tracks */}
            <div className="space-y-6">
                {/* Track 1: Left to Right */}
                <div className="flex items-center gap-6 testimonials-track-lr">
                    {TESTIMONIALS_2.slice(0, 6).map((testimonial, i) => (
                        <PerTestimonial
                            testimonial={testimonial}
                            key={`lr-${i}`}
                        />
                    ))}
                </div>

                {/* Track 2: Right to Left */}
                <div className="flex items-center gap-6 testimonials-track-rl">
                    {TESTIMONIALS_2.slice(6, 12).map((testimonial, i) => (
                        <PerTestimonial
                            testimonial={testimonial}
                            key={`rl-${i}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
