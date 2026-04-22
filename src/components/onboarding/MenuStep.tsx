"use client";

import { motion } from "framer-motion";
import {
    useOnboardingStore,
    OrderChannel,
    MenuFormat,
} from "@/lib/stores/onboarding-store";
import { Label } from "@/components/ui/label";
import {
    FileText,
    Image as ImageIcon,
    FileSpreadsheet,
    HardDrive,
    LayoutGrid,
    Check,
    LucideIcon,
} from "lucide-react";

export function MenuStep() {
    const { data, updateData } = useOnboardingStore();

    const menuOptions: {
        label: string;
        value: MenuFormat;
        icon: LucideIcon;
    }[] = [
        { label: "Paper Menu", value: "PAPER", icon: FileText },
        { label: "PDF / Image", value: "PDF", icon: ImageIcon },
        { label: "Excel / Sheets", value: "EXCEL", icon: FileSpreadsheet },
        { label: "POS System", value: "POS", icon: HardDrive },
        { label: "Both / Mixed", value: "BOTH", icon: LayoutGrid },
    ];

    const channelOptions: { label: string; value: OrderChannel }[] = [
        { label: "POS / Counter", value: "POS" },
        { label: "Direct Website", value: "WEBSITE" },
        { label: "WhatsApp", value: "WHATSAPP" },
        { label: "Social Media", value: "SOCIAL" },
        { label: "Phone Call", value: "PHONE" },
    ];

    const toggleChannel = (val: OrderChannel) => {
        const current = data.orderChannels || [];
        if (current.includes(val)) {
            updateData({ orderChannels: current.filter(c => c !== val) });
        } else {
            updateData({ orderChannels: [...current, val] });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
        >
            <div className="space-y-6">
                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-6 block">
                        How is your menu currently managed?
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {menuOptions.map(opt => {
                            const Icon = opt.icon;
                            const active = data.menuFormat === opt.value;
                            return (
                                <button
                                    key={opt.value}
                                    onClick={() =>
                                        updateData({ menuFormat: opt.value })
                                    }
                                    className={`flex flex-col items-center gap-4 p-6 rounded-2xl border-2 transition-all font-bold ${active ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200 shadow-sm"}`}
                                >
                                    <Icon
                                        className={`w-8 h-8 ${active ? "text-yellow-600" : "text-gray-300"}`}
                                    />
                                    <span className="text-xs">{opt.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="pt-6">
                    <Label className="text-gray-900 text-lg font-medium mb-6 block">
                        Current Sales Channels
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {channelOptions.map(opt => {
                            const active = data.orderChannels?.includes(
                                opt.value,
                            );
                            return (
                                <button
                                    key={opt.value}
                                    onClick={() => toggleChannel(opt.value)}
                                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all font-bold ${active ? "bg-yellow-50 border-yellow-500 text-yellow-700" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200 shadow-sm"}`}
                                >
                                    <div
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${active ? "bg-yellow-600 border-yellow-600" : "border-gray-300"}`}
                                    >
                                        {active && (
                                            <Check className="w-3 h-3 text-white font-bold" />
                                        )}
                                    </div>
                                    <span className="text-sm">{opt.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="pt-6 bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 flex items-center justify-between gap-6">
                    <div className="space-y-1">
                        <Label className="text-gray-900 text-lg block font-bold">
                            Accepts Reservations?
                        </Label>
                        <p className="text-gray-500 text-xs">
                            Do you need clients to book tables in advance?
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() =>
                                updateData({ acceptsReservations: true })
                            }
                            className={`px-8 py-3 rounded-xl border-2 transition-all font-bold ${data.acceptsReservations ? "bg-yellow-600 border-yellow-600 text-white" : "bg-white border-gray-200 text-gray-400 hover:border-gray-300"}`}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() =>
                                updateData({ acceptsReservations: false })
                            }
                            className={`px-8 py-3 rounded-xl border-2 transition-all font-bold ${data.acceptsReservations === false ? "bg-yellow-600 border-yellow-600 text-white" : "bg-white border-gray-200 text-gray-400 hover:border-gray-300"}`}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
