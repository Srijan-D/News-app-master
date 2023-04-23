import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navlinks from "./Navlinks"
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                <Link href="/" prefetch={false}>
                    <h1 className="font-serif text-4xl text-center">
                        The{" "}
                        <span className="underline decoration  decoration-orange-600">
                            Breaking
                        </span>{" "}
                        News
                    </h1>
                </Link>
                <div className="flex items-center justify-end space-x-2">
                    {/* {darkMode Button} */}
                    <DarkModeButton />
                    <button className="hidden md:inline bg-slate-900 text-white  px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                        Subscribe to newsletter
                    </button>
                </div>
            
            </div>
            <Navlinks />

            <SearchBox />
        </header>
    );
}

export default Header;