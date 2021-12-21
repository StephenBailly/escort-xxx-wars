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
            Escorts !
            <div>
                {escorts.map((escort) => (
                    <div>
                        <p>{escort.name}</p>
                        <img src={escort.image} alt={escort.name} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Escorts;