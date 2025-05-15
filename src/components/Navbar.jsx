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
        <div className="dropdown">
            <HamburgerButton />
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link to="/">Inici</Link></li>
                {/* <li><Link to="/learn">Aprendre</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/directory">Directori</Link></li>
                <li><Link to="/register">Registrar-se</Link></li>
                <li><Link to="/login">Iniciar sessió</Link></li>
                <li><Link to="/admindashboard">Panell d'administrador</Link></li> */}
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar;