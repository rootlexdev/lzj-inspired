"use client";
import { useGetSurveyById } from "@/lib/features/admin/survey/use-get-survey-by-id";
import { useSurveyId } from "@/lib/hooks/use-survey-id";
import LoaderComponent from "@/components/global/loader";
import ErrorScreen from "@/components/global/error-screen";
import TextDetail from "@/components/global/text-detail";

const SurveyDetailsPage = () => {
    const surveyId = useSurveyId();

    const { data, isLoading } = useGetSurveyById({
        surveyId,
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
                        {data.fullName} ({data.contact})
                    </h3>
                    <p className="text-body-text text-sm">
                        View all data and manage this survey submission.
                    </p>
                </div>
            </div>
            <div className="flex-1 overflow-y-scroll bg-white">
                <div className="pt-4 ">
                    <h3 className="font-semibold text-primary mb-4">
                        Section 1
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <TextDetail
                            label="Submitted By"
                            value={
                                data.staff
                                    ? `${data.staff?.firstName} ${data.staff.lastName}`
                                    : "No staff registered"
                            }
                        />
                        <TextDetail
                            label="Has a well defined database"
                            value={data.hasDatabase}
                        />
                    </div>
                    <h3 className="font-semibold text-primary mb-4">
                        Section 2
                    </h3>
                    {data.hasDatabase === "No" ? (
                        <div className="grid grid-cols-3 gap-4 mb-5">
                            <TextDetail
                                label="Know Loyal Customers"
                                value={data.knowLoyalCustomers}
                            />
                            <TextDetail
                                label="Keeping Track of your customers"
                                value={data.trackingMethod}
                            />
                            <TextDetail
                                label="What percentage of business decisions are made without access to proper customer data?"
                                value={data.decisionsWithoutData}
                            />
                            <TextDetail
                                label="Do you agree that having instant access to comprehensive customer data could significantly improve your business?"
                                value={data.dataAccessImprovement}
                            />
                            <TextDetail
                                label="Would you like more information about our services"
                                value={data.wantMoreInfo}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 mb-5">
                            <TextDetail
                                label="Ease of access to data"
                                value={data.easeOfAccess}
                            />
                            <TextDetail
                                label="Can you generate reports showing customer history, lifetime value, purchase frequency, etc., automatically?"
                                value={data.autoReports}
                            />
                            <TextDetail
                                label="Does your current system integrate with your e-commerce platform?"
                                value={data.ecommerceIntegration}
                            />
                            <TextDetail
                                label="Are you satisfied with your current system experience?"
                                value={data.systemSatisfaction}
                            />
                            <TextDetail
                                label="Would you prefer a better experience?"
                                value={data.preferBetterExperience}
                            />
                        </div>
                    )}
                    <h3 className="font-semibold text-primary mb-4">
                        Section 3
                    </h3>

                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <TextDetail
                            label="What are the biggest operational challenges you're currently facing?"
                            value={data.operationalChallenges}
                        />
                        <TextDetail
                            label="Don't Know"
                            value={data.dontKnowChallenges?.join(", ")}
                        />
                    </div>

                    <h3 className="font-semibold text-primary mb-4">
                        Section 4
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <TextDetail
                            label="How do you currently keep your records?"
                            value={data.recordKeeping.join(", ")}
                        />
                        <TextDetail
                            label="How would you describe your daily operations?"
                            value={data.dailyOperations}
                        />
                        <TextDetail
                            label="What percentage of your internal processes are manual vs. automated?"
                            value={data.manualVsAutomated}
                        />
                        <TextDetail
                            label="Do errors occur often due to manual processes?"
                            value={data.manualErrors}
                        />
                        <TextDetail
                            label="Do you believe software could simplify and improve this process?"
                            value={data.softwareImprovement}
                        />
                        <TextDetail
                            label="What area of your business would you like to manage more easily?"
                            value={data.manageEasily}
                        />
                    </div>

                    <h3 className="font-semibold text-primary mb-4">
                        Section 5
                    </h3>

                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <TextDetail
                            label="Contact Full Name"
                            value={data.fullName}
                        />

                        <TextDetail
                            label="Contact Company Name"
                            value={data.company}
                        />

                        <TextDetail
                            label="Contact Phone Number"
                            value={data.contact}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
{
    /* <TextDetail label="" value={data.} /> */
}

export default SurveyDetailsPage;
