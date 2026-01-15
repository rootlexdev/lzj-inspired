"use client";
import EmptySection from "@/components/global/empty-section";
import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader";
import DashboardTitle from "@/components/screens/dashboard/dashboard-title";
import { useGetStaffList } from "@/lib/features/admin/staff/use-get-staff-list";
import React from "react";
import PerStaff from "./per-staff";

const StaffSubmissionsPage = () => {
    const { data: staffList, isLoading } = useGetStaffList();

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!staffList) {
        return <ErrorScreen />;
    }

    return (
        <div className="h-full p-4 flex flex-col ">
            <div className="relative">
                <div className="flex items-center border-b-border-color border-b py-2 bg-white rounded-sm justify-between px-3">
                    <div className="flex-1">
                        <DashboardTitle
                            title="Staff List"
                            subtitle="Manage Staff Details Here"
                        />
                    </div>
                </div>
            </div>

            {!staffList.length ? (
                <EmptySection />
            ) : (
                <div className="grid grid-cols-4 gap-4 bg-white p-5 rounded-sm">
                    {staffList.map(staff => {
                        return <PerStaff key={staff._id} staff={staff} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default StaffSubmissionsPage;
