import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "./buttons/HamburgerButton";

const Navbar = () => { 
    return (
        <div className="navbar bg-primary shadow-sm">
        <div className="navbar-start">
            
        </div>
        <div className="navbar-center">
            <a className="font-[Righteous]">PRISMA</a>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <HamburgerButton />
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
                <li className="font-body"><Link to="/" className="block w-full text-right">Inici</Link></li>
                <li className="font-body"><Link to="/admindashboard"className="block w-full text-right">Panell d'administrador</Link></li>
                {/* <li><Link to="/learn">Aprendre</Link></li>
                <li className="font-[Roboto]"><Link to="/FAQ">FAQ</Link></li>
                <li className="font-[Roboto]"><Link to="/directory">Directori</Link></li>
                <li className="font-[Roboto]"><Link to="/register">Registrar-se</Link></li>
                <li className="font-[Roboto]"><Link to="/login">Iniciar sessió</Link></li>
                 */}
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar;