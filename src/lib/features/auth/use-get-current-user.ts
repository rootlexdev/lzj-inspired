import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetCurrentUser = () => {
    const data = useQuery(api.staff.auth.getLoggedInUser);

    const isLoading = data === undefined;

    return { data, isLoading };
};
