import { atom, useAtom } from "jotai";

const successModalState = atom(false);

export const useSuccessModal = () => {
    return useAtom(successModalState);
};
