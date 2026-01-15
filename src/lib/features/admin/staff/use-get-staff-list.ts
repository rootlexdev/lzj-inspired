import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const useGetStaffList = () => {
    const data = useQuery(api.admin.staff.getStaffList);

    const isLoading = data === undefined;

    return { data, isLoading };
};
