"use client";
import { BellIcon, ChevronDown, SearchIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiSignOut } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { useGetCurrentUser } from "@/lib/features/auth/use-get-current-user";
import LoaderComponent from "@/components/global/loader";
import Avatar from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import ErrorScreen from "./error-screen";

const AdminTopbar = () => {
    const { data: profile, isLoading } = useGetCurrentUser();
    const router = useRouter();

    const handleSignout = () => {
        authClient.signOut().then(() => {
            router.replace("/");
        });
    };

    console.log("The profile:", profile);

    if (isLoading || !profile) return <LoaderComponent />;

    if (profile === null) {
        return <ErrorScreen />;
    }

    return (
        <div>
            <div className="py-2.5 bg-white px-6 border-b border-b-muted flex items-center justify-between gap-x-4">
                <div className=" flex items-center gap-x-1 rounded-md px-2 py-4">
                    <h3 className="text-lg text-navy-blue font-semibold">
                        Admin Dashboard
                    </h3>
                </div>{" "}
                <div className="flex-1">
                    <div className=" flex items-center shadown-md gap-x-1 rounded-md border border-input px-2 bg-muted py-1">
                        <SearchIcon className="text-icon size-5" />
                        <Input
                            placeholder="Search for anything"
                            className="border-none outline-none focus-visible:ring-transparent shadow-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="border border-muted bg-muted w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">
                            <BellIcon className="size-5 text-icon" />
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="border-l border-l-muted pl-4 flex items-center space-x-2 cursor-pointer">
                                <Avatar
                                    url={profile.avatar}
                                    text={profile.firstName}
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-left">
                                        {profile.firstName}{" "}
                                        {profile.lastName?.charAt(0)}.
                                    </p>
                                </div>
                                <ChevronDown className="text-muted-foreground" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="flex items-center space-x-2">
                                <FaUser />
                                <span className="text-sm font-semibold">
                                    My Profile
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="flex items-center space-x-2"
                                onClick={handleSignout}
                            >
                                <PiSignOut />
                                <span className="text-sm font-semibold">
                                    Log Out{" "}
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default AdminTopbar;
