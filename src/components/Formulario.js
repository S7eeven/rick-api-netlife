import React from 'react'
import Swal from 'sweetalert2'
import '../App.css'
import {useFormulario} from '../hooks/useFormulario'

const Formulario = ({setNombrePersonaje}) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: '',
  });

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);

    //TODO: PARA LA ALERTA DE VALIDACIONES, tenemos que instalar sweetalert2 y importar..
    if(!nombre.trim()){
      return Swal.fire({
        title: 'Error!',
        text: 'Ingresa algo por favor, para realizar la Busqueda.?',
        confirmButtonText: 'OK'
      })
    }
    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();//Reseteamos...
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='for-container'>
        <input
          type="text"
          placeholder='Ingrese personaje'
          className='form-control mb-2 buscarPersonaje'
          value={nombre}
          onChange={handleChange}
          name="nombre"
        />
        <button
          type='submit'
          className=' buscarbtn'
        >Buscar</button>
      </form>
      <hr className='line' />
      <h3 className='titulo-personaje'>PERSONAJES</h3>
    </>
  )
}

export default Formulario