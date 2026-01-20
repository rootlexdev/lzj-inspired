import axios from "axios";

export type ApiError = {
    success: false;
    message: string;
    status: number;
};

export function extractApiError(err: unknown): ApiError {
    if (axios.isAxiosError(err)) {
        return err.response?.data as ApiError;
    }

    return {
        success: false,
        message: err instanceof Error ? err.message : "Unknown error",
        status: 500,
    };
}
