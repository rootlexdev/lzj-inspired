import React from "react";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import TextDetail from "@/components/global/text-detail";
import { formatTimeFn } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
    staff: Doc<"staffSubmissions">;
}

const StaffDetails = ({ staff }: Props) => {
    const {
        address,
        dob,
        email,
        firstName,
        lastName,
        nationality,
        occupation,
        phoneNumber,
        gender,
        position,
        religion,
        resumeUrl,
        passportUrl,
        workMail,
    } = staff;

    return (
        <div>
            <div className="pt-4 ">
                <h3 className="font-semibold text-primary mb-4">
                    Quick Overview
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="flex flex-col gap-2">
                        <p>Passport</p>
                        <Image
                            src={passportUrl}
                            alt={firstName}
                            width={100}
                            height={100}
                            className="w-40 h-50 rounded-md object-cover"
                        />
                    </div>
                    <TextDetail
                        label="Full Name"
                        value={`${firstName} ${lastName}`}
                    />
                    <TextDetail label="Registered Email" value={email} />
                    <TextDetail
                        label="Work Mail"
                        value={workMail || "No registered"}
                    />
                    <TextDetail label="Phone Number" value={phoneNumber} />
                    <TextDetail label="Occupation" value={occupation} />
                    <TextDetail label="Gender" value={gender} />
                    <TextDetail label="Address" value={address} />
                    <TextDetail label="Nationality" value={nationality} />
                    <TextDetail
                        label="Date of Birth"
                        value={formatTimeFn(dob, "DD MMMM, YYYY")}
                    />
                    <TextDetail label="Religion" value={religion} />
                    <TextDetail label="Position" value={position} />

                    <div className="flex flex-col gap-2">
                        <p>Resume Link</p>
                        <Button
                            onClick={() => window.open(resumeUrl, "_blank")}
                        >
                            Open Link
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDetails;
