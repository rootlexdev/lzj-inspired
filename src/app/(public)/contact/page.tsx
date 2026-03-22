"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "./contact-form";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const CONTACT_OPTIONS = [
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        title: "Email Us",
        description: "For general inquiries and support",
        value: "info@lzjesoleen.com",
        href: "mailto:info@lzjesoleen.com",
        action: "Send email",
    },
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        ),
        title: "Call Us",
        description: "Mon-Fri from 9am to 6pm WAT",
        value: "+234 701 241 7471",
        href: "tel:+2347012417471",
        action: "Call now",
    },
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
        title: "Visit Us",
        description: "Come say hello at our office",
        value: "Lagos, Nigeria",
        href: null,
        action: null,
    },
];

const FAQS = [
    {
        question: "How quickly do you respond?",
        answer: "We typically respond to all inquiries within 24 hours during business days.",
    },
    {
        question: "Do you offer demos?",
        answer: "Yes! We'd love to show you around. Request a demo through the form and we'll set up a call.",
    },
    {
        question: "What if I need urgent support?",
        answer: "Existing customers can reach our priority support line. New inquiries, please call directly.",
    },
];

const ContactPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Hero animation
            gsap.fromTo(
                ".contact-hero",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            );

            // Contact cards animation
            const cards = gsap.utils.toArray(".contact-card") as HTMLElement[];
            gsap.fromTo(
                cards,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2,
                },
            );

            // Form animation
            gsap.fromTo(
                ".contact-form-container",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.3,
                },
            );

            // FAQ animation
            const faqs = gsap.utils.toArray(".faq-item") as HTMLElement[];
            gsap.fromTo(
                faqs,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.5,
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F8F8F8]">
            {/* Hero Section */}
            <section className="bg-[#0B0D13] pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-20 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto relative z-10 contact-hero">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/10 border border-[#F7C74B]/20 mb-6">
                            <svg
                                className="w-4 h-4 text-[#F7C74B]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            <span className="text-[#F7C74B] text-sm font-medium">
                                Get in Touch
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F8F8] leading-tight mb-6">
                            Let&apos;s Start a{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Conversation
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
                            Whether you have a question about our solutions,
                            pricing, or anything else — our team is ready to
                            answer all your questions and help you find the
                            right fit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-12 px-6 -mt-8 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {CONTACT_OPTIONS.map(option => (
                            <div
                                key={option.title}
                                className="contact-card bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#F7C74B]/30 transition-all"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    <span className="text-[#0B0D13]">
                                        {option.icon}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#0B0D13] mb-1">
                                    {option.title}
                                </h3>
                                <p className="text-[#64748B] text-sm mb-3">
                                    {option.description}
                                </p>

                                {option.href ? (
                                    <a
                                        href={option.href}
                                        className="text-[#0B0D13] font-medium hover:text-[#F7C74B] transition-colors flex items-center gap-2 group"
                                    >
                                        {option.value}
                                        <svg
                                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                ) : (
                                    <p className="text-[#0B0D13] font-medium">
                                        {option.value}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Column - Info */}
                        <div className="lg:col-span-2">
                            {/* Section Title */}
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D13] mb-4">
                                    We&apos;d Love to Hear From You
                                </h2>
                                <p className="text-[#64748B] leading-relaxed">
                                    Have a project in mind? Want to learn more
                                    about how LZJ can help your business? Fill
                                    out the form and we&apos;ll get back to you
                                    within 24 hours.
                                </p>
                            </div>

                            {/* Quick FAQs */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-[#0B0D13] mb-4">
                                    Quick Answers
                                </h3>
                                <div className="space-y-4">
                                    {FAQS.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="faq-item p-4 rounded-xl bg-white border border-gray-100"
                                        >
                                            <h4 className="font-medium text-[#0B0D13] mb-1 flex items-start gap-2">
                                                <span
                                                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-[#0B0D13] mt-0.5"
                                                    style={{
                                                        background:
                                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                                    }}
                                                >
                                                    ?
                                                </span>
                                                {faq.question}
                                            </h4>
                                            <p className="text-[#64748B] text-sm pl-7">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-semibold text-[#0B0D13] mb-4">
                                    Follow Us
                                </h3>
                                <p className="text-[#64748B] text-sm mb-4">
                                    Stay updated with our latest news and
                                    updates.
                                </p>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="https://www.youtube.com/@LZJESOLEENLTD"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-[#0B0D13] flex items-center justify-center text-[#F7C74B] hover:bg-[#F7C74B] hover:text-[#0B0D13] transition-colors"
                                    >
                                        <BsYoutube className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://www.tiktok.com/@lzjesoleen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-[#0B0D13] flex items-center justify-center text-[#F7C74B] hover:bg-[#F7C74B] hover:text-[#0B0D13] transition-colors"
                                    >
                                        <BsTiktok className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/lzjesoleen/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-[#0B0D13] flex items-center justify-center text-[#F7C74B] hover:bg-[#F7C74B] hover:text-[#0B0D13] transition-colors"
                                    >
                                        <BsInstagram className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-3 contact-form-container">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map/Location Section (Optional Visual) */}
            <section className="py-16 px-6 bg-[#0B0D13]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#F8F8F8] mb-4">
                                Based in Lagos,{" "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    Serving Africa
                                </span>
                            </h2>
                            <p className="text-[#64748B] leading-relaxed mb-6">
                                Our headquarters is in Lagos, Nigeria, but we
                                serve businesses across the continent. No matter
                                where you&apos;re located, we&apos;re here to
                                help you transform your operations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#F7C74B]/20 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-[#F7C74B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#F8F8F8] font-medium">
                                            Business Hours
                                        </p>
                                        <p className="text-[#64748B] text-sm">
                                            Monday - Friday, 9:00 AM - 6:00 PM
                                            WAT
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#F7C74B]/20 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-[#F7C74B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#F8F8F8] font-medium">
                                            Response Time
                                        </p>
                                        <p className="text-[#64748B] text-sm">
                                            We respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#F7C74B]/20 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-[#F7C74B]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#F8F8F8] font-medium">
                                            Coverage
                                        </p>
                                        <p className="text-[#64748B] text-sm">
                                            15+ states across Nigeria and
                                            growing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative">
                            <div className="bg-[#1A1D27] rounded-2xl p-8 border border-white/10">
                                {/* Africa Map Placeholder */}
                                <div className="aspect-square relative flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 rounded-full opacity-20 blur-2xl"
                                        style={{
                                            background:
                                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                        }}
                                    />
                                    <div className="relative z-10 text-center">
                                        <div
                                            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                            style={{
                                                background:
                                                    "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                            }}
                                        >
                                            <span className="text-[#0B0D13] font-bold text-3xl">
                                                LZJ
                                            </span>
                                        </div>
                                        <p className="text-[#F8F8F8] font-semibold text-lg">
                                            Lagos, Nigeria
                                        </p>
                                        <p className="text-[#64748B] text-sm">
                                            West Africa
                                        </p>

                                        {/* Pulse indicator */}
                                        <div className="flex items-center justify-center gap-2 mt-4">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                            <span className="text-green-400 text-sm">
                                                Online & Ready
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-6 bg-[#F8F8F8]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D13] mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-[#64748B] mb-8">
                        Don&apos;t wait. Start your journey to smarter
                        operations today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/get-started">
                            <button
                                className="px-8 py-4 rounded-[0.625rem] text-[#0B0D13] font-semibold"
                                style={{
                                    background:
                                        "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                }}
                            >
                                Get Started Free
                            </button>
                        </Link>
                        <Link href="/solutions">
                            <button className="px-8 py-4 rounded-[0.625rem] border-2 border-[#0B0D13] text-[#0B0D13] font-semibold hover:bg-[#0B0D13] hover:text-[#F8F8F8] transition-colors">
                                Explore Solutions
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

// "use client";
// import { PhoneIcon } from "lucide-react";
// import ContactForm from "./contact-form";
// import { BsEnvelopeOpenFill } from "react-icons/bs";
// import Link from "next/link";

// const ContactPage = () => {
//     // return (
//     //     <div className="min-h-screen">
//     //         <div className="py-12 md:py-20 w-full md:w-1/2 mx-auto px-8 md:px-0">
//     //             <div>
//     //                 <h1 className="font-bold font-clash-display text-center text-4xl mb-5">
//     //                     Talk to our sales team
//     //                 </h1>
//     //                 <p className="text-muted-foreground text-center">
//     //                     Get in touch and ask us anything. Learn how your team
//     //                     can ramp up business efficiency with better
//     //                     collaboration. See what scaling without friction looks
//     //                     like when you use LZJ Solutions to fit your exact needs.
//     //                 </p>
//     //             </div>

//     //             <div className="flex items-center justify-between gap-4 my-6">
//     //                 <div className="flex flex-col lg:flex-row items-center gap-4">
//     //                     <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-full">
//     //                         <BsEnvelopeOpenFill className="text-primary-gold size-6" />
//     //                     </div>
//     //                     <div className="text-center lg:text-left">
//     //                         <h1 className="text-xl font-semibold text-dark-navy">
//     //                             Write to us
//     //                         </h1>
//     //                         <Link
//     //                             href={"mailto:info@lzjesoleen.com"}
//     //                             className="text-body-text cursor-pointer"
//     //                         >
//     //                             info@lzjesoleen.com
//     //                         </Link>
//     //                     </div>
//     //                 </div>
//     //                 <div className="flex flex-col lg:flex-row items-center gap-4">
//     //                     <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-full">
//     //                         <PhoneIcon className="size-6 text-primary-gold" />
//     //                     </div>
//     //                     <div className="text-center lg:text-left">
//     //                         <h1 className="text-xl font-semibold text-dark-navy">
//     //                             Call us
//     //                         </h1>
//     //                         <p className="text-body-text">+234 701 241 7471</p>
//     //                     </div>
//     //                 </div>
//     //             </div>

//     //             <ContactForm />
//     //         </div>
//     //     </div>
//     // );
// };

// export default ContactPage;
