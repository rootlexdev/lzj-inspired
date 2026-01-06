// components/global/non-home-loader-effect.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useLoaderStore from "@/lib/stores/loader";

export default function NavLoaderTrigger() {
    const pathname = usePathname();
    const { setLoaded } = useLoaderStore();

    useEffect(() => {
        console.log("Pathname:", pathname);
        if (pathname === "/") return;

        console.log("Loaded");
        const timer = setTimeout(() => setLoaded(), 1000);
        return () => clearTimeout(timer);
    }, [pathname, setLoaded]);

    return null;
}
