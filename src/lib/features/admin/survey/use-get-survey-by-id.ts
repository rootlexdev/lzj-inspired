import { useQuery } from "convex/react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

interface Props {
    surveyId: Id<"surveySubmissions">;
}

export const useGetSurveyById = ({ surveyId }: Props) => {
    const data = useQuery(api.admin.surveys.getSurveyById, {
        surveyId,
    });

    const isLoading = data === undefined;

    return { data, isLoading };
};
