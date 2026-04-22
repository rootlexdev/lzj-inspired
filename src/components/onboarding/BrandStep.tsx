'use client'

import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Globe } from 'lucide-react'

export function BrandStep() {
    const { data, updateData } = useOnboardingStore()

    const colorPresets = [
        { name: 'Luxury Gold', primary: '#D4AF37', secondary: '#1A1A2E' },
        { name: 'Modern Crimson', primary: '#DC2626', secondary: '#0F172A' },
        { name: 'Emerald Bistro', primary: '#059669', secondary: '#064E3B' },
        { name: 'Midnight Charcoal', primary: '#374151', secondary: '#111827' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="space-y-6">
                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-4 block">Visual Identity</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {colorPresets.map((preset, i) => (
                            <button
                                key={i}
                                onClick={() => updateData({ primaryColor: preset.primary, secondaryColor: preset.secondary })}
                                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${data.primaryColor === preset.primary ? 'bg-yellow-50 border-yellow-500' : 'bg-white border-gray-200 hover:border-gray-300'}`}
                            >
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: preset.primary }} />
                                    <div className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: preset.secondary }} />
                                </div>
                                <span className={`font-semibold ${data.primaryColor === preset.primary ? 'text-yellow-700' : 'text-gray-500'}`}>{preset.name}</span>
                                {data.primaryColor === preset.primary && <Check className="ml-auto w-4 h-4 text-yellow-600" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Brand Logo URL (Optional)</Label>
                    <Input
                        value={data.logoUrl || ''}
                        onChange={(e) => updateData({ logoUrl: e.target.value })}
                        placeholder="https://yourwebsite.com/logo.png"
                        className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                    <p className="text-gray-500 text-xs mt-2 italic font-medium">You can also upload this later in your dashboard.</p>
                </div>

                <div className="pt-4">
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Choose Your App Subdomain</Label>
                    <div className="relative">
                        <Input
                            value={data.preferredSubdomain || ''}
                            onChange={(e) => updateData({ preferredSubdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                            placeholder="your-restaurant-name"
                            className="h-14 pl-12 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 font-bold tracking-tight"
                        />
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                            .lzjesoleen.com
                        </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-2 font-medium">This will be your permanent access link.</p>
                </div>

                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Existing Website (Optional)</Label>
                    <Input
                        value={data.existingWebsite || ''}
                        onChange={(e) => updateData({ existingWebsite: e.target.value })}
                        placeholder="https://www.yourstore.com"
                        className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                </div>
            </div>
        </motion.div>
    )
}
