import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
    text: string;
    active: boolean;
    url: string;
    hasDropdown: boolean;
}

const Navlink = ({ active, text, url, hasDropdown }: Props) => {
    return (
        <Link
            href={url}
            className={cn(
                "font-satoshi font-normal px-2 py-4 text-body-text transition flex items-center gap-x-1",
                active
                    ? "bg-mint-green font-medium text-green"
                    : "font-normal bg-transparent"
            )}
        >
            {text}
            {hasDropdown ? <ChevronDown /> : null}
        </Link>
    );
};

export default Navlink;
