/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as apiActions_cors from "../apiActions/cors.js";
import type * as apiActions_staffActions from "../apiActions/staffActions.js";
import type * as apiActions_surveySubmissionsActions from "../apiActions/surveySubmissionsActions.js";
import type * as appActions_emailActions from "../appActions/emailActions.js";
import type * as auth from "../auth.js";
import type * as client_surveySubmissions from "../client/surveySubmissions.js";
import type * as errorUtils from "../errorUtils.js";
import type * as helpers_constants from "../helpers/constants.js";
import type * as helpers_convexTypes from "../helpers/convexTypes.js";
import type * as helpers_db from "../helpers/db.js";
import type * as helpers_formatters from "../helpers/formatters.js";
import type * as helpers_templates from "../helpers/templates.js";
import type * as helpers_validators_survey from "../helpers/validators/survey.js";
import type * as http from "../http.js";
import type * as internalServices_staffServices from "../internalServices/staffServices.js";
import type * as internalServices_surveyServices from "../internalServices/surveyServices.js";
import type * as staff_submissions from "../staff/submissions.js";
import type * as unions from "../unions.js";
import type * as workspace_workspaceActions from "../workspace/workspaceActions.js";
import type * as workspace_workspaceInvites from "../workspace/workspaceInvites.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "apiActions/cors": typeof apiActions_cors;
  "apiActions/staffActions": typeof apiActions_staffActions;
  "apiActions/surveySubmissionsActions": typeof apiActions_surveySubmissionsActions;
  "appActions/emailActions": typeof appActions_emailActions;
  auth: typeof auth;
  "client/surveySubmissions": typeof client_surveySubmissions;
  errorUtils: typeof errorUtils;
  "helpers/constants": typeof helpers_constants;
  "helpers/convexTypes": typeof helpers_convexTypes;
  "helpers/db": typeof helpers_db;
  "helpers/formatters": typeof helpers_formatters;
  "helpers/templates": typeof helpers_templates;
  "helpers/validators/survey": typeof helpers_validators_survey;
  http: typeof http;
  "internalServices/staffServices": typeof internalServices_staffServices;
  "internalServices/surveyServices": typeof internalServices_surveyServices;
  "staff/submissions": typeof staff_submissions;
  unions: typeof unions;
  "workspace/workspaceActions": typeof workspace_workspaceActions;
  "workspace/workspaceInvites": typeof workspace_workspaceInvites;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
