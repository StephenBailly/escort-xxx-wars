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
<<<<<<< HEAD
               <NavLink to="/Escorts" >
                <li className="pages">Escorts</li>
               </NavLink>
               {/*<NavLink to="path to Experts" >*/}
=======
               {/*<NavLink to="/Escorts" className={(navData) => (navData.isActive ? "chosen" : "")} >*/}
                <li className="pages">Escorts</li>
               {/*</NavLink>*/}
               {/*<NavLink to="/Inscriptions" className={(navData) => (navData.isActive ? "chosen" : "")} >*/}
>>>>>>> c4e67216dfd29947dceb2641151c7b75ec9d1faa
                <li className="pages">Inscription</li>
                {/*</NavLink>*/}
            </ul>
        </nav>
    )
}

export default Navbar;