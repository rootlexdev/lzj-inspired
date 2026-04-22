"use client";

import { motion } from "framer-motion";
import { useOnboardingStore } from "@/lib/stores/onboarding-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomSelectBasic from "@/components/ui/custom-select-basic";

const BUSINESS_TYPES = [
    { label: "Restaurant", value: "RESTAURANT" },
    { label: "Fast Food", value: "FAST_FOOD" },
    { label: "Cafe", value: "CAFE" },
    { label: "Bakery", value: "BAKERY" },
    { label: "Hotel", value: "HOTEL" },
    { label: "Other", value: "OTHER" },

    // Food & Beverage
    { label: "Bar Lounge", value: "BAR_LOUNGE" },
    { label: "Food Truck", value: "FOOD_TRUCK" },
    { label: "Catering", value: "CATERING" },

    // Beauty & Wellness
    { label: "Spa", value: "SPA" },
    { label: "Salon", value: "SALON" },
    { label: "Barber Shop", value: "BARBER_SHOP" },
    { label: "Nail Studio", value: "NAIL_STUDIO" },
    { label: "Massage Center", value: "MASSAGE_CENTER" },

    // Health & Fitness
    { label: "Gym", value: "GYM" },
    { label: "Fitness Studio", value: "FITNESS_STUDIO" },
    { label: "Yoga Studio", value: "YOGA_STUDIO" },
    { label: "Clinic", value: "CLINIC" },
    { label: "Dental Clinic", value: "DENTAL_CLINIC" },

    // Hospitality
    { label: "Guest House", value: "GUEST_HOUSE" },
    { label: "Resort", value: "RESORT" },

    // Retail & Services
    { label: "Retail Store", value: "RETAIL_STORE" },
    { label: "Supermarket", value: "SUPERMARKET" },
    { label: "Pharmacy", value: "PHARMACY" },
    { label: "Laundry", value: "LAUNDRY" },
    { label: "Car Wash", value: "CAR_WASH" },

    // Professional
    { label: "Co Working", value: "CO_WORKING" },
    { label: "Event Center", value: "EVENT_CENTER" },
];

const BRANCH_TYPES = [
    { label: "Single Location", value: "SINGLE_LOCATION" },
    { label: "Multiple Branches", value: "MULTI_BRANCH" },
    { label: "Franchise", value: "FRANCHISE" },
];

export function BusinessIdentityStep() {
    const { data, updateData } = useOnboardingStore();

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="space-y-6">
                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">
                        Restaurant / Business Name
                    </Label>
                    <Input
                        value={data.restaurantName || ""}
                        onChange={e =>
                            updateData({ restaurantName: e.target.value })
                        }
                        placeholder="e.g. The Golden Spoon"
                        className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Business Type
                        </Label>
                        <CustomSelectBasic
                            options={BUSINESS_TYPES}
                            value={data.businessType}
                            onChange={val =>
                                updateData({ businessType: val?.value })
                            }
                            className="light-select"
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Scale
                        </Label>
                        <CustomSelectBasic
                            options={BRANCH_TYPES}
                            value={data.branchType}
                            onChange={val =>
                                updateData({ branchType: val?.value })
                            }
                            className="light-select"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            Year Established
                        </Label>
                        <Input
                            type="number"
                            value={data.yearEstablished || ""}
                            onChange={e =>
                                updateData({
                                    yearEstablished: parseInt(e.target.value),
                                })
                            }
                            placeholder="e.g. 2020"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            CAC Registration
                        </Label>
                        <div className="flex gap-4 h-14 items-center">
                            <button
                                onClick={() =>
                                    updateData({ cacRegistered: true })
                                }
                                className={`flex-1 h-full rounded-xl border-2 transition-all font-semibold ${data.cacRegistered ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"}`}
                            >
                                Registered
                            </button>
                            <button
                                onClick={() =>
                                    updateData({ cacRegistered: false })
                                }
                                className={`flex-1 h-full rounded-xl border-2 transition-all font-semibold ${data.cacRegistered === false ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"}`}
                            >
                                Not Yet
                            </button>
                        </div>
                    </div>
                </div>

                {data.cacRegistered && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-2"
                    >
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">
                            CAC Registration Number
                        </Label>
                        <Input
                            value={data.cacRegistrationNumber || ""}
                            onChange={e =>
                                updateData({
                                    cacRegistrationNumber: e.target.value,
                                })
                            }
                            placeholder="RC-1234567"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
