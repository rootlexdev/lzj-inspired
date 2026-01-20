import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignup } from "@/lib/hooks/api-hooks/user/use-signup";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
    onSwitch: () => void;
}

const SignupCard = ({ onSwitch }: Props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);

    const { mutate, isPending } = useSignup();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        mutate(
            {
                email,
                name: `${firstName} ${lastName}`,
                password,
            },
            {
                onSuccess(data) {
                    console.log("Sign up data:", data);
                },
                onError(error) {
                    toast.error(error.message || "Failed to sign up user");
                },
                onSettled() {
                    setLoading(false);
                },
            },
        );
    };

    return (
        <div>
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <form onSubmit={handleSignUp} className="grid gap-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Max"
                                        required
                                        onChange={e => {
                                            setFirstName(e.target.value);
                                        }}
                                        value={firstName}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Robinson"
                                        required
                                        onChange={e => {
                                            setLastName(e.target.value);
                                        }}
                                        value={lastName}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
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
                            <div className="grid gap-2">
                                <Label htmlFor="password">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    onChange={e =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                    autoComplete="new-password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading || isPending}
                            >
                                {loading ? (
                                    <Loader2
                                        size={16}
                                        className="animate-spin"
                                    />
                                ) : (
                                    "Create an account"
                                )}
                            </Button>
                        </form>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
                Already have an account?{" "}
                <Button onClick={() => onSwitch()}>Sign In</Button>
            </div>
        </div>
    );
};

export default SignupCard;
