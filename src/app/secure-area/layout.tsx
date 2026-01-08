"use client";

import LoaderComponent from "@/components/global/loader";
import SideBar from "@/components/global/sidebar";
import TopBar from "@/components/global/top-bar";
import { useGetCurrentUser } from "@/lib/features/auth/use-get-current-user";
import { useGenerateProfile } from "@/lib/features/staff/use-generate-profile";
import { useEffect } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: user, isLoading } = useGetCurrentUser();
    const { mutate, isPending, isSuccess } = useGenerateProfile();

    useEffect(() => {
        // Only trigger if we've finished loading the user,
        // the user profile is missing, AND we aren't already creating one.
        if (!isLoading && !user && !isPending && !isSuccess) {
            mutate({});
        }
    }, [user, isLoading, mutate, isSuccess, isPending]);

    // Keep the loader active until the user exists OR the mutation successfully finishes
    if (isLoading || isPending || (!user && !isSuccess)) {
        return (
            <div className="h-screen flex items-center justify-center">
                <LoaderComponent />
            </div>
        );
    }

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
