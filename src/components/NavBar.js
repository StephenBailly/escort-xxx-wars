import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="list">
               {/*<NavLink to="./" className={(navData) => (navData.isActive ? "chosen" : "")}>*/}
                <li className="pages">Accueil</li>
               {/*</NavLink>*/}
               <NavLink to="/Escorts" >
                <li className="pages">Escorts</li>
               </NavLink>
               {/*<NavLink to="path to Experts" >*/}
                <li className="pages">Inscription</li>
                {/*</NavLink>*/}
            </ul>
        </nav>
    )
}

export default Navbar;