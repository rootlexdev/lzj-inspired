"use client";
import React, { useState } from "react";
import SignInCard from "./signin-card";
import SignupCard from "./signup-card";

const TestPage = () => {
    const [inputMode, setInputMode] = useState<"signin" | "signup">("signin");

    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="w-120 p-4 border border-border rounded-md">
                {inputMode === "signin" ? (
                    <SignInCard onSwitch={() => setInputMode("signup")} />
                ) : (
                    <SignupCard onSwitch={() => setInputMode("signin")} />
                )}
            </div>
        </div>
    );
};

export default TestPage;
