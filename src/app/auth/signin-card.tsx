import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Loader, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import VerificationInput from "react-verification-input";
import { cn } from "@/lib/utils";
import { useCheckAdminAccountExists } from "@/lib/features/auth/use-check-admin-account-exists";
import { authClient } from "@/lib/auth-client";

interface Props {
    onSwitch: () => void;
}

const SignInCard = ({ onSwitch }: Props) => {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [error] = useState("");
    const [pending, setPending] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);
    const { mutate: checkAccount, isPending } = useCheckAdminAccountExists();
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    // const handleSignIn = async () => {
    //     await authClient.signIn.email(
    //         {
    //             email,
    //             password,
    //         },
    //         {
    //             onRequest: () => {
    //                 setOtpLoading(true);
    //             },
    //             onSuccess: ctx => {
    //                 setOtpLoading(false);
    //                 setPending(false);
    //                 setOtpSent(true);
    //                 console.log("User data:", ctx.data);
    //             },
    //             onError: ctx => {
    //                 console.log("Error:", ctx);
    //                 setOtpLoading(false);
    //                 alert(ctx.error.message);
    //                 setPending(false);
    //             },
    //         }
    //     );
    // };

    const handleOtpSignIn = async (otpValue?: string) => {
        console.log("OTP:", otp);
        setPending(false);

        if (!otpSent || !otpValue) {
            await authClient.emailOtp.sendVerificationOtp(
                {
                    email,
                    type: "sign-in",
                },
                {
                    onRequest: () => {
                        setOtpLoading(true);
                    },
                    onSuccess: () => {
                        setOtpLoading(false);
                        setOtpSent(true);
                    },
                    onError: ctx => {
                        setOtpLoading(false);
                        alert(ctx.error.message);
                    },
                }
            );
        } else {
            await authClient.signIn.emailOtp(
                {
                    email,
                    otp: otpValue,
                },
                {
                    onRequest: () => {
                        setOtpLoading(true);
                    },
                    onSuccess: () => {
                        setOtpLoading(false);
                        router.push("/secure-area");
                    },
                    onError: (ctx: unknown) => {
                        setOtpLoading(false);
                        toast.error("Failed to login");
                        console.log(ctx);
                        console.log(
                            ctx instanceof Error
                                ? ctx.message
                                : "Failed to login"
                        );
                        // alert(ctx.error.message);
                    },
                }
            );
        }
    };

    const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        checkAccount(
            {
                email,
            },
            {
                onSuccess() {
                    setPending(true);
                    console.log("Run verification funtion");
                    handleOtpSignIn();
                },
                onError(error) {
                    console.log("[CHECK_LOGIN_ACCT:]", error);
                    toast.error(error.message || "Failed to login account.");
                },
            }
        );
    };

    const handleVerification = (value: string) => {
        setPendingVerification(true);
        console.log("Value:", value);

        handleOtpSignIn(value);
    };

    return (
        <div>
            <Card className="w-full p-8">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Login to Continue</CardTitle>
                    <CardDescription>
                        Use your email that was assigned to you to continue
                    </CardDescription>
                </CardHeader>
                {!!error && (
                    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-4 " />
                        <p>{error}</p>
                    </div>
                )}
                <CardContent className="space-y-5 px-0 pb-0 relative">
                    {pendingVerification ||
                    isPending ||
                    pending ||
                    otpLoading ? (
                        <div className="absolute top-2 right-0 w-5 h-6">
                            <Loader className="size-5 animate-spin" />
                        </div>
                    ) : null}
                    {otpSent ? (
                        <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
                            <div className="flex flex-col gap-y-2 items-center justify-center">
                                <h1 className="text-2xl font-bold">
                                    Enter Verification Code
                                </h1>
                            </div>
                            <VerificationInput
                                classNames={{
                                    container: cn(
                                        "flex gap-x-2",
                                        pendingVerification &&
                                            "opacity-50 cursor-not-allowed"
                                    ),
                                    character:
                                        "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium text-gray-500",
                                    characterInactive: "bg-muted",
                                    characterSelected: "bg-white text-black",
                                    characterFilled: "bg-white text-black",
                                }}
                                autoFocus
                                length={6}
                                onChange={value => setOtp(value)}
                                onComplete={handleVerification}
                            />
                        </div>
                    ) : (
                        <form
                            className="space-y-2.5"
                            onSubmit={onPasswordSignIn}
                        >
                            <Input
                                disabled={pending || isPending || otpLoading}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                                required
                                name="email"
                            />
                            {/* <Input
                                disabled={pending || isPending || otpLoading}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                type="text"
                                required
                                name="password"
                            /> */}
                            <Button
                                type="submit"
                                className="w-full"
                                size={"lg"}
                                disabled={pending || isPending || otpLoading}
                            >
                                Continue
                            </Button>
                        </form>
                    )}

                    <Separator />
                </CardContent>
            </Card>
            <div className="text-center mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
                Don&apos;t have an account?{" "}
                <Button onClick={() => onSwitch()}>Sign Up</Button>
            </div>
        </div>
    );
};

export default SignInCard;
