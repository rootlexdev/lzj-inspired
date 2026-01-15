import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader";
import TextDetail from "@/components/global/text-detail";
import { useGetStaffNextOfKinDetails } from "@/lib/features/admin/staff/use-get-staff-next-of-kin-details";
import { useStaffId } from "@/lib/hooks/use-staff-id";

const NextOfKinDetails = () => {
    const staffId = useStaffId();
    const { data, isLoading } = useGetStaffNextOfKinDetails({
        staffId,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!data) {
        return <ErrorScreen />;
    }

    const { address, fullName, phoneNumber, relationship } = data;

    return (
        <div className="pt-4">
            <h3 className="font-semibold text-primary mb-4">
                Staff Next of Kin Entry
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-5">
                <TextDetail label="Full Name" value={`${fullName}`} />
                <TextDetail label="Phone Number" value={`${phoneNumber}`} />
                <TextDetail label="Address" value={`${address}`} />
                <TextDetail
                    label="Relationship"
                    value={`${relationship || "No Entry"}`}
                />
            </div>
        </div>
    );
};

export default NextOfKinDetails;
