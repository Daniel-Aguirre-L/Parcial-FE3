import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [formData, setFormData] = useState({
    song: "",
    artist: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      formData.song.trim().length >= 3 &&
      !formData.song.startsWith(" ") &&
      formData.artist.length >= 6
    ) {
      setError(false);
      setShowCard(true);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  const reset = () => {
    setFormData({
      song: "",
      artist: "",
    });
    setShowCard(false);
    setError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Canción Favorita:</label>
        <input
          type="text"
          name="song"
          value={formData.song}
          onChange={handleChange}
        />
        <label>Artista:</label>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
      {error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta.</p>}
      {showCard && <Card song={formData.song} artist={formData.artist} />}
    </div>
  );
};

export default Form;