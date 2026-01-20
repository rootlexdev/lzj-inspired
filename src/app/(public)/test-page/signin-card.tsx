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
import { Label } from "@/components/ui/label";
import { useSignin } from "@/lib/hooks/api-hooks/auth/use-signin";
import { toast } from "sonner";

interface Props {
    onSwitch: () => void;
}

const SignInCard = ({ onSwitch }: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState("");
    const [pending, setPending] = useState(false);

    const { mutate, isPending } = useSignin();

    const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        console.log("Email:", email, " and password:", password);
        mutate(
            {
                email,
                password,
            },
            {
                onSuccess(data) {
                    console.log("Sign in data:", data);
                    toast.success("Sign in successfully");
                },
                onError(error) {
                    toast.error(error.message || "Failed to login");
                },
                onSettled() {
                    setPending(false);
                },
            },
        );
    };

    console.log("isPending:", isPending, " or pending:", pending);

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
                    {isPending || pending ? (
                        <div className="absolute top-2 right-0 w-5 h-6">
                            <Loader className="size-5 animate-spin" />
                        </div>
                    ) : null}

                    <form className="space-y-2.5" onSubmit={onPasswordSignIn}>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                disabled={pending}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                                required
                                name="email"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="new-password"
                                placeholder="Password"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            size={"lg"}
                            disabled={pending || isPending}
                        >
                            Continue
                        </Button>
                    </form>
                    <Separator />
                </CardContent>
            </Card>
            <div className="text-center mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-2">
                Don&apos;t have an account?{" "}
                <Button onClick={() => onSwitch()}>Sign In</Button>
            </div>
        </div>
    );
};

export default SignInCard;
