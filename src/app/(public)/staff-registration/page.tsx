"use client";
import SuccessModal from "@/components/modals/success-modal";
import { useSuccessModal } from "@/lib/stores/modals";
import {
    JobPositionEnum,
    NextOfKinRelationshipEnum,
    ReligionEnum,
} from "@/utils/validator";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/ui/custom-select";
import {
    GENDER_OPTIONS,
    JOB_POSITION_OPTIONS,
    NEXT_OF_KIN_RELATIONSHIP_OPTIONS,
    NIGERIAN_BANK_OPTIONS,
    RELIGION_OPTIONS,
} from "@/utils/options";
import {
    GenderTypeEnum,
    JobPositionTypeEnum,
    NextOfKinRelationshipTypeEnum,
    ReligionTypeEnum,
} from "@/utils/enums";
import { CloudUpload, ImageIcon, LucideLoaderCircle } from "lucide-react";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { StaffFileMap, StaffUploadPart, StaffUploadProps } from "@/utils/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCreateStaffSubmission } from "@/lib/features/staff/use-create-staff-submission";
import { RiAttachment2 } from "react-icons/ri";
import { BsFilePdfFill } from "react-icons/bs";

const StaffRegistration = () => {
    const [uploading, setUploading] = useState(false);
    const passportInputRef = useRef<HTMLInputElement>(null);
    const resumeInputRef = useRef<HTMLInputElement>(null);
    const [, setOpen] = useSuccessModal();

    const { mutate: submitDetails, isPending } = useCreateStaffSubmission();

    const [, setFileLocations] = useState<StaffUploadProps>({
        passport: "",
        resume: "",
    });
    const [files, setFiles] = useState<StaffFileMap>({
        passport: null,
        resume: null,
    });
    const [previews, setPreviews] = useState<StaffUploadProps>({
        passport: "",
        resume: "",
    });

    const currentUploadPart = useRef<StaffUploadPart | null>(null);

    // Uploadthing hook
    const { startUpload } = useUploadThing("staffDocUploader", {
        onUploadBegin: () => setUploading(true),
        onUploadError: error => {
            toast.error(`Upload error: ${error.message}`);
            setUploading(false);
        },
    });

    // Reset form and images on successful upload
    const resetAllFields = () => {
        form.reset();
        setFileLocations({
            passport: "",
            resume: "",
        });
        setFiles({
            passport: null,
            resume: null,
        });
        setPreviews({
            passport: "",
            resume: "",
        });
    };

    // Handle local file preview
    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        uploadPart: StaffUploadPart
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // ✅ TYPE VALIDATION (mobile-safe)
        if (
            !file.type.startsWith("image/") &&
            file.type !== "application/pdf" &&
            file.type !== "application/octet-stream"
        ) {
            toast.error("Only images or PDF files are allowed");
            e.target.value = ""; // 🔴 required for mobile
            return;
        }

        // ✅ SIZE VALIDATION
        if (file.size > 5 * 1024 * 1024) {
            toast.error("File must be under 5MB");
            e.target.value = ""; // 🔴 required for mobile
            return;
        }

        const url = URL.createObjectURL(file);
        setPreviews(prev => ({
            ...prev,
            [uploadPart]: url,
        }));
        setFiles(prev => ({
            ...prev,
            [uploadPart]: file,
        }));
        e.target.value = "";
    };

    const uploadAllFiles = async () => {
        const selectedFiles = Object.values(files).filter(
            (file): file is File => file !== null
        );

        console.log("Selected files:", selectedFiles);
        if (selectedFiles.length === 0) return {};

        // return {};
        setUploading(true);
        try {
            const res = await startUpload(selectedFiles);

            console.log("Upload res:", res);

            if (!res) {
                toast.error("Upload failed");
                return {};
            }

            const newLocations: Partial<StaffUploadProps> = {};
            res.forEach((r, i) => {
                const key = Object.keys(files)[i] as StaffUploadPart;
                newLocations[key] = r.ufsUrl;
            });

            setFileLocations(prev => ({
                ...prev,
                ...newLocations,
            }));

            toast.success("All files uploaded successfully!");
            return newLocations;
        } finally {
            setUploading(false);
        }
    };

    const formSchema = z.object({
        firstName: z
            .string({
                error: "First Name is required",
            })
            .min(3, "Enter a valid first name"),
        lastName: z
            .string({
                error: "Last Name is required",
            })
            .min(3, "Enter a valid last name"),
        address: z
            .string({
                error: "Address is required",
            })
            .min(3, "Enter a valid address"),
        occupation: z
            .string({
                error: "Occupation is required",
            })
            .min(3, "Enter a valid occupation"),
        dob: z
            .string({
                error: "Date of birth is required",
            })
            .min(3, "Enter a valid date of birth"),
        phoneNumber: z
            .string({
                error: "Phone Number is required",
            })
            .min(3, "Enter a valid phone number"),
        email: z.email({
            error: "Enter a valid email address",
        }),
        gender: z.enum(["MALE", "FEMALE"], {
            error: "Please select a gender",
        }),
        nationality: z
            .string({
                error: "Nationality is required",
            })
            .min(3, "Enter a valid nationality"),
        religion: ReligionEnum,
        position: JobPositionEnum,

        nextOfKinFullName: z
            .string({
                error: "Full Name is required",
            })
            .min(3, "Enter a valid Full Name"),
        nextOfKinAddress: z
            .string({
                error: "Address is required",
            })
            .min(3, "Enter a valid Address"),
        nextOfKinPhoneNumber: z
            .string({
                error: "Phone number is required",
            })
            .min(3, "Enter a valid Phone Number"),
        nextOfKinRelationship: NextOfKinRelationshipEnum,
        accountName: z
            .string({
                error: "Account Name is required",
            })
            .min(3, "Input a valid account name"),
        accountNumber: z
            .string({
                error: "Account Number is required",
            })
            .length(10, {
                error: "Please double check the account number",
            }),
        bank: z
            .string({
                error: "Bank name is required",
            })
            .min(3, "Please input a valid bank name"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            accountName: "",
            accountNumber: "",
            address: "",
            dob: "",
            email: "",
            firstName: "",
            lastName: "",
            nationality: "",
            nextOfKinAddress: "",
            nextOfKinFullName: "",
            nextOfKinPhoneNumber: "",
            bank: "",
            occupation: "",
            phoneNumber: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("Form values:", values);

        const uploaded = await uploadAllFiles();

        console.log("Uploaded values:", uploaded);

        if (!uploaded || !uploaded.passport || !uploaded.resume) {
            return toast.error("Please make sure all files were selected.");
        }

        submitDetails(
            {
                accountDetails: {
                    accountName: values.accountName,
                    accountNumber: values.accountNumber,
                    bank: values.bank,
                },
                nextOfKin: {
                    address: values.nextOfKinAddress,
                    fullName: values.nextOfKinFullName,
                    phoneNumber: values.nextOfKinPhoneNumber,
                    relationship: values.nextOfKinRelationship,
                },
                personal: {
                    address: values.address,
                    dob: new Date(values.dob).getTime(),
                    email: values.email,
                    firstName: values.firstName,
                    gender: values.gender,
                    lastName: values.lastName,
                    nationality: values.nationality,
                    occupation: values.occupation,
                    passportUrl: uploaded.passport,
                    phoneNumber: values.phoneNumber,
                    position: values.position,
                    religion: values.religion,
                    resumeUrl: uploaded.resume,
                },
            },
            {
                onSuccess() {
                    resetAllFields();
                    setOpen(true);
                },
                onError(error) {
                    toast.error(
                        error.message || "Failed to complete submission"
                    );
                },
            }
        );
    };

    // Helper to render upload blocks
    const renderUploadBox = (label: string, uploadPart: StaffUploadPart) => {
        if (uploadPart === "passport") {
            return (
                <div className="mt-4">
                    <p className="font-medium text-sm mb-1">{label}</p>
                    <div className="border border-[#666666] rounded-md flex flex-col items-center justify-center p-5 gap-4 border-dashed">
                        {previews[uploadPart] && previews.passport ? (
                            <div className="relative h-[100px] w-full rounded-md overflow-hidden">
                                <Image
                                    src={previews[uploadPart]}
                                    alt={`${label} Preview`}
                                    fill
                                    className="object-contain rounded-md"
                                />
                            </div>
                        ) : (
                            <ImageIcon className="text-gray-400 size-10" />
                        )}
                        <div
                            className="px-5 py-2 rounded-full border-2 border-gray-500 flex items-center justify-center gap-x-2 transition-all hover:border-primary hover:text-primary cursor-pointer"
                            onClick={() => {
                                currentUploadPart.current = uploadPart;
                                passportInputRef.current?.click();
                            }}
                        >
                            {uploading ? (
                                <LucideLoaderCircle className="animate-spin size-5" />
                            ) : (
                                <CloudUpload className="size-5" />
                            )}
                            <span className="text-sm font-semibold">
                                {previews[uploadPart]
                                    ? "Replace Passport"
                                    : "Upload Passport"}
                            </span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mt-4">
                    <p className="font-medium text-sm mb-1">{label}</p>
                    <div className="border border-[#666666] rounded-md flex flex-col items-center justify-center p-5 gap-4 border-dashed">
                        {previews[uploadPart] ? (
                            <div className="bg-off-white p-2 flex items-center gap-x-3 w-full mb-3 rounded-md px-4">
                                <div>
                                    {uploading ? (
                                        <LucideLoaderCircle className="animate-spin" />
                                    ) : (
                                        <RiAttachment2 className="size-6" />
                                    )}
                                </div>
                                <h3 className="flex-1 text-header-text">
                                    {files[uploadPart]?.name || "File Name.ext"}
                                </h3>
                            </div>
                        ) : (
                            <BsFilePdfFill className="text-gray-400 size-10" />
                        )}
                        <div
                            className="px-5 py-2 rounded-full border-2 border-gray-500 flex items-center justify-center gap-x-2 transition-all hover:border-primary hover:text-primary cursor-pointer"
                            onClick={() => {
                                currentUploadPart.current = uploadPart;
                                resumeInputRef.current?.click();
                            }}
                        >
                            {uploading ? (
                                <LucideLoaderCircle className="animate-spin size-5" />
                            ) : (
                                <CloudUpload className="size-5" />
                            )}
                            <span className="text-sm font-semibold">
                                {previews[uploadPart]
                                    ? "Replace Document"
                                    : "Upload Document"}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="py-5 flex justify-center">
            <div className="w-[95%] lg:w-[80%] border border-border-color rounded-md p-5 my-10">
                <SuccessModal message="Your details has been successfully received. Thank you!." />
                <div>
                    <h2 className="text-header-text mb-5 font-semibold font-clash-display text-center text-2xl my-4">
                        Submit your Employment Details
                    </h2>
                </div>
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div>
                            <h3 className="font-clash-display font-semibold ">
                                Personal Details
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    First Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Phone Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Current Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Date of Birth
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                        type="date"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <CustomSelect
                                                    label="Gender"
                                                    options={GENDER_OPTIONS}
                                                    onChange={value => {
                                                        if (value) {
                                                            form.setValue(
                                                                "gender",
                                                                value.value as GenderTypeEnum,
                                                                {
                                                                    shouldValidate: true,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                    value={field.value}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="nationality"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Nationality
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
                                <FormField
                                    control={form.control}
                                    name="religion"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <CustomSelect
                                                    label="Religion"
                                                    options={RELIGION_OPTIONS}
                                                    onChange={value => {
                                                        if (value) {
                                                            form.setValue(
                                                                "religion",
                                                                value.value as ReligionTypeEnum,
                                                                {
                                                                    shouldValidate: true,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                    value={field.value}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-clash-display font-semibold ">
                                Professional Details
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="occupation"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Occupation
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="position"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <CustomSelect
                                                    label="Position of Employment"
                                                    options={
                                                        JOB_POSITION_OPTIONS
                                                    }
                                                    onChange={value => {
                                                        if (value) {
                                                            form.setValue(
                                                                "position",
                                                                value.value as JobPositionTypeEnum,
                                                                {
                                                                    shouldValidate: true,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                    value={field.value}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                        </div>

                        {/* UPLOADS SECTION */}
                        <div className="my-4">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={passportInputRef}
                                onChange={e => handleFileChange(e, "passport")}
                            />

                            <input
                                type="file"
                                accept="application/pdf,image/*"
                                className="hidden"
                                ref={resumeInputRef}
                                onChange={e => handleFileChange(e, "resume")}
                            />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {renderUploadBox(
                                    "Upload your passport photograph",
                                    "passport"
                                )}

                                {renderUploadBox(
                                    "Upload your resume",
                                    "resume"
                                )}
                            </div>
                        </div>

                        {/* NEXT OF KIN DETAILS */}
                        <div className="my-4">
                            <h3 className="font-clash-display font-semibold ">
                                Next of Kin Details
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                                <FormField
                                    control={form.control}
                                    name="nextOfKinFullName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Next of Kin Full Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="nextOfKinPhoneNumber"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Next of Kin Phone Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="nextOfKinAddress"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Next of Kin Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="nextOfKinRelationship"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <CustomSelect
                                                    label="Relationship"
                                                    options={
                                                        NEXT_OF_KIN_RELATIONSHIP_OPTIONS
                                                    }
                                                    onChange={value => {
                                                        if (value) {
                                                            form.setValue(
                                                                "nextOfKinRelationship",
                                                                value.value as NextOfKinRelationshipTypeEnum,
                                                                {
                                                                    shouldValidate: true,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                    value={field.value}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                        </div>

                        {/* BANK ACCOUNT DETAILS */}
                        <div className="my-6">
                            <h3 className="font-clash-display font-semibold mb-4">
                                Bank Account Details
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
                                <FormField
                                    control={form.control}
                                    name="accountName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Account Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="accountNumber"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Account Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Type here..."
                                                        disabled={isPending}
                                                        type="number"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="bank"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className=" mb-6">
                                                <CustomSelect
                                                    label="Bank"
                                                    options={
                                                        NIGERIAN_BANK_OPTIONS
                                                    }
                                                    onChange={value => {
                                                        if (value) {
                                                            form.setValue(
                                                                "bank",
                                                                value.value,
                                                                {
                                                                    shouldValidate: true,
                                                                }
                                                            );
                                                        }
                                                    }}
                                                    value={field.value}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                        </div>

                        <Button
                            disabled={isPending || uploading}
                            className="w-fit rounded-full mx-auto block"
                        >
                            Submit Details
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default StaffRegistration;
