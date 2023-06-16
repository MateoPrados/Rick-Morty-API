import React, { useEffect , useState} from 'react'
import { PersonajesServices } from '../services/personaje.service.js'

const Inicio = () => {

    const [personajes , setpersonajes] = useState(null)

    useEffect(()=>{
        PersonajesServices.getPersonajes(setpersonajes) //esta funcion recibe un estado y se lo setea en personajes

    },[])
  return (   
    <>
    {personajes != null ? (personajes.map(personaje => (
        <div key={personaje.id} className='container'>
            <a href = {`/personaje/${personaje.id}`}> {personaje.name} </a>
        </div>
    ))): ("No hay personajes")}
    </>
  )
}

export default Inicio