'use client'

import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactStep() {
    const { data, updateData } = useOnboardingStore()

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="space-y-6">
                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Contact Full Name</Label>
                    <Input
                        value={data.contactName || ''}
                        onChange={(e) => updateData({ contactName: e.target.value })}
                        placeholder="John Doe"
                        className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                </div>

                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Your Role</Label>
                    <Input
                        value={data.contactRole || ''}
                        onChange={(e) => updateData({ contactRole: e.target.value })}
                        placeholder="e.g. Owner, Manager, CTO"
                        className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">Work Email</Label>
                        <Input
                            type="email"
                            value={data.contactEmail || ''}
                            onChange={(e) => updateData({ contactEmail: e.target.value })}
                            placeholder="john@example.com"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">Phone Number</Label>
                        <Input
                            value={data.contactPhone || ''}
                            onChange={(e) => updateData({ contactPhone: e.target.value })}
                            placeholder="080 1234 5678"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-100">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <Label className="text-gray-900 text-base font-semibold">Key Decision Maker</Label>
                            <p className="text-gray-500 text-xs text-balance">Are you authorized to approve this integration?</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => updateData({ isDecisionMaker: true })}
                                className={`px-6 py-2 rounded-lg border-2 transition-all font-bold ${data.isDecisionMaker ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'}`}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => updateData({ isDecisionMaker: false })}
                                className={`px-6 py-2 rounded-lg border-2 transition-all font-bold ${data.isDecisionMaker === false ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'}`}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
