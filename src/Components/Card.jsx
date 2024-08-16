import React from "react";
import CardStyles from "../Styles/Card.module.css"; 
const Card = ({ song, artist }) => {
  return (
    <div className={CardStyles.cardContainer}>
      <h3>Información de la Canción</h3>
      <p>Canción Favorita: {song}</p>
      <p>Artista: {artist}</p>
    </div>
  );
};

export default Card;