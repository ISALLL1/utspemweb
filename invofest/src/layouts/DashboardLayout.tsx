import { Link, Outlet, useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"

export default function DashboardLayout(){
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        // REDIRECT KE HALAMAN LOGIN SETELAH LOGOUT
        navigate("/login");
    };

    return(
        <div className="flex w-full min-h-screen">
            <aside className="w-64 h-screen fixed left-0 top-0 bg-[#76153C] flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-center border-b border-gray-50 h-16">
                    <h2 className="text-2xl font-bold mb-4">Invofest</h2>
                </div>

                <div>
                    <nav className="flex flex-col gap-2">
                        <Link to="/dashboard" className="p-4 hover:bg-black transition-colors ease-in duration-150">Dashboard</Link>
                        <Link to="/dashboard/category" className="p-4 hover:bg-black transition-colors ease-in duration-150">Kategori Event</Link>
                        <Link to="/dashboard/event" className="p-4 hover:bg-black transition-colors ease-in duration-150">Event</Link>
                        <Link to="/dashboard/pembicara" className="p-4 hover:bg-black transition-colors ease-in duration-150">Pembicara</Link>
                        <Link to="/dashboard/biodata" className="p-4 hover:bg-black transition-colors ease-in duration-150">Biodata</Link>
                    </nav>
                </div>

                <div>
                    <button onClick={handleLogout} className="p-3 bg-black w-full" type="button">Logout</button>
                </div>
            </aside>

            <main className="flex-1 ml-64 w-full bg-gray-100 p-6 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}