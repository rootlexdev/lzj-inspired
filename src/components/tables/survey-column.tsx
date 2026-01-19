import { SurveyDataType } from "@/lib/features/return-types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const CUSTOMER_SURVEY_COLUMN: ColumnDef<SurveyDataType>[] = [
    {
        header: "S/N",
        accessorKey: "_id",
        cell: ({ row }) => {
            return row.index + 1;
        },
    },
    {
        accessorKey: "fullName",
        header: "Full Name",
    },
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "hasDatabase",
        header: "Has Database",
        cell: ({ row }) => (row ? "Yes" : "No"),
    },
    {
        accessorKey: "_id",
        header: "Action",
        cell: ({ row }) => (
            <Link
                className="bg-primary-gold p-3 rounded-md text-primary font-medium"
                href={`/secure-area/customer-surveys/${row.getValue("_id")}`}
            >
                View Data
            </Link>
        ),
    },
];
