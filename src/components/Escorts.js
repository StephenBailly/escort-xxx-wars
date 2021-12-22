import React, {useState, useEffect} from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom'
import './escorts.css';
import { Router } from 'react-router-dom';

const Escorts = () => {
const [escorts, setEscorts] = useState([])
    useEffect(() => {
        const getData = () => {
            fetch("https://miadil.github.io/starwars-api/api/all.json")
            .then((res) => res.json())
            .then((res) => console.log(res) || setEscorts(res))
        }
        getData()
    }, [])

    return (
        <div>
            <h1 class="escortstitle">Nos Escorts !</h1>
            <h2 class="subtitle">Choisissez parmis un large panel</h2>
            <div class="escortsglobal">
                {escorts.map((escort) => (
                    // <div class="escortcontainer">
                        <div>
                            {/* <NavLink to="/Inscription"> */}
                                {/* <img class="imglogo" src="https://www.beinmediagroup.com/fr/wp-content/uploads/sites/2/2016/10/LOGO-SALON-VIP-BLACK.png" alt="viplogo" />
                            {/* </link> */}
                            {/* <img class="escortimage" src={escort.image} alt={escort.name} />
                        </div>
                        <div class="escortbox">   
                            <p class="escortname">{escort.name}</p> */}

                            <Card
                            key={escort.id}
                            id={escort.id}
                            name={escort.name}
                            image={escort.image}
                            />
                            {/* <p>{escort.species}</p> */}
                        </div>  

                    // </div>
                ))
                }
            </div>
        </div>
    )
    }
export default Escorts;