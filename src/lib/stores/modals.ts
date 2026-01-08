import { atom, useAtom } from "jotai";

const successModalState = atom(false);
const completeProfileState = atom(false);
const loadingModalState = atom(false);

export const useSuccessModal = () => {
    return useAtom(successModalState);
};

export const useCompleteProfileModal = () => {
    return useAtom(completeProfileState);
};

export const useLoadingModal = () => {
    return useAtom(loadingModalState);
};
