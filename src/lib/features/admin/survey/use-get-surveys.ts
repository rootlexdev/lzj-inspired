import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const BATCH_SIZE = 20;

export const useGetSurveys = () => {
    const { results, status, loadMore } = usePaginatedQuery(
        api.admin.surveys.getAllCustomerSurveys,
        {},
        { initialNumItems: BATCH_SIZE },
    );

    return { results, status, loadMore: () => loadMore(BATCH_SIZE) };
};
