import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
    
    const handleLogout = () => {
        Cookies.remove('token')
        navigate("/login")
        alert("Akun Anda telah Logout")
    }

    return (
        <nav className="bg-white border-gray-200 px-2 md:justify-start sm:px-4 py-2.5 dark:bg-gray-900 shadow-md">
            <div className="container flex flex-wrap md:justify-start justify-between items-center mx-auto w-3/4">
                <Link to={"/"}>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cakap.Id</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <Link to={"/"}>
                    <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                    Beranda
                    </li>
                </Link>
                <Link to={"/dashboard"}>
                    <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Daftar Kerja
                    </li>
                </Link>
                {
                    !Cookies.get('token') && 
                        <Link to={"/login"}>
                            <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Login
                            </li>
                        </Link>
                }
                {
                    Cookies.get('token') &&
                    <Link to={"/"}>
                            <li onClick={handleLogout} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Logout
                            </li>
                    </Link>
                }
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
