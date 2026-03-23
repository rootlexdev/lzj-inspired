import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#F7C74B]/50 focus-visible:ring-offset-2 cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-[linear-gradient(107.38deg,#F3F1CF_26.16%,#EDC675_73.84%)] text-[#0B0D13] hover:opacity-90 hover:shadow-lg hover:shadow-[#F7C74B]/20 active:scale-[0.98]",
                destructive:
                    "bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]",
                outline:
                    "border-2 border-[#F7C74B] text-[#F7C74B] bg-transparent hover:bg-[#F7C74B]/10 active:scale-[0.98]",
                "outline-dark":
                    "border-2 border-[#0B0D13] text-[#0B0D13] bg-transparent hover:bg-[#0B0D13] hover:text-[#F8F8F8] active:scale-[0.98]",
                secondary:
                    "bg-[#0B0D13] text-[#F8F8F8] hover:bg-[#1A1D27] active:scale-[0.98]",
                ghost: "text-[#64748B] hover:bg-[#F7C74B]/10 hover:text-[#0B0D13] active:scale-[0.98]",
                link: "text-[#F7C74B] underline-offset-4 hover:underline p-0 h-auto",
                transparent: "bg-transparent hover:bg-white/5",
            },
            size: {
                default: "px-6 py-3",
                sm: "px-4 py-2 text-xs",
                lg: "px-8 py-4 text-base",
                xl: "px-10 py-5 text-lg",
                icon: "size-10",
                "icon-sm": "size-8",
                "icon-lg": "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
