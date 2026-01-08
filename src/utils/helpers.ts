import dayjs from "dayjs";

export const avatarFallback = (value?: string) => {
    return value?.charAt(0).toUpperCase() || "B";
};

export const capitalizeFirstLetter = (value: string) => {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

export function formatTimeFn(date: string | number, format?: string) {
    const dayjsDate = dayjs(date);
    return dayjsDate.format(format || "MMM DD, hh:mm a");
}
