import { useParams } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel";

export const useStaffId = () => {
    const params = useParams();

    return params.staffId as Id<"staffSubmissions">;
};
