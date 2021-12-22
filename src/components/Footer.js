import React from "react"
import "./Footer.css"
import Img from "./Img.png"



const Footer = () => (
  <div className="footer">
      <section className="footerSection"> 
            <ul className = "aPropos">
            <div className="emojiContainer">
                <img className="emoji" src={Img}/>
            </div> 
                <li>
                A propos de nous 
                </li>
                <li>
                FAQ
                </li>
            </ul>    
      </section>
    </div>
    );



export default Footer;