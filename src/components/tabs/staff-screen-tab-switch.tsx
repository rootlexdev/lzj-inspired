import PerTab from "@/components/global/per-tab";
import { useScreensTabStore } from "@/lib/stores/screens-tab";
import { StaffScreenTabsEnum } from "@/utils/enums";

const TABS: StaffScreenTabsEnum[] = [
    "STAFF_DETAILS",
    "NEXT_OF_KIN",
    "ACCOUNT_DETAILS",
    "SURVEYS_SUBMITTED",
];

export function StaffScreenTabSwitch() {
    const { staffScreenTab, setStaffScreenTab } = useScreensTabStore();
    return (
        <div className="flex items-center gap-8 w-full overflow-x-scroll">
            {TABS.map(t => (
                <PerTab
                    tab={t.split("_").join(" ").toLowerCase()}
                    isActive={staffScreenTab === t}
                    key={t}
                    onClick={() => {
                        setStaffScreenTab(t);
                    }}
                />
            ))}
        </div>
    );
}
