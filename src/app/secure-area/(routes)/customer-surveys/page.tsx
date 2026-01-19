"use client";
import EmptySection from "@/components/global/empty-section";
import LoaderComponent from "@/components/global/loader";
import DashboardTitle from "@/components/screens/dashboard/dashboard-title";
import { CUSTOMER_SURVEY_COLUMN } from "@/components/tables/survey-column";
import { DataTable } from "@/components/ui/data-table";
import { useGetSurveys } from "@/lib/features/admin/survey/use-get-surveys";
import React from "react";

const CustomSurveysPage = () => {
    const { status, results } = useGetSurveys();

    return (
        <div className="h-full p-4 flex flex-col ">
            <div className="relative">
                <div className="flex items-center border-b-border-color border-b py-2 bg-white rounded-sm justify-between px-3">
                    <div className="flex-1">
                        <DashboardTitle
                            title="Customer Surveys"
                            subtitle="View and manage submitted surveys"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-scroll">
                {status === "LoadingFirstPage" || !results ? (
                    <LoaderComponent />
                ) : results.length < 1 ? (
                    <div className="p-6 ">
                        <EmptySection text="No surveys at the moment." />
                    </div>
                ) : (
                    <div className="bg-white p-5 rounded-sm">
                        {
                            <DataTable
                                columns={CUSTOMER_SURVEY_COLUMN}
                                data={results}
                            />
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSurveysPage;
