import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuthLayout(){
    return(
        <div>
            <Header />
            <div className="grid grid-cols-2 min-h-screen">
                {/*GAMBAR*/}
                <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                    <img 
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                        alt="" 
                        className="max-w-sm"
                    />
                </div>

                <main className="bg-gray-100 p-6">
                    <Outlet/>
                </main>
            </div>
            <Footer />
        </div>
    );
}