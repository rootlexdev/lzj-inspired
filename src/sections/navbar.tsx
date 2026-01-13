"use client";
import Image from "next/image";
import Navlink from "./__components/nav-link";
import { MenuLinks } from "@/utils/constants/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useLoaderStore from "@/lib/stores/loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const pathname = usePathname();
    const { isLoaded } = useLoaderStore();

    useGSAP(() => {
        const navPart = gsap.utils.toArray(`.nav-part `) as HTMLElement[];

        const tl = gsap.timeline({
            defaults: {
                ease: "power4.inOut",
            },
            paused: !isLoaded,
        });

        tl.fromTo(
            navPart,
            {
                yPercent: -100,
                opacity: 0.3,
            },
            {
                yPercent: 0,
                opacity: 1,
                stagger: 0.5,
            }
        );
    }, [isLoaded]);

    return (
        <div className="px-[10%] lg:px-[5%] py-10 flex items-center justify-between">
            <div className="overflow-hidden">
                <div className="flex items-center gap-x-3 nav-part">
                    <Link href="/">
                        <Image
                            src={"/assets/logo.svg"}
                            width={60}
                            height={40}
                            className=""
                            alt="w-15 h-10"
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-x-1">
                        {MenuLinks.map((link, i) => {
                            return (
                                <Navlink
                                    key={i}
                                    active={pathname.includes(`/${link.url}`)}
                                    text={link.text}
                                    url={link.url}
                                    hasDropdown={link.hasDropdown}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="overflow-hidden ">
                <div className="hidden lg:flex items-center gap-x-4 nav-part">
                    <Link href={"/get-started"}>
                        <Button>Start for free</Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-y-1.5 lg:hidden">
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                    <span className="h-0.5 bg-primary-gold w-10 rounded-md"></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
