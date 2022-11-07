import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Personaje from './Personaje'
import Spinner from './Spinner'

const PintarDatos = ({nombrePersonaje}) => {
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        llamadoAPI(nombrePersonaje);

    },[nombrePersonaje])

    const llamadoAPI = async (nombre) => {
        setLoading(true)
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            //console.log(res)
            if(!res.ok ){
                return Swal.fire({
                    title: 'Error!',
                    text: 'No hemos encontrado nada con ese nombre.?',
                    confirmButtonText: 'OK'
                })
            }
            //CASO CONTRARIO SI TODO VA BIEN. nostramos el json y results
            const datos = await res.json();
            console.log(datos.results) //muestar el joson d elos eprsonajes
            //setPersonajes((old) => [ ...datos.results, ...old ]) //TODO: CUANDO BUSQEUMOS ALGO NOS MUESTE LO ANTERIOR Y LOS BUSCADOS
            setPersonajes(datos.results)
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        llamadoAPI(nombrePersonaje)
    }, [nombrePersonaje]);


    if(loading){
        return <Spinner />
    }
    
  return (
    <>
        <div>PintarDatos</div>

        <div className='row'>
            {/*ITERAMOS PARA PODER PINTAR LOS RESULTADOS = PERSONAJES */}
            {
                personajes.map((item) => (
                    //personaje es el nombre con el que va a viajar = props (otro componente de PERRSONAJE.JS) 
                    <Personaje key={item.id} personaje={item} />
                ))
            }
        </div>
    </>
  )
}

export default PintarDatos