import { create } from "zustand";

interface LoaderState {
    isLoaded: boolean;
    hasShownPreloader: boolean;
    setLoaded: () => void;
    setPreloaderShown: () => void;
    shouldShowPreloader: () => boolean;
}

const useLoaderStore = create<LoaderState>((set, get) => ({
    isLoaded: false,
    hasShownPreloader: false,

    setLoaded: () => set({ isLoaded: true }),

    setPreloaderShown: () => set({ hasShownPreloader: true }),

    shouldShowPreloader: () => {
        const state = get();
        // Only show if we haven't shown it yet in this session
        return !state.hasShownPreloader;
    },
}));

export default useLoaderStore;
