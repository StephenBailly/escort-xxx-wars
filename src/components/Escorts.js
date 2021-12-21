import React, {useState, useEffect} from 'react';
import './escorts.css';

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
            <div class="escortsglobal">
                {escorts.map((escort) => (
                    <div class="escortcontainer">
                        <div class="imagecontainer">
                            <img class="escortimage" src={escort.image} alt={escort.name} />
                        </div>
                        <div class="escortbox">   
                            <p class="escortname">{escort.name}</p>
                            {/* <p>{escort.species}</p> */}
                        </div>  

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Escorts;