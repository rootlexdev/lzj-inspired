"use client";
import { useGetCurrentUser } from "@/lib/features/auth/use-get-current-user";

const SecurePage = () => {
    const { data: profile } = useGetCurrentUser();

    return <div>Hi {profile?.firstName}</div>;
};

export default SecurePage;
