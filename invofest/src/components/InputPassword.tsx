import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputPasswordProps {
    label:string;
    name:string;
    register:any;
    error?:string;
    placeholder:string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    name,
    register,
    error,
    placeholder
}) => {
    const [show, sestShow] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <div className="relative">
                <input 
                type={show? "text" : "password"} 
                placeholder={placeholder}
                {...register(name)}
                className="border rounded-2xl px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#76153C]"
                />

                <button
                type="button"
                onClick={() => sestShow(!show)}
                className="absolute right-2 top-2 text-sm"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {error && <p className="text-[#76153C] text-sm">{error}</p>}
        </div>
    )
}

export default InputPassword;