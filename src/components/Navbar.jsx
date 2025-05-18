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
                <a className="font-[Righteous]">PRISMA</a>
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
                        <li><Link to="/FAQ" className="font-[Roboto]">FAQ</Link></li>{/* 
                
                <li><Link to="/directory" className="font-[Roboto]">Directori</Link></li>
                <li><Link to="/register" className="font-[Roboto]">Registrar-se</Link></li>
                <li><Link to="/login" className="font-[Roboto]">Iniciar sessió</Link></li>
                 */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;