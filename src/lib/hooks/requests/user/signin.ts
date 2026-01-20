import { API_URL } from "@/utils/constants";
import axios from "axios";

export type SigninPayload = {
    email: string;
    password: string;
};

export type SigninResponse = {
    status: boolean;
    message: string;
    data: string;
};

export async function signinApi(data: SigninPayload): Promise<SigninResponse> {
    const res = await axios.post(`${API_URL}/api/auth/sign-in/email`, data);
    return res.data;
}
