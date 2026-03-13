import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MousePointer2, Layout, Map, Layers } from "lucide-react";

interface FloorPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FloorPlanModal: React.FC<FloorPlanModalProps> = ({ isOpen, onClose }) => {
    const features = [
        {
            icon: <MousePointer2 className="text-[#EDC675]" />,
            title: "Drag & Drop Interface",
            desc: "Move tables, booths, and bars in real-time. Designing your restaurant layout is as easy as moving icons on a screen.",
        },
        {
            icon: <Layout className="text-[#EDC675]" />,
            title: "Coordinate-Based Mapping",
            desc: "Precision matters. Tables are mapped to exact X/Y coordinates, ensuring your digital view perfectly matches your physical space.",
        },
        {
            icon: <Layers className="text-[#EDC675]" />,
            title: "Multi-Zone Management",
            desc: "Easily switch between the Dining Room, Patio, and Bar. Manage different floor levels or outdoor seating areas from one spot.",
        },
        {
            icon: <Map className="text-[#EDC675]" />,
            title: "Live Status Sync",
            desc: "Colors change based on table status—occupied, reserved, or dirty—giving your staff instant situational awareness.",
        },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0B0D13]/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#161922] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-linear-to-r from-[#EDC675]/5 to-transparent">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Floor Plan Mapping
                                </h3>
                                <p className="text-[#64748B] text-sm">
                                    Design and manage your seating efficiency.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full text-[#64748B] transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Features Grid */}
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#EDC675]/10 flex items-center justify-center border border-[#EDC675]/20">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-white font-medium mb-1">
                                            {f.title}
                                        </h5>
                                        <p className="text-[#64748B] text-xs leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer / CTA */}
                        <div className="p-6 bg-[#0B0D13]/50 border-t border-white/5 text-right">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-xl bg-linear-to-r from-[#F3F1CF] to-[#EDC675] text-[#0B0D13] font-bold hover:shadow-[0_0_20px_rgba(237,198,117,0.3)] transition-all cursor-pointer"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloorPlanModal;
