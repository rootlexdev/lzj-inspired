import { API_URL } from "@/utils/constants";
import axios from "axios";

export type SignupPayload = {
    name: string;
    email: string;
    password: string;
    phone?: string;
};

export type SignupResponse = {
    status: boolean;
    message: string;
    data: string;
};

export async function signupApi(data: SignupPayload): Promise<SignupResponse> {
    const res = await axios.post(`${API_URL}/api/auth/sign-up/email`, data);
    return res.data;
}
