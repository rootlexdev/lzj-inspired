'use client'

import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Button } from '@/components/ui/button'
import { PartyPopper, Home, LayoutDashboard, Mail } from 'lucide-react'
import Link from 'next/link'

export function SuccessStep() {
    const { data } = useOnboardingStore()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-12 px-6"
        >
            <div className="w-24 h-24 rounded-3xl bg-yellow-100 flex items-center justify-center mb-10 shadow-xl shadow-yellow-500/10">
                <PartyPopper className="w-12 h-12 text-yellow-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Application Received!
            </h1>

            <div className="max-w-lg space-y-6 mb-12">
                <p className="text-gray-600 text-lg">
                    Thank you for choosing <span className="text-yellow-600 font-bold">LZJ ESOLEEN</span>, {data.contactName}. Your application for <span className="text-gray-900 font-bold">{data.restaurantName}</span> has been successfully submitted and auto-approved.
                </p>

                <div className="p-8 rounded-3xl bg-gray-50 border-2 border-gray-100 flex items-start gap-4 text-left">
                    <Mail className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-gray-900 font-bold mb-1">Check your inbox</h3>
                        <p className="text-gray-500 text-sm">We've sent a welcome email to <span className="text-gray-700 font-semibold">{data.contactEmail}</span> with your dedicated registration link.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full h-14 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold">
                        <Home className="mr-2 w-5 h-5" />
                        Back to Home
                    </Button>
                </Link>
                <Link href="/auth" className="flex-1">
                    <Button className="w-full h-14 rounded-xl bg-yellow-600 text-white font-bold hover:bg-yellow-700 shadow-lg shadow-yellow-600/20">
                        <LayoutDashboard className="mr-2 w-5 h-5" />
                        Go to Dashboard
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
