"use client";

import { motion } from "framer-motion";
import {
    useOnboardingStore,
    PaymentMethod,
} from "@/lib/stores/onboarding-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomSelect from "@/components/ui/custom-select-basic";
import { Check, Settings, Users, CreditCard, Truck } from "lucide-react";

// Define a union type for the specific feature fields
type FeatureField =
    | "wantsMultiBranch"
    | "wantsStaffManagement"
    | "wantsCustomerLoyalty";

interface FeaturesProps {
    label: string;
    field: FeatureField;
}

export function OperationsStep() {
    const { data, updateData } = useOnboardingStore();

    const paymentOptions: { label: string; value: PaymentMethod }[] = [
        { label: "Cash", value: "CASH" },
        { label: "POS Terminal", value: "POS" },
        { label: "Bank Transfer", value: "TRANSFER" },
        { label: "Mobile Money", value: "MOBILE" },
    ];

    const deliveryOptions = [
        { label: "In-House Riders", value: "IN_HOUSE" },
        { label: "Third-Party Services", value: "THIRD_PARTY" },
        { label: "No Delivery", value: "NONE" },
    ];

    const togglePayment = (val: PaymentMethod) => {
        const current = data.currentPaymentMethods || [];
        if (current.includes(val)) {
            updateData({
                currentPaymentMethods: current.filter(p => p !== val),
            });
        } else {
            updateData({ currentPaymentMethods: [...current, val] });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                                <Users className="w-5 h-5 text-yellow-600" />
                            </div>
                            <Label className="text-gray-900 text-xl font-bold">
                                Staffing
                            </Label>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Label className="text-gray-900 text-sm font-semibold mb-2 block">
                                    Estimated Total Staff Count
                                </Label>
                                <Input
                                    type="number"
                                    value={data.staffCount || ""}
                                    onChange={e =>
                                        updateData({
                                            staffCount: parseInt(
                                                e.target.value,
                                            ),
                                        })
                                    }
                                    className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500"
                                    placeholder="e.g. 15"
                                />
                            </div>
                            <div>
                                <Label className="text-gray-900 text-sm font-semibold mb-2 block">
                                    Staff Accounts Needed (Admin/Waiters)
                                </Label>
                                <Input
                                    type="number"
                                    value={data.staffAccountsNeeded || ""}
                                    onChange={e =>
                                        updateData({
                                            staffAccountsNeeded: parseInt(
                                                e.target.value,
                                            ),
                                        })
                                    }
                                    className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500"
                                    placeholder="e.g. 5"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                                <Truck className="w-5 h-5 text-yellow-600" />
                            </div>
                            <Label className="text-gray-900 text-xl font-bold">
                                Logistics
                            </Label>
                        </div>
                        <CustomSelect
                            options={deliveryOptions}
                            value={data.deliveryMethod}
                            onChange={val =>
                                updateData({ deliveryMethod: val?.value })
                            }
                            label="Delivery Method"
                            className="light-select"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-yellow-600" />
                            </div>
                            <Label className="text-gray-900 text-xl font-bold">
                                Payments
                            </Label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {paymentOptions.map(opt => {
                                const active =
                                    data.currentPaymentMethods?.includes(
                                        opt.value,
                                    );
                                return (
                                    <button
                                        key={opt.value}
                                        onClick={() => togglePayment(opt.value)}
                                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all font-bold ${active ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"}`}
                                    >
                                        <div
                                            className={`w-5 h-5 rounded flex items-center justify-center transition-all ${active ? "bg-yellow-600 border-yellow-600" : "border-gray-200 border-2"}`}
                                        >
                                            {active && (
                                                <Check className="w-3 h-3 text-white font-black" />
                                            )}
                                        </div>
                                        <span className="text-xs">
                                            {opt.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                                <Settings className="w-5 h-5 text-yellow-600" />
                            </div>
                            <Label className="text-gray-900 text-xl font-bold">
                                Premium Features
                            </Label>
                        </div>
                        <div className="space-y-3">
                            {(
                                [
                                    {
                                        label: "Multi-Branch Management",
                                        field: "wantsMultiBranch",
                                    },
                                    {
                                        label: "Staff Performance Tracking",
                                        field: "wantsStaffManagement",
                                    },
                                    {
                                        label: "Customer Loyalty & Rewards",
                                        field: "wantsCustomerLoyalty",
                                    },
                                ] as const satisfies readonly FeaturesProps[]
                            ).map((feat: FeaturesProps) => {
                                const active = !!data[feat.field];
                                return (
                                    <button
                                        key={feat.field}
                                        onClick={() =>
                                            updateData({
                                                [feat.field]: !active,
                                            })
                                        }
                                        className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all font-bold ${active ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"}`}
                                    >
                                        <span className="text-xs">
                                            {feat.label}
                                        </span>
                                        <div
                                            className={`w-10 h-5 rounded-full relative transition-colors ${active ? "bg-yellow-600" : "bg-gray-200"}`}
                                        >
                                            <div
                                                className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${active ? "right-1" : "left-1"}`}
                                            />
                                        </div>
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
