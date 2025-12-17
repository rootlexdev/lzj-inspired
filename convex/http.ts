import { httpRouter } from "convex/server";
import { auth } from "./auth";
import { submitSurveyAction } from "./apiActions/surveySubmissionsActions";
import { getStaffList } from "./apiActions/staffActions";

const http = httpRouter();

auth.addHttpRoutes(http);

http.route({
    path: "/survey-submissions",
    method: "POST",
    handler: submitSurveyAction,
});

http.route({
    path: "/staff-list",
    method: "GET",
    handler: getStaffList,
});

export default http;
