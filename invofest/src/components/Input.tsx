interface InputProps {
    label:string;
    name:string;
    register:any;
    error?:string;
    type?:string;
    placeholder:string;
}

export const Input: React.FC<InputProps>=({
    label,
    name,
    register,
    error,
    type = "text",
    placeholder
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <input 
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className="border rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#76153C]"
            />

            {error && <p className="text-[#76153C] text-sm">{error}</p>}
        </div>
    );
};

export default Input;