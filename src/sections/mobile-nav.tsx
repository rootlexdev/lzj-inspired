"use client";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/utils/constants/menu";
import Image from "next/image";
import Link from "next/link";
import "@/lib/styles/mobile-nav.css";
import { useGSAP } from "@gsap/react";
import _SplitText from "gsap/SplitText";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const MobileNav = () => {
    useGSAP(() => {
        const linksContainer = document.querySelector(".nav-links");
        const containerSplits: _SplitText[] = [];
        let isMenuOpen = false;
        let isAnimating = false;

        const menuToggleBtn = document.querySelector(".menu-toggle-btn");
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuOverlayContainer = document.querySelector(
            ".menu-overlay-content"
        );

        linksContainer?.querySelectorAll("a").forEach(element => {
            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line",
            });

            containerSplits.push(split);
            gsap.set(split.lines, { y: "-100%" });
        });

        const openMenu = () => {
            if (isMenuOpen || isAnimating) return;

            isAnimating = true;

            const tl = gsap.timeline({
                onComplete: () => {
                    isAnimating = false;
                    isMenuOpen = true;
                },
                defaults: { ease: "power4.inOut", duration: 0.8 },
            });

            tl.to(
                menuOverlay,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                ""
            ).to(
                menuOverlayContainer,
                {
                    yPercent: 0,
                },
                "<"
            );

            // Animate ALL lines at once with a small stagger for better speed
            const allLines = containerSplits.flatMap(s => s.lines);

            tl.to(
                allLines,
                {
                    y: "0%",
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.05, // Small positive stagger is usually snappier than negative
                },
                "<0.3"
            ); // Starts almost immediately after the menu starts opening

            menuToggleBtn?.classList.add("active");
        };

        const closeMenu = () => {
            if (!isMenuOpen || isAnimating) return;

            isAnimating = true;

            const tl = gsap.timeline({
                onComplete: () => {
                    // Reset state
                    const allLines = containerSplits.flatMap(s => s.lines);
                    gsap.set(allLines, { y: "110%" });
                    isAnimating = false;
                    isMenuOpen = false;
                },
            });

            tl.to(
                menuOverlay,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 0.6,
                    ease: "expo.inOut",
                },
                "<"
            ).to(
                menuOverlayContainer,
                {
                    yPercent: -20,
                    duration: 0.6,
                    ease: "power4.inOut",
                },
                "<"
            );

            menuToggleBtn?.classList.remove("active");
        };

        menuToggleBtn?.addEventListener("click", () => {
            console.log("hit menu");
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // 👇 Expose closeMenu to link clicks
        document.querySelectorAll(".menu-link").forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    });

    const handleRedirect = () => {
        window.open(`https://lzj-client-data-form.vercel.app/`, "_blank");
    };

    return (
        <div>
            <div
                style={{
                    zIndex: 50,
                }}
                className="px-[10%] py-10 relative"
            >
                <div className="flex items-center justify-between gap-x-3 nav-part">
                    <Link href="/">
                        <Image
                            src={"/assets/logo.svg"}
                            width={60}
                            height={40}
                            className=""
                            alt="w-15 h-10"
                        />
                    </Link>

                    <div className="flex flex-col gap-y-1.5 lg:hidden menu-toggle-btn">
                        <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                        <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                        <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                    </div>
                </div>
            </div>
            <div className="menu-overlay bg-soft-white">
                <div className="menu-overlay-content">
                    <div className=" flex flex-col items-center gap-5 nav-links">
                        {MenuLinks.map((link, i) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={i}
                                    className="link-text text-dark-navy font-medium"
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                        <Link
                            className="text-dark-navy font-medium link-text"
                            href={"/"}
                        >
                            Contact Sales
                        </Link>
                        <Button
                            onClick={() => handleRedirect()}
                            className="w-full p-4 font-clash-display text-xl"
                        >
                            Start for free
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
