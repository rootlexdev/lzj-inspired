"use client";
import HeroSection from "@/sections/hero-section";
import PartnersScroll from "@/sections/partners-scroll";
import ProblemsSection from "@/sections/problems-section";
import Preloader from "@/sections/preloader";
import { useEffect } from "react";
import useLoaderStore from "@/lib/stores/loader";
import SolutionsSection from "@/sections/solutions-section-3";
import AffiliateSection from "@/sections/affiliate-section";
import WhyChooseUs from "@/sections/why-choose-us-2";
import TestimonialsSection from "@/sections/testimonials-section";

export default function Home() {
    const { setLoaded } = useLoaderStore();

    useEffect(() => {
        setTimeout(() => setLoaded(), 1000);
    }, [setLoaded]);
    return (
        <div>
            <Preloader />
            <HeroSection />
            <PartnersScroll />
            <ProblemsSection />
            <SolutionsSection />
            <WhyChooseUs />
            <AffiliateSection />
            <TestimonialsSection />
        </div>
    );
}
