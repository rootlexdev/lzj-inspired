"use client";
import { useGetStaffById } from "@/lib/features/admin/staff/use-get-staff-by-id";
import { useStaffId } from "@/lib/hooks/use-staff-id";
import { useScreensTabStore } from "@/lib/stores/screens-tab";
import { Id } from "../../../../../../convex/_generated/dataModel";
import LoaderComponent from "@/components/global/loader";
import ErrorScreen from "@/components/global/error-screen";
import { StaffScreenTabSwitch } from "@/components/tabs/staff-screen-tab-switch";
import StaffDetails from "./staff-details";
import NextOfKinDetails from "./next-of-kin-details";
import StaffAccountDetails from "./staff-account-details";

const StaffIdPage = () => {
    const staffId = useStaffId();

    const { staffScreenTab } = useScreensTabStore();

    const { data, isLoading } = useGetStaffById({
        staffId: staffId as Id<"staffSubmissions">,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!data) {
        return <ErrorScreen />;
    }

    return (
        <div className="px-8 overflow-hidden h-full flex flex-col">
            <div className="flex items-center gap-x-4 mb-6">
                <div>
                    <h3 className="font-semibold text-primary">
                        {data.firstName} {data.lastName}
                    </h3>
                    <p className="text-body-text text-sm">
                        View all data and manage this staff.
                    </p>
                </div>
            </div>
            <StaffScreenTabSwitch />
            <div className="flex-1 overflow-y-scroll bg-white">
                {staffScreenTab === "STAFF_DETAILS" ? (
                    <StaffDetails staff={data} />
                ) : staffScreenTab === "NEXT_OF_KIN" ? (
                    <NextOfKinDetails />
                ) : staffScreenTab === "ACCOUNT_DETAILS" ? (
                    <StaffAccountDetails />
                ) : null}
            </div>
        </div>
    );
};

export default StaffIdPage;
