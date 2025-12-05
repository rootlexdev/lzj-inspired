import React from "react";

interface Props {
    title: string;
    description: string;
}

const PerValue = ({ description, title }: Props) => {
    return (
        <div>
            <h2 className="text-primary-gold font-bold text-xl mb-2">
                {title}
            </h2>
            <p className="text-white text-sm font-medium">{description}</p>
        </div>
    );
};

export default PerValue;
