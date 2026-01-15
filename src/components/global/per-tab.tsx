import { cn } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/utils/helpers";
import React from "react";

interface Props {
    onClick: () => void;
    tab: string;
    isActive: boolean;
}

function PerTab({ onClick, tab, isActive }: Props) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "text-sm pb-3 border-b font-medium cursor-pointer transition-all hover:text-primary",
                isActive
                    ? "text-primary border-b-primary-gold"
                    : "text-body-text border-b-transparent"
            )}
        >
            {capitalizeFirstLetter(tab)}
        </div>
    );
}

export default PerTab;
