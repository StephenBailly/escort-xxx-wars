import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import './accueil.css';
import Slider from "./Slider";

const Accueil = () => {
    return (
        <div>
            <h1 className='title'>May The Force Be In YOU</h1>

            <div><Slider /></div>
            
            <p className='text'>Bienvenue dans le monde des relations ouvertes intergalactiques où la Force sera à jamais en vous.
            Nous vous proposons une large gamme d'Hommes, Femmes, Gungans, Duros, Sullustan, Mon Calamari, Ewoks, Hutt, Jawas... pour jouer avec, avec ou sans Force biensur.
            Sans plus tarder nous vous invitons à naviguer sur notre site pour trouver votre compagnon de jeu idéal.
            May there Force Be In You!
            </p>
            <h1 className="underage" >-18</h1>
        </div>
    )

}








export default Accueil;