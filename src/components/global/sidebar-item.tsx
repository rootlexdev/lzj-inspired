import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
    label: string;
    icon: IconType | LucideIcon;
    url: string;
    isActive: boolean;
}

const AdminSidebarItem = ({ icon: Icon, url, label, isActive }: Props) => {
    return (
        <Button
            variant={"transparent"}
            asChild
            className={cn(
                " py-3 mb-2 justify-start w-full rounded-lg group hover:bg-[#E6F6F0]",
                isActive && "bg-[#DCFCE7]"
            )}
        >
            <Link href={`/secure-area/${url}`}>
                <Icon
                    className={cn(
                        "size-5 mr-2 text-supporting-text group-hover:text-green",
                        isActive && "text-[#065F46]"
                    )}
                />
                <p
                    className={cn(
                        "truncate text-sm font-medium block text-supporting-text group-hover:text-green",
                        isActive && "text-[#065F46]"
                    )}
                >
                    {label}
                </p>
            </Link>
        </Button>
    );
};

export default AdminSidebarItem;
