"use client";

import SideBar from "@/components/global/sidebar";
import TopBar from "@/components/global/top-bar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // ✅ 5. Authorized admin content
    return (
        <div className="h-screen flex overflow-hidden">
            {/* Example: You can put your admin sidebar or header here */}
            <SideBar />

            <main className="flex-1 flex flex-col border-l border-l-muted bg-white">
                <TopBar />
                <div className="flex-1  overflow-hidden overflow-y-scroll p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
