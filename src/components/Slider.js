import { useState, useEffect } from "react"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"

function Slider() {
    const baseUrl1 = "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg";
    const baseUrl2 = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png";
    const baseUrl3 = "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png";
    const baseUrl4 = "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png";
    const baseUrl5 = "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png";
    const datas = [
        {
            image: `${baseUrl1}`,
            name: "Luke Skywalker",
        },
        {
            image: `${baseUrl2}`,
            name: "R2-D2",
        },
        {
            image: `${baseUrl3}`,
            name: "Jabba",
        },
        {
            image: `${baseUrl4}`,
            name: "Yoda",
        },
        {
            image: `${baseUrl5}`,
            name: "Wicket",
        }
    ]
    return (
        <Carousel>

           
           {datas.map(slide =>(
               <div key={slide.id}>
                   <img src= {slide.image} />
                   <h2>{slide.name}</h2>
                 <div className="overlay"></div>

               </div>
           ))}
        </Carousel>
    )
}

export default Slider
