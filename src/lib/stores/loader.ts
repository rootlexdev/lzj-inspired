import { create } from "zustand";

interface LoaderProps {
    isLoaded: boolean;
    setLoaded: () => void;
}

const useLoaderStore = create<LoaderProps>(set => ({
    isLoaded: false,
    setLoaded: () => set({ isLoaded: true }),
}));

export default useLoaderStore;
