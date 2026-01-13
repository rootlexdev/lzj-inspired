"use client";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/utils/constants/menu";
import Image from "next/image";
import Link from "next/link";
import "@/lib/styles/mobile-nav.css";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { contextSafe } = useGSAP({ scope: containerRef });

    // We define the closing logic here
    const toggleMenu = contextSafe(() => {
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuOverlayContent = document.querySelector(
            ".menu-overlay-content"
        );
        const links = document.querySelectorAll(".menu-link .line"); // Select the split lines

        if (!isMenuOpen) {
            // OPEN ANIMATION
            gsap.timeline()
                .to(menuOverlay, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "power4.inOut",
                    duration: 0.8,
                })
                .to(
                    menuOverlayContent,
                    { yPercent: 0, ease: "power4.inOut", duration: 0.8 },
                    "<"
                )
                .to(
                    links,
                    {
                        y: "0%",
                        stagger: 0.05,
                        ease: "power3.out",
                        duration: 0.9,
                    },
                    "<0.3"
                );

            setIsMenuOpen(true);
        } else {
            // CLOSE ANIMATION
            gsap.timeline({
                onComplete: () => setIsMenuOpen(false),
            })
                .to(menuOverlay, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 0.6,
                    ease: "expo.inOut",
                })
                .to(menuOverlayContent, { yPercent: -20, duration: 0.6 }, "<");
        }
    });

    // Handle SplitText separately once on mount
    useGSAP(
        () => {
            const links = document.querySelectorAll(".link-text");
            links.forEach(el => {
                const split = new SplitText(el, {
                    type: "lines",
                    linesClass: "line",
                });
                gsap.set(split.lines, { y: "-100%" });
            });
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef}>
            <div
                style={{
                    zIndex: 50,
                }}
                className="px-[10%] py-10 relative"
            >
                <div className="flex items-center justify-between gap-x-3 nav-part">
                    <Link
                        href="/"
                        onClick={() => (isMenuOpen ? toggleMenu : null)}
                    >
                        <Image
                            src={"/assets/logo.svg"}
                            width={60}
                            height={40}
                            className=""
                            alt="w-15 h-10"
                        />
                    </Link>

                    <div
                        className={cn(
                            "flex flex-col gap-y-1.5 lg:hidden menu-toggle-btn",
                            isMenuOpen ? "active" : ""
                        )}
                        onClick={toggleMenu}
                    >
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
                                    className="link-text text-dark-navy font-medium menu-link"
                                    onClick={toggleMenu}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                        <Link href={"/get-started"}>
                            <Button
                                className="w-full p-4 font-clash-display text-xl"
                                onClick={toggleMenu}
                            >
                                Start for free
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
