import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function extractApiError(err: unknown) {
    if (axios.isAxiosError(err)) {
        return err.response?.data ?? { message: err.message };
    }

    if (err instanceof Error) {
        return { message: err.message };
    }

    return { message: "An unknown error occurred" };
}

interface UseApiGetOptions<T> {
    enabled?: boolean;
    onSuccess?: (data: T) => void;
    onError?: (err: unknown) => void;
}

export function useApiGet<T>(
    fetcher: () => Promise<T>,
    options: UseApiGetOptions<T> = {}
) {
    const { enabled = true, onSuccess, onError } = options;

    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const fetchData = useCallback(async () => {
        try {
            setStatus("loading");
            const result = await fetcher();
            setData(result);
            setStatus("success");
            onSuccess?.(result);
            return result;
        } catch (err) {
            const normalized = extractApiError(err);
            setError(normalized);
            setStatus("error");
            onError?.(normalized);
            return undefined;
        }
    }, [fetcher, onSuccess, onError]);

    // Auto-run on mount
    useEffect(() => {
        if (enabled) {
            fetchData();
        }
    }, [enabled, fetchData]);

    return {
        data,
        error,
        refetch: fetchData,
        isLoading: status === "loading",
        isError: status === "error",
        status,
    };
}
