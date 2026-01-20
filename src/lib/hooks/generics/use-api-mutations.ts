import { useState, useMemo, useCallback } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ApiError, extractApiError } from "@/utils/api-helpers";

export type MutationOptions<TResponse> = {
    onSuccess?: (data: TResponse) => void;
    onError?: (error: ApiError) => void;
    onSettled?: () => void;
    throwError?: boolean;
};

export function useApiMutation<RequestType, ResponseType>(
    apiFn: (data: RequestType) => Promise<ResponseType>,
) {
    const [status, setStatus] = useState<
        "pending" | "success" | "error" | "settled" | null
    >(null);

    const [error, setError] = useState<unknown>(null);

    const mutation: UseMutationResult<ResponseType, unknown, RequestType> =
        useMutation<ResponseType, unknown, RequestType>({
            mutationFn: apiFn,
        });

    const isPending = useMemo(() => status === "pending", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);

    const mutate = useCallback(
        async (
            values: RequestType,
            options?: MutationOptions<ResponseType>,
        ): Promise<ResponseType | undefined> => {
            try {
                setError(null);
                setStatus("pending");

                const response = await mutation.mutateAsync(values);

                setStatus("success");
                options?.onSuccess?.(response);

                return response;
            } catch (err: unknown) {
                const normalizedError = extractApiError(err);
                console.log("Hook error:", normalizedError);

                setError(normalizedError);
                setStatus("error");
                options?.onError?.(normalizedError);

                if (options?.throwError) {
                    throw err;
                }

                return undefined;
            } finally {
                setStatus("settled");
                options?.onSettled?.();
            }
        },
        [mutation],
    );

    return {
        mutate,
        error,
        isPending,
        isSuccess,
        isError,
        isSettled,
    };
}
