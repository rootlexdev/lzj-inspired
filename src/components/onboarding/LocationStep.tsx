'use client'

import { motion } from 'framer-motion'
import { useOnboardingStore, ServiceType } from '@/lib/stores/onboarding-store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, Plus, X } from 'lucide-react'
import { useState } from 'react'

export function LocationStep() {
    const { data, updateData } = useOnboardingStore()
    const [newArea, setNewArea] = useState('')

    const addArea = () => {
        if (!newArea.trim()) return
        const areas = data.deliveryAreas || []
        if (!areas.includes(newArea.trim())) {
            updateData({ deliveryAreas: [...areas, newArea.trim()] })
        }
        setNewArea('')
    }

    const removeArea = (area: string) => {
        updateData({ deliveryAreas: (data.deliveryAreas || []).filter(a => a !== area) })
    }

    const toggleService = (type: ServiceType) => {
        const services = data.serviceTypes || []
        if (services.includes(type)) {
            updateData({ serviceTypes: services.filter(s => s !== type) })
        } else {
            updateData({ serviceTypes: [...services, type] })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="space-y-6">
                <div>
                    <Label className="text-gray-900 text-lg font-medium mb-2 block">Primary Business Address</Label>
                    <div className="relative">
                        <Input
                            value={data.businessAddress || ''}
                            onChange={(e) => updateData({ businessAddress: e.target.value })}
                            placeholder="Plot 123, Admiralty Way, Lekki Phase 1"
                            className="h-14 pl-12 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">City / LG</Label>
                        <Input
                            value={data.city || ''}
                            onChange={(e) => updateData({ city: e.target.value })}
                            placeholder="e.g. Warri, Ikeja"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">State</Label>
                        <Input
                            value={data.state || ''}
                            onChange={(e) => updateData({ state: e.target.value })}
                            placeholder="e.g. Delta, Lagos"
                            className="h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <Label className="text-gray-900 text-lg font-medium mb-4 block">Services Offered</Label>
                    <div className="flex flex-wrap gap-4">
                        {['DINE_IN', 'TAKEAWAY', 'DELIVERY'].map((s) => (
                            <button
                                key={s}
                                onClick={() => toggleService(s as ServiceType)}
                                className={`px-8 py-3 rounded-xl border-2 transition-all font-bold ${data.serviceTypes?.includes(s as ServiceType) ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'}`}
                            >
                                {s.replace('_', ' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {data.serviceTypes?.includes('DELIVERY') && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4 pt-6 border-t-2 border-gray-100"
                    >
                        <Label className="text-gray-900 text-lg font-medium mb-2 block">Delivery Areas Covered</Label>
                        <div className="flex gap-2">
                            <Input
                                value={newArea}
                                onChange={(e) => setNewArea(e.target.value)}
                                placeholder="Add area (e.g. Lekki Phase 1)..."
                                onKeyPress={(e) => e.key === 'Enter' && addArea()}
                                className="h-14 bg-white border-2 border-gray-200 text-gray-900"
                            />
                            <button
                                onClick={addArea}
                                className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center text-white hover:bg-yellow-700 transition-colors shadow-md"
                            >
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {data.deliveryAreas?.map((area, i) => (
                                <div key={i} className="px-4 py-2 rounded-lg bg-yellow-50 border-2 border-yellow-200 text-yellow-700 text-sm font-bold flex items-center gap-2">
                                    {area}
                                    <button onClick={() => removeArea(area)} className="hover:text-yellow-900">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {(!data.deliveryAreas || data.deliveryAreas.length === 0) && (
                                <p className="text-gray-400 text-sm italic">Add areas where you offer delivery services.</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}
