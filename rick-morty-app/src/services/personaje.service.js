import axios from "./http.service"
import urlServidor from "../config"

const urlService = "/api/character/"

const getPersonajes = async (state) => {
  const resultado = await axios.get(urlServidor+urlService);
  state(resultado.data.results)
};

const getPersonajeporId = async (id, state) =>{
    const resultado = await axios.get(urlServidor+urlService+`${id}`)
    state(resultado.data)
}

const getEpisodios = async (id, state) => {
    const resultado = await axios.get(`${urlServidor}${urlService}/${id}`);
    const personaje = resultado.data;
  
    const obtenerEpisodios = async () => {
      const response = await Promise.all(
        personaje.episode.map((url) => axios.get(url))
      );
      const datosEpisodios = response.map((res) => res.data);
      return datosEpisodios;
    };
  
    const episodios = await obtenerEpisodios();
    state(episodios);
};

  
const PersonajesServices = {
    getPersonajes,
    getPersonajeporId,
    getEpisodios
}
export { PersonajesServices };
