"use client";
import { useEffect, useState } from "react";

const RootModal = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <></>;
};

export default RootModal;
