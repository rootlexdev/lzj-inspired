import { SelectOptionType } from "@/utils/interfaces";
import Select, { SingleValue } from "react-select";
import { Label } from "./label";

interface CustomSelectBasicProps {
    label?: string;
    onChange: (value: SingleValue<SelectOptionType>) => void;
    value: string | undefined;
    options: SelectOptionType[];
    disabled?: boolean;
    className?: string;
}

const CustomSelectBasic = ({
    label,
    onChange,
    options,
    value,
    disabled,
    className,
}: CustomSelectBasicProps) => {
    return (
        <div className={`${className}`}>
            {label && (
                <Label className="text-gray-900 text-lg font-medium mb-2 block">
                    {label}
                </Label>
            )}
            <Select
                onChange={onChange}
                value={options.find(v => v.value === value) ?? null}
                options={options}
                classNames={{
                    control: () => `py-1 mt-2 text-white`,
                }}
                menuPlacement="top"
                isDisabled={disabled}
                theme={theme => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: "#000000",
                        primary25: "#FFAE00",
                        primary75: "yellow",
                    },
                })}
            />
        </div>
    );
};

export default CustomSelectBasic;
