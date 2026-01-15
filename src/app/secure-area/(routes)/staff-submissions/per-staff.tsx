import React from "react";
import { Doc } from "../../../../../convex/_generated/dataModel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
    staff: Doc<"staffSubmissions">;
}

const PerStaff = ({ staff }: Props) => {
    return (
        <div className="border border-border rounded-md cursor-pointer hover:bg-gray-50 transition">
            <Image
                src={staff.passportUrl}
                alt={staff.firstName}
                width={300}
                height={100}
                className="w-full h-72 object-cover rounded-md object-top"
            />
            <div className="flex flex-col p-3 gap-2">
                <h3 className="font-clash-display text-primary">
                    {staff.firstName} {staff.lastName}
                </h3>
                <label className="text-body-text text-sm">
                    {staff.workMail}
                </label>
                <Link
                    href={`/secure-area/staff-submissions/${staff._id}`}
                    className="block mt-2"
                >
                    <Button className="w-full">View</Button>
                </Link>
            </div>
        </div>
    );
};

export default PerStaff;
