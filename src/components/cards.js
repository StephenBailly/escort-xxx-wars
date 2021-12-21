import React, {useState, useEffect} from 'react';
import './cards.css';

const Card = () => {
const [card, setCard] = useState([])
    useEffect(() => {
        const getData = () => {
            fetch("https://miadil.github.io/starwars-api/api")
        }
    }, [])

}



export default Card;