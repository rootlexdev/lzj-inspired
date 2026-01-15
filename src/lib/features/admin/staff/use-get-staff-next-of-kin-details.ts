import { useQuery } from "convex/react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

interface Props {
    staffId: Id<"staffSubmissions">;
}

export const useGetStaffNextOfKinDetails = ({ staffId }: Props) => {
    const data = useQuery(api.admin.staff.getStaffNextOfKinDetails, {
        staffId,
    });

    const isLoading = data === undefined;

    return { data, isLoading };
};
