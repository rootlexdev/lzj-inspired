import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import MobileNav from "@/sections/mobile-nav";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const clashDisplay = localFont({
    src: [
        {
            path: "../utils/fonts/ClashDisplay-Bold.otf",
            style: "bold",
            weight: "700",
        },
        {
            path: "../utils/fonts/ClashDisplay-Semibold.otf",
            style: "semibold",
            weight: "600",
        },
        {
            path: "../utils/fonts/ClashDisplay-Medium.otf",
            style: "medium",
            weight: "500",
        },
        {
            path: "../utils/fonts/ClashDisplay-Regular.otf",
            style: "normal",
            weight: "400",
        },
        {
            path: "../utils/fonts/ClashDisplay-Light.otf",
            style: "light",
            weight: "300",
        },
    ],
    variable: "--font-clash-display", // optional: create CSS variable
});

export const metadata: Metadata = {
    title: "LZJ_ESOL’N",
    description: "Made for growing businesses",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ConvexAuthNextjsServerProvider>
            <html lang="en">
                <body
                    className={`${inter.variable} ${clashDisplay.variable} antialiased`}
                >
                    <ConvexClientProvider>
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                        <div className="hidden lg:block">
                            <Navbar />
                        </div>
                        {children}
                        <Toaster />
                        <Footer />
                        <NextTopLoader color="#f7c74b" />
                    </ConvexClientProvider>
                </body>
            </html>
        </ConvexAuthNextjsServerProvider>
    );
}
