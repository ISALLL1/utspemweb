const Footer = () => {
    return (
        <footer className="bg-[#FFEDF3]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="lg:flex lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                                 alt="Invofest Logo" 
                                 className="w-48"
                            />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Menu Navigasi</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a className="hover:text-[#76153C] flex items-center gap-2" href="/">
                                        Beranda
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-[#76153C] flex items-center gap-2" href="/seminar">Seminar</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-[#76153C] flex items-center gap-2" href="/competition">Competition</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-[#76153C] flex items-center gap-2" href="/workshop">Workshop</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-[#76153C] flex items-center gap-2" href="/talkshow">Talkshow</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase" >Ikuti Kami</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/invofest_harkatnegeri" className="hover:text-[#76153C] flex items-center gap-2" target="_blank">Instagram</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.youtube.com/@invofest2024" className="hover:text-[#76153C] flex items-center gap-2" target="_blank">Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Alamat</h2>
                            <ul className="w-full text-gray-500 font-medium">
                                <li>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid" width="250" height="200" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[320px] sm:w-full lg:w-auto" style={{border: "none"}}></iframe>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="/" className="hover:underline">INVOFEST</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;