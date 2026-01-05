"use client";
import useLoaderStore from "@/lib/stores/loader";
import HeroSection from "@/sections/hero-section";
import PartnersScroll from "@/sections/partners-scroll";
import Preloader from "@/sections/preloader";
import ProblemsSection from "@/sections/problems-section";
import SolutionsSection2 from "@/sections/solutions-section-2";
import Testimonials from "@/sections/testimonials";
import WhyChooseUs from "@/sections/why-choose-us";
import { useEffect } from "react";

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
            <SolutionsSection2 />
            <WhyChooseUs />
            <Testimonials />
        </div>
    );
}
