import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { useSuccessModal } from "@/lib/stores/modals";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Props {
    message?: string;
}

const SuccessModal = ({ message }: Props) => {
    const [open, setOpen] = useSuccessModal();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white flex flex-col items-center justify-center">
                <DialogTitle></DialogTitle>

                <DotLottieReact
                    src="/assets/lotties/success.json"
                    loop
                    autoplay
                    className="h-[200px] w-[200px]"
                />

                <div>
                    <h2 className="text-xl font-bold text-center font-outfit mb-1">
                        Good Job!
                    </h2>
                    <p className="text-sm text-supporting-text text-center mb-2">
                        {message}
                    </p>
                    <Button onClick={handleClose} className="mx-auto block">
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessModal;
