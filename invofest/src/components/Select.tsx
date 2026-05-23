interface SelectProps {
    label:string;
    name:string;
    register:any;
    error?:string;
    placeholder?: string;
    options: {label:string; value:string;}[];
}

export const Select: React.FC<SelectProps> = ({
    label,
    name,
    register,
    error,
    placeholder,
    options
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <select 
            {...register(name)} 
            className="border px-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#76153C] focus:border-[#76153C]">
                <option value="" disabled hidden>{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {error && <p className="text-[#76153C] text-sm">{error}</p>}
        </div>
    );
};
