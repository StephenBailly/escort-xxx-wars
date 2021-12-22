import "./Card.css"

import {Link} from 'react-router-dom'

const Card = ({ name, image, id }) => {
    const idEscorts = `/Escorts/${id}`
    return (
        <div class="escortcontainer">
            <div class="imagecontainer">
            <Link to={idEscorts} >
            <img class="imglogo" src="https://www.beinmediagroup.com/fr/wp-content/uploads/sites/2/2016/10/LOGO-SALON-VIP-BLACK.png" alt="viplogo" />
            <img className="escortimage" src={image} alt={name} />
            </Link>
            </div>
            <div class="escortbox">   
            <p class="escortname">{name}</p>
            </div>
        </div>
    )
}
export default Card 