import React from "react";
import Button from "./buttons/Button";

const Drawer = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <li><a>Guies</a></li>
                    <li><a>Usuaris</a></li>
                    <li><a>Mètriques</a></li>
                    <li><a>Configuració</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Drawer;