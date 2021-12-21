import "./Card.css"

import {Link} from 'react-router-dom'

const Card = ({ name, image, id }) => {
    const idEscorts = `/Escorts/${id}`
    return (
        <div>
            <Link to={idEscorts} >
            <p>{name}</p>
            <img className="CardImg" src={image} alt={name} />
            </Link>
        </div>
    )
}
export default Card 