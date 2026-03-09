import React, { ReactNode } from "react";
import Navbar from "./navbar";
import CTAFooter from "./footer";

interface Props {
    children: ReactNode;
}

const RMSLayout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
            <CTAFooter />
        </div>
    );
};

export default RMSLayout;
