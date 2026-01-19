import { Doc } from "../../../convex/_generated/dataModel";

export type SurveyDataType = Doc<"surveySubmissions"> & {
    staff: Doc<"staffSubmissions"> | null;
};
