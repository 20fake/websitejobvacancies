import React from "react";
import { Link } from "react-router-dom";
import ListData from "../components/listData";
import NavProfile from "../components/navprofile";
import SearchBar from "../components/searchBar";

const Dashboard = () => {

    return (
        <>
        {/* navprofile */}
        <NavProfile />
        {/* sidebar */}
        <div className="flex flex-row">
            <div className="relative bg-slate-700 dark:bg-gray-800 w-56 flex">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="w-56 h-screen">
                    <nav className="mt-10 px-6">
                        <Link to={"/createdata"} className="hover:text-white hover:bg-slate-500 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-white dark:text-gray-400 rounded-lg " href="#">
                        <span className="mx-4 text-lg font-medium">
                            Create Data
                        </span>
                        <span className="flex-grow text-right">
                        </span>
                        </Link>
                        <a className="hover:text-white hover:bg-slate-500 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-white dark:text-gray-100 rounded-lg" href="#">
                        <span className="mx-4 text-lg font-medium">
                            Form
                        </span>
                        <span className="flex-grow text-right">
                        </span>
                        </a>
                    </nav>
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="bg-slate-800 w-screen flex flex-col item-center">
                <SearchBar />
                <ListData />
            </div>
        </div>
        </>
    )
}

export default Dashboard;
