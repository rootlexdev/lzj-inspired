import { create } from "zustand";
import { StaffScreenTabsEnum } from "@/utils/enums";

interface ScreensTabProps {
    staffScreenTab: StaffScreenTabsEnum;
    setStaffScreenTab: (value?: StaffScreenTabsEnum) => void;
}

export const useScreensTabStore = create<ScreensTabProps>(set => ({
    staffScreenTab: "STAFF_DETAILS",
    setStaffScreenTab: value => set({ staffScreenTab: value }),
}));
