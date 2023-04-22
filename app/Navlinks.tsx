"use client";
import { categories } from "../constants";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";
function Navlinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };

    return (
        <nav className="grid grid-cols-4 text-xs md:grid-cols-7 md:text-sm pb-10 border-b max-w-6xl  ml-28	">
            {categories.map((category) => (
                <Navlink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                />
            ))}
        </nav>
    );
    //using nav for SEO purposes
}
export default Navlinks;
