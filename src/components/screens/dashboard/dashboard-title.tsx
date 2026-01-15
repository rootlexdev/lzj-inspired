import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
    title: string;
    subtitle?: string;
    button?: string;
    onClick?: () => void;
    isRedirect?: boolean;
    route?: string;
    btnClassNames?: string;
    icon?: React.ReactNode;
}

const DashboardTitle = ({
    title,
    subtitle,
    onClick,
    button,
    route,
    isRedirect = false,
    btnClassNames,
    icon,
}: Props) => {
    return (
        <div className="mt-2 mb-6 flex flex-row items-center justify-between">
            <div className="flex-1">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="text-supporting-text font-medium max-w-[60%] text-sm">
                    {subtitle}
                </p>
            </div>
            {button ? (
                isRedirect && route ? (
                    <Link href={route}>
                        <Button className={btnClassNames}>{button}</Button>
                    </Link>
                ) : (
                    <Button
                        className={cn(
                            "flex-row items-center space-x-4",
                            btnClassNames
                        )}
                        onClick={onClick}
                    >
                        {icon}
                        {button}
                    </Button>
                )
            ) : null}
        </div>
    );
};

export default DashboardTitle;
