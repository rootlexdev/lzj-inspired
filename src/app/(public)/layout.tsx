import NavLoaderTrigger from "@/components/global/nav-loader-trigger";
import GSAPProvider from "@/components/providers/gsap-provider";
// import Footer from "@/sections/footer";
import MobileNav from "@/sections/mobile-nav";
import Navbar from "@/sections/navbar";
import React, { ReactNode } from "react";
import Footer2 from "../../sections/footer-2";

interface Props {
    children: ReactNode;
}

const PublicPagesLayout = ({ children }: Props) => {
    return (
        <div>
            <GSAPProvider />
            <NavLoaderTrigger />
            <div className="lg:hidden">
                <MobileNav />
            </div>
            <div className="hidden lg:block">
                <Navbar />
            </div>
            {children}
            <Footer2 />
        </div>
    );
};

export default PublicPagesLayout;
