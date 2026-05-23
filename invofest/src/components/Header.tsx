import { Home, Trophy, Presentation, Laptop, Mic, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";



export const Header: React.FC = () => {
  
  const activeStyle = "text-[#76153C]";
  const defaultStyle = "text-slate-600 hover:text-[#76153C]";

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <Presentation size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
    { label: "", href: "/login", icon: <UserCircle size={24} />  },
  ];

  return (
    <header className=" bg-white px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-13"
          />
        </div>
        <div className="nav flex gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-2 font-medium transition-all duration-200 
                  ${isActive ? activeStyle : defaultStyle}`
              }
            >

              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;