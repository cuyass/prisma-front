import React from "react";
import { Link, useLocation } from "react-router-dom";

import HamburgerButton from "./buttons/HamburgerButton";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar bg-primary shadow-sm">
            <div className="navbar-start">
                {location.pathname === "/admindashboard" && (
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-soft btn-error drawer-button lg:hidden">
                            Admimenú
                        </label>
                    </div>
                )}
            </div>
            <div className="navbar-center">
                <Link to="/" className="font-[Righteous] text-2xl tracking-wider transition-all duration-300
                    text-primary-content
                    hover:bg-gradient-to-r
                    hover:from-violet-600
                    hover:via-blue-500
                    hover:via-cyan-400
                    hover:via-green-400
                    hover:via-yellow-400
                    hover:via-orange-500
                    hover:to-red-500
                    hover:bg-clip-text
                    hover:text-transparent
                    focus:bg-gradient-to-r
                    focus:from-violet-600
                    focus:via-blue-500
                    focus:via-cyan-400
                    focus:via-green-400
                    focus:via-yellow-400
                    focus:via-orange-500
                    focus:to-red-500
                    focus:bg-clip-text
                    focus:text-transparent"
                    aria-label="Tornar a l'inici">
                    PRISMA
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <HamburgerButton />
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className="font-[Roboto]">Inici</Link></li>
                        <li><Link to="/admindashboard" className="font-[Roboto]">Panell d'administrador</Link></li>
                        <li><Link to="/learn" className="font-[Roboto]">Guies</Link></li>
                        <li><Link to="/FAQ" className="font-[Roboto]">FAQ</Link></li>
                        <li><Link to="/directory" className="font-[Roboto]">Directori</Link></li>
                        <li><Link to="/register" className="font-[Roboto]">Registrar-se</Link></li>
               
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;