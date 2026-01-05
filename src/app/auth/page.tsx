"use client";
import Image from "next/image";
import SignInCard from "./signin-card";

const AuthPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="md:h-auto md:w-[420px] py-10">
                <div className="mb-6 flex justify-center">
                    <Image
                        src={"/assets/logo.svg"}
                        alt="logo"
                        width={100}
                        height={100}
                        className=" w-24 h-24"
                    />
                </div>
                <SignInCard />
            </div>
        </div>
    );
};

export default AuthPage;
