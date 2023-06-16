import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajesServices } from "../services/personaje.service";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  const params = useParams();
  const [episodios, setEpisodios] = useState([]);


  useEffect(() => {
    PersonajesServices.getPersonajeporId(params.id, setPersonaje);
    PersonajesServices.getEpisodios(params.id, setEpisodios);
  }, [params.id]);
  return (
    <>
      {personaje != null ? (
        <div className="container">
          <h2>Personaje numero: {params.id}</h2>
          <p>Nombre: {personaje.name} </p>
          <img src={personaje.image} alt=""></img>
          <h3>Episodios:</h3>
          <ul>
            {episodios.map((episodio) => (
              <li key={episodio.id}>{`${episodio.id}: ${episodio.name}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        "no hay personajes"
      )}
    </>
  );
};

export default Personaje;
