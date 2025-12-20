"use client";
import HeroSection from "@/sections/hero-section";
import PartnersScroll from "@/sections/partners-scroll";
import Preloader from "@/sections/preloader";
import ProblemsSection from "@/sections/problems-section";
import SolutionsSection from "@/sections/solutions-section";
import Testimonials from "@/sections/testimonials";
import WhyChooseUs from "@/sections/why-choose-us";

export default function Home() {
    return (
        <div>
            <Preloader />
            <HeroSection />
            <PartnersScroll />
            <ProblemsSection />
            <SolutionsSection />
            <WhyChooseUs />
            <Testimonials />
        </div>
    );
}
