import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";
import { submitSurveyAction } from "./apiActions/surveySubmissionsActions";
import { getStaffList } from "./apiActions/staffActions";
import { submitClientOnboardingAction } from "./apiActions/clientActions";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth);

// GET ROUTES
http.route({
    path: "/staff-list",
    method: "GET",
    handler: getStaffList,
});

// Options Routes
http.route({
    path: "/survey-submissions",
    method: "OPTIONS",
    handler: submitSurveyAction,
});
http.route({
    path: "/client-onboarding",
    method: "OPTIONS",
    handler: submitClientOnboardingAction,
});

// POST ROUTES

http.route({
    path: "/client-onboarding",
    method: "POST",
    handler: submitClientOnboardingAction,
});

http.route({
    path: "/survey-submissions",
    method: "POST",
    handler: submitSurveyAction,
});

export default http;
