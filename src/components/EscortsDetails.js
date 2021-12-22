import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./Card.css"

const EscortsDetails = () => {
    const [escort, setEscort] = useState([])
    const [loading, setLoading] = useState(false)

    const params =useParams()

        useEffect(() => {
            const id = params.id
            console.log (id)
            const getData = () => {
                fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
                .then((res) => res.json())
                .then((res) => { setEscort(res) || setLoading(true) || console.log(res)})
            }
            getData()
        }, [])
    const {
        name,
        height,
        mass,
        gender,
        homeworld,
        species,
        wiki,
        image,
        born,
        bornLocation,
        died,
    } = escort
return ( 
     <div>
         {loading ? (
         <div> 
         <h2>{name}</h2>
         <div>
         <img className="CardImg" src={image} alt={name} />
        </div>
     <div>height : {height}</div>
     <div> mass : {mass}</div>
     <div> gender : {gender}</div>
     <div>homeworld : {homeworld}</div>
     <div>species : {species}</div>
     <div>wiki : {wiki}</div>
     <div>image : {image}</div>
     <div>born : {born}</div>
     <div>bornLocation : {bornLocation}</div>
     <div>died,: {died}</div> </div>
        ) : (<div>Loading</div>)}
        
        </div>
    )
    }
export default EscortsDetails
