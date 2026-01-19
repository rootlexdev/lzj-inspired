import { useParams } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel";

export const useSurveyId = () => {
    const params = useParams();

    return params.surveyId as Id<"surveySubmissions">;
};
