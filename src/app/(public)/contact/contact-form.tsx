"use client";
import { Button } from "@/components/ui/button";
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
import { useSendMessage } from "@/lib/features/public/use-send-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import z from "zod";

const formSchema = z.object({
    name: z
        .string({
            message: "Name is required",
        })
        .min(3, "Please enter your full name"),
    phone: z
        .string({
            message: "Phone number is required",
        })
        .min(10, "Please enter a valid phone number"),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    message: z
        .string({
            message: "Message is required",
        })
        .min(20, "Please provide more details (at least 20 characters)")
        .max(500, "Message is too long (max 500 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const { isPending, mutate } = useSendMessage();

    const onSubmit = (values: FormValues) => {
        mutate(
            {
                email: values.email,
                message: values.message,
                name: values.name,
                phone: values.phone,
            },
            {
                onSuccess() {
                    toast.success(
                        "Message sent successfully! We'll get back to you soon.",
                    );
                    form.reset();
                },
                onError(error) {
                    toast.error(
                        error.message ||
                            "Failed to send message. Please try again.",
                    );
                },
            },
        );
    };

    return (
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100">
            {/* Form Header */}
            <div className="text-center mb-8">
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                        background:
                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                    }}
                >
                    <svg
                        className="w-7 h-7 text-[#0B0D13]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0B0D13] mb-2">
                    Send Us a Message
                </h2>
                <p className="text-[#64748B] text-sm">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                </p>
            </div>

            {/* Form */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#0B0D13] font-medium">
                                        Full Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="John Doe"
                                            disabled={isPending}
                                            className="bg-[#F8F8F8] border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20 rounded-[0.625rem] py-5"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#0B0D13] font-medium">
                                        Email Address
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="john@company.com"
                                            disabled={isPending}
                                            className="bg-[#F8F8F8] border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20 rounded-[0.625rem] py-5"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Phone */}
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#0B0D13] font-medium">
                                    Phone Number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="tel"
                                        placeholder="+234 xxx xxx xxxx"
                                        disabled={isPending}
                                        className="bg-[#F8F8F8] border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20 rounded-[0.625rem] py-5"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#0B0D13] font-medium">
                                    Your Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Tell us about your inquiry, questions, or how we can help you..."
                                        disabled={isPending}
                                        className="bg-[#F8F8F8] border-gray-200 focus:border-[#F7C74B] focus:ring-[#F7C74B]/20 rounded-[0.625rem] min-h-[140px] resize-none"
                                    />
                                </FormControl>
                                <div className="flex justify-between items-center mt-1">
                                    <FormMessage />
                                    <span className="text-xs text-[#64748B]">
                                        {field.value?.length || 0}/500
                                    </span>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-6 text-base font-semibold rounded-[0.625rem]"
                        style={{
                            background:
                                "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                        }}
                    >
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Send Message
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>
                        )}
                    </Button>

                    {/* Privacy Note */}
                    <p className="text-center text-[#64748B] text-xs pt-2">
                        By submitting, you agree to our{" "}
                        <Link
                            href="/privacy-policy"
                            className="text-[#F7C74B] hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        . We&apos;ll never share your information.
                    </p>
                </form>
            </Form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <span className="text-[#64748B]">
                        Prefer other methods?
                    </span>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:info@lzjesoleen.com"
                            className="text-[#0B0D13] font-medium hover:text-[#F7C74B] transition-colors flex items-center gap-1"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Email
                        </a>
                        <span className="text-gray-300">|</span>
                        <a
                            href="tel:+2347012417471"
                            className="text-[#0B0D13] font-medium hover:text-[#F7C74B] transition-colors flex items-center gap-1"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            Call
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
