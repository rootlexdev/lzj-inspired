import React from "react";
interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-primary-gold px-6 py-3 rounded-full">
                <p className="uppercase text-dark-navy font-medium text-sm">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle;
