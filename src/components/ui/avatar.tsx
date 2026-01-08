import { generateDarkBackground } from "@/utils/color-generator";
import { avatarFallback } from "@/utils/helpers";
import Image from "next/image";
import React, { CSSProperties } from "react";

interface Props {
    size?: number;
    url?: string | null;
    text?: string;
    className?: string;
    containerStyle?: CSSProperties;
    imgStyle?: CSSProperties;
    onPress?: () => void;
}

const Avatar: React.FC<Props> = ({
    size = 40,
    url,
    text,
    className,
    containerStyle,
    imgStyle,
    onPress,
}) => {
    const bg = url ? "#fff" : generateDarkBackground(text || "U");

    return (
        <div
            className={`rounded-full flex items-center justify-center overflow-hidden cursor-pointer ${
                className || ""
            }`}
            style={{
                width: size,
                height: size,
                backgroundColor: bg,
                ...containerStyle,
            }}
            onClick={onPress}
        >
            {url ? (
                <Image
                    src={url}
                    alt="avatar"
                    width={size}
                    height={size}
                    style={{
                        width: size,
                        height: size,
                        objectFit: "cover",
                        borderRadius: "50%",
                        ...imgStyle,
                    }}
                />
            ) : (
                <span
                    className="text-white font-semibold select-none"
                    style={{ fontSize: size * 0.5 }}
                >
                    {avatarFallback(text || "U")}
                </span>
            )}
        </div>
    );
};

export default Avatar;
