'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'

export function WelcomeStep() {
    const features = [
        "All-in-one Restaurant Management",
        "Digital Menu & Ordering System",
        "Direct Support & Expert Training",
        "Seamless Payment Integrations"
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center text-center max-w-xl mx-auto py-8"
        >
            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-8">
                <Sparkles className="w-8 h-8 text-yellow-600" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-yellow-600">LZJ ESOLEEN</span>
            </h1>

            <p className="text-gray-600 text-lg mb-10">
                Let's get your restaurant set up with Nigeria's most powerful restaurant management system. This will only take 5-10 minutes.
            </p>

            <div className="grid grid-cols-1 gap-3 w-full">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border-2 border-gray-100 text-left">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-gray-700 font-medium">{f}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
