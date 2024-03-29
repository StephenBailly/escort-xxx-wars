import React, { useState } from "react";
import "./requestForm.css";

const FORM_ENDPOINT = "";

const Inscription = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  
  if (submitted) {
    return (
      <>
        <div className="Confirmation-form">
          <h2>Merci beaucoup!</h2>
          <h2>Bobba vous recontactera pour les modalités de paiement.</h2>
        </div>
      </>
    );
  }

  return (
    <form className="form-global"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method=""
      target=""
    >


      <h1 className="form-h1">Réservation</h1><h3 className="form-h4">Merci de nous indiquer vos préférences ainsi que tout commentaire utile à la réservation</h3>

      
      <div>
        <input className="mandatory-data" type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input className="mandatory-data" type="email" placeholder="Email" name="email" required />
      </div>
      <div className="preference"><h4>Préférences</h4></div>
        <div>
          <select className="form-dropdownmenu">
            <option value="Peluche">Peluche</option>
            <option value="Humanoïde">Humanoïde</option>
            <option value="Droïde">Droïde</option>
          </select>
        </div>
        <div>
          <select className="form-dropdownmenu2">
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
            <option value="Neutre">Neutre</option>
          </select>
        </div>
      <div>
        <textarea className="form-message" placeholder="Comments" name="message" />
      </div>
      
      <div>
        <button className="form-submit" type="submit">Envoi</button>
      </div>
    </form>
  );
};

export default Inscription;