import { SelectOptionType } from "@/utils/interfaces";
import Select, { SingleValue } from "react-select";
import { FormLabel } from "./form";

interface CustomSelectProps {
    label?: string;
    onChange: (value: SingleValue<SelectOptionType>) => void;
    value: unknown;
    options: SelectOptionType[];
    disabled?: boolean;
    className?: string;
}

const CustomSelect = ({
    label,
    onChange,
    options,
    value,
    disabled,
    className,
}: CustomSelectProps) => {
    return (
        <div className={`${className}`}>
            {label && <FormLabel>{label || "Select an option"}</FormLabel>}
            <Select
                onChange={onChange}
                value={options.filter(v => v.value === value)}
                options={options}
                classNames={{
                    control: () => `py-1 mt-2 text-white`,
                    // option: (())
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

export default CustomSelect;
