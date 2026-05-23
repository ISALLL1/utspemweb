import type React from "react";

interface NavbarProps {
    label: string;
    href: string;
    icon?: React.ReactNode;
    isActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
    label,
    href,
    icon,
    isActive = false,
}) => {
    const activeStyle = "text-[#76153C]";
    const defaultStyle = "text-slate-600 hover:text-[#76153C]";

    return (
        <a
            href={href}
            className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                isActive ? activeStyle : defaultStyle
            }`}
        >
            {icon && <span className="w-5 h-5">{icon}</span>}
            <span>{label}</span>
        </a>
    );
};

export default Navbar;