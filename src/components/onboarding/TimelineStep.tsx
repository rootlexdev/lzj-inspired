"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/stores/onboarding-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/ui/custom-select-basic";
import { Calendar, ShieldCheck, Check } from "lucide-react";

type UrgencyLevel =
    | "asap"
    | "within_week"
    | "within_month"
    | "flexible"
    | "1-2-weeks"
    | "1-month"
    | "not-sure";
export function TimelineStep() {
    const { data, updateData } = useOnboardingStore();

    const urgencyOptions = [
        { label: "ASAP (Immediate)", value: "asap" },
        { label: "1-2 Weeks", value: "within_week" },
        { label: "1 Month", value: "within_month" },
        { label: "Just Exploring", value: "flexible" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Desired Launch Date
                        </Label>
                        <div className="relative">
                            <Input
                                type="date"
                                value={data.desiredGoLive || ""}
                                onChange={e =>
                                    updateData({
                                        desiredGoLive: e.target.value,
                                    })
                                }
                                className="h-14 pl-12 bg-white border-2 border-gray-200 text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                            />
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Urgency Level
                        </Label>
                        <CustomSelect
                            options={urgencyOptions}
                            value={data.urgencyLevel}
                            onChange={val =>
                                updateData({
                                    urgencyLevel: val?.value as UrgencyLevel,
                                })
                            }
                            label="Select Urgency"
                            className="light-select"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Referral Code (Optional)
                        </Label>
                        <Input
                            value={data.referralCode || ""}
                            onChange={e =>
                                updateData({ referralCode: e.target.value })
                            }
                            placeholder="e.g. PARTNER-123"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 font-bold"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Special Requirements or Notes
                        </Label>
                        <Textarea
                            value={data.notes || ""}
                            onChange={e =>
                                updateData({ notes: e.target.value })
                            }
                            placeholder="Any specific requests or features you need?"
                            className="bg-white border-2 border-gray-200 text-gray-900 min-h-[220px] resize-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 p-4"
                        />
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border-2 border-gray-100 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="space-y-3 flex-1">
                        <Label className="text-gray-900 text-xl font-bold block mb-4">
                            Final Confirmation
                        </Label>
                        <div className="space-y-4">
                            {[
                                {
                                    label: "I accept the Terms of Service and Privacy Policy.",
                                    field: "termsAccepted",
                                },
                                {
                                    label: "I consent to the processing of my business data.",
                                    field: "consentDataProcessing",
                                },
                                {
                                    label: "I confirm that all provided information is accurate.",
                                    field: "consentInfoAccurate",
                                },
                            ].map(item => {
                                const active =
                                    !!data[item.field as keyof typeof data];
                                return (
                                    <button
                                        key={item.field}
                                        onClick={() =>
                                            updateData({
                                                [item.field]: !active,
                                            })
                                        }
                                        className="flex items-center gap-4 text-left group"
                                    >
                                        <div
                                            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${active ? "bg-yellow-600 border-yellow-600" : "bg-white border-gray-200 group-hover:border-yellow-400"}`}
                                        >
                                            {active && (
                                                <Check className="w-4 h-4 text-white font-black" />
                                            )}
                                        </div>
                                        <span
                                            className={`text-sm font-semibold transition-colors ${active ? "text-gray-900" : "text-gray-500"}`}
                                        >
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
