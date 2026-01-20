import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import RootModal from "@/components/modals/root-modal";
import ReactQueryProvider from "@/components/providers/query-provider";

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
    title: "LZJ ESOLEEN",
    description: "Made for growing businesses",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${clashDisplay.variable} antialiased`}
            >
                <ReactQueryProvider>
                    <ConvexClientProvider>
                        {children}
                        <Toaster />
                        <RootModal />
                        <NextTopLoader color="#f7c74b" />
                    </ConvexClientProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
