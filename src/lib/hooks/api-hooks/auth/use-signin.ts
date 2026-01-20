import { useApiMutation } from "../../generics/use-api-mutations";
import {
    signinApi,
    SigninPayload,
    SigninResponse,
} from "../../requests/user/signin";

export const useSignin = () =>
    useApiMutation<SigninPayload, SigninResponse>(signinApi);
