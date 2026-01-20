import { useApiMutation } from "../../generics/use-api-mutations";
import {
    signupApi,
    SignupPayload,
    SignupResponse,
} from "../../requests/user/signup";

export const useSignup = () =>
    useApiMutation<SignupPayload, SignupResponse>(signupApi);
