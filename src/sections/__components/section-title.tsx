import React from "react";
interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-[linear-gradient(107.38deg,#F3F1CF_26.16%,#EDC675_73.84%)] px-6 py-3 rounded-full">
                <p className="uppercase text-dark-navy font-medium text-sm">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle;
