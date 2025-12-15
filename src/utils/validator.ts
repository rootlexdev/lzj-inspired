import z from "zod";

export const NextOfKinRelationshipEnum = z.enum(
    [
        "SPOUSE",
        "FATHER",
        "MOTHER",
        "CHILD",
        "BROTHER",
        "SISTER",
        "GUARDIAN",
        "UNCLE",
        "AUNT",
        "COUSIN",
        "FRIEND",
        "OTHER",
    ],
    {
        error: "Please select a relationship",
    }
);

export const ReligionEnum = z.enum(
    ["CHRISTIANITY", "ISLAM", "TRADITIONAL", "OTHER"],
    {
        error: "Please select a religion",
    }
);

export const JobPositionEnum = z.enum(
    ["CEO", "FULL-STACK-DEVELOPER", "MARKETING-SALES"],
    {
        error: "Please select a position",
    }
);
