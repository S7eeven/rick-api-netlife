import React, {useState } from 'react'
import Formulario from './Formulario'
import PintarDatos from './PintarDatos'

const ConsumirAPI = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('')
/*
  useEffect( ()=> {
    if(localStorage.getItem('nombreAPI')){
      setNombrePersonaje(JSON.parse(localStorage.getItem('nombreAPI')))
    }
    localStorage.setItem('nombreAPI', JSON.stringify(nombrePersonaje));
  },[nombrePersonaje])
  */

  return (
    <>
        <div className='container'>
          <Formulario setNombrePersonaje={setNombrePersonaje} /> 
          <PintarDatos nombrePersonaje={nombrePersonaje} />
        </div>
       
    </>
  )
}

export default ConsumirAPI