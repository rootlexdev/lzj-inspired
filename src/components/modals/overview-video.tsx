import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, XIcon } from "lucide-react";

interface OverviewVideoProps {
    onClose: () => void;
    isOpen: boolean;
}

const OverviewVideo: React.FC<OverviewVideoProps> = ({ onClose, isOpen }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center"
                    onClick={onClose} // Closes when clicking the darkened area
                >
                    <motion.div
                        onClick={e => e.stopPropagation()} // Prevents closing when clicking inside the video container
                        className="bg-white rounded-lg overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                        }}
                    >
                        {/* Close Button - Moved for better visibility */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors cursor-pointer"
                        >
                            <XIcon size={24} />
                        </button>

                        <div className="relative aspect-video w-full flex items-center justify-center">
                            {/* 1. Show this while isLoading is true */}
                            {isLoading && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900">
                                    <Loader2 className="w-10 h-10 text-white animate-spin" />
                                </div>
                            )}
                            <video
                                controls
                                autoPlay
                                className="w-full h-full"
                                onCanPlay={() => setIsLoading(false)} // 2. Turn off loading when video is ready
                            >
                                <source
                                    src="/assets/videos/overview-video.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OverviewVideo;
