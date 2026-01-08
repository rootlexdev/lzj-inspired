import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

import { Loader } from "lucide-react";

interface Props {
    show: boolean;
}

const LoadingModal = ({ show }: Props) => {
    return (
        <Dialog open={show}>
            <DialogContent showCloseButton={false} className="bg-white">
                <DialogHeader className="flex items-center">
                    <DialogTitle>Please wait!</DialogTitle>
                    <Loader className="animate-spin size-5" />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default LoadingModal;
