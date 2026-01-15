import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader";
import TextDetail from "@/components/global/text-detail";
import { useGetStaffAccountDetails } from "@/lib/features/admin/staff/use-get-staff-account-details";
import { useStaffId } from "@/lib/hooks/use-staff-id";

const StaffAccountDetails = () => {
    const staffId = useStaffId();
    const { data, isLoading } = useGetStaffAccountDetails({
        staffId,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!data) {
        return <ErrorScreen />;
    }

    const { accountName, accountNumber, bank } = data;

    return (
        <div className="pt-4">
            <h3 className="font-semibold text-primary mb-4">
                Staff Account Details
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-5">
                <TextDetail label="Account Name" value={accountName} />
                <TextDetail label="Account Number" value={accountNumber} />
                <TextDetail label="Bank Name" value={bank} />
            </div>
        </div>
    );
};

export default StaffAccountDetails;
