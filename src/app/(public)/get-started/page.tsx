"use client";
import SuccessModal from "@/components/modals/success-modal";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/ui/custom-select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitProjectRequest } from "@/lib/features/public/use-submit-project-request";
import { useSuccessModal } from "@/lib/stores/modals";
import {
    BudgetRangeTypeEnum,
    CompanySizeTypeEnum,
    IndustryTypeEnum,
    ProjectTypeEnum as ProjectType,
} from "@/utils/enums";
import {
    BUDGET_RANGE_OPTIONS,
    COMPANY_SIZE_OPTIONS,
    INDUSTRY_OPTIONS,
    PROJECT_TYPE_OPTIONS,
} from "@/utils/options";
import {
    BudgetEnum,
    CompanySizeEnum,
    IndustryEnum,
    ProjectTypeEnum,
} from "@/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const GetStartedPage = () => {
    const [, setOpen] = useSuccessModal();

    const { mutate: submit, isPending } = useSubmitProjectRequest();

    const formSchema = z.object({
        fullName: z.string({
            error: "Full name is required",
        }),
        email: z.email({
            error: "Email is required",
        }),
        projectType: ProjectTypeEnum,
        companyName: z.string({ error: "Company name is required" }),
        industry: IndustryEnum,
        projectBrief: z
            .string({
                error: "Please enter a project brief",
            })
            .min(40, "Give a few more details"),
        companySize: CompanySizeEnum,
        budget: BudgetEnum,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            companyName: "",
            projectBrief: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form values:", values);

        submit(
            {
                budget: values.budget,
                companyName: values.companyName,
                companySize: values.companySize,
                email: values.email,
                fullName: values.fullName,
                industry: values.industry,
                projectBrief: values.projectBrief,
                projectType: values.projectType,
            },
            {
                onSuccess() {
                    setOpen(true);
                    form.reset();
                    toast.success(
                        "Submitted successfully., Our team will get back to you soon."
                    );
                },
                onError(error) {
                    toast.error(error.message || "Failed to submit data");
                },
            }
        );
    };

    return (
        <div className="bg-primary-gold min-h-screen p-6 py-20 md:p-20">
            <SuccessModal message="Your details has been successfully received. Thank you!." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <div className="py-5 mb-10">
                        <h3 className="font-clash-display text-2xl font-semibold mb-6">
                            Get Started
                        </h3>

                        <h1 className="font-clash-display text-5xl font-extrabold">
                            Build a Smarter Way to Work
                        </h1>
                    </div>

                    <p>
                        From automating manual workflows to unlocking hidden
                        insights in your data, we build the tools that keep your
                        business ahead. Whether you need a robust inventory
                        system or a custom AI-driven dashboard, tell us about
                        the operational challenges you’re facing. Let’s design a
                        solution that scales with your ambition.
                    </p>
                </div>
                <div className="bg-white rounded-md p-4 py-10">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormLabel>Full Name</FormLabel>
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
                                    name="email"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormLabel>
                                                    Work Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="johndoe@abc.com..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
                                <FormField
                                    control={form.control}
                                    name="projectType"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <CustomSelect
                                                        label="Project Type"
                                                        options={
                                                            PROJECT_TYPE_OPTIONS
                                                        }
                                                        onChange={value => {
                                                            if (value) {
                                                                form.setValue(
                                                                    "projectType",
                                                                    value.value as ProjectType,
                                                                    {
                                                                        shouldValidate: true,
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                        value={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormLabel>
                                                    Company Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="johndoe@abc.com..."
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
                                <FormField
                                    control={form.control}
                                    name="companySize"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <CustomSelect
                                                        label="Company Size"
                                                        options={
                                                            COMPANY_SIZE_OPTIONS
                                                        }
                                                        onChange={value => {
                                                            if (value) {
                                                                form.setValue(
                                                                    "companySize",
                                                                    value.value as CompanySizeTypeEnum,
                                                                    {
                                                                        shouldValidate: true,
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                        value={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="industry"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <CustomSelect
                                                        label="Industry"
                                                        options={
                                                            INDUSTRY_OPTIONS
                                                        }
                                                        onChange={value => {
                                                            if (value) {
                                                                form.setValue(
                                                                    "industry",
                                                                    value.value as IndustryTypeEnum,
                                                                    {
                                                                        shouldValidate: true,
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                        value={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormControl>
                                                    <CustomSelect
                                                        label="Budget"
                                                        options={
                                                            BUDGET_RANGE_OPTIONS
                                                        }
                                                        onChange={value => {
                                                            if (value) {
                                                                form.setValue(
                                                                    "budget",
                                                                    value.value as BudgetRangeTypeEnum,
                                                                    {
                                                                        shouldValidate: true,
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                        value={field.value}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="projectBrief"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormLabel>
                                                    Project description
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Just a brief description"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div>

                            <Button className="w-full">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;
