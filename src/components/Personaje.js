import React from 'react'
import {useModal} from '../hooks/useModal.js';
import Modal from '../components/Modal';

const Personaje = ({personaje}) => {

    const {name, species, status, image, origin:{name:name2} } = personaje;
    const [isOpenModal, openModal, closeModal] = useModal(false);
    
  return (
    <>
        <div className='col-md-3 mb-2'>
            <div className='card borde-card'>
                <img src={image} alt={'imageRickandMorty'} className='card-img-top'/>
                <div className='card-body'>
                    <h5>{name}</h5>
                    <button className='buscarbtn' onClick={openModal}>información</button>
                    <Modal isOpen={isOpenModal} closeModal={closeModal} >
                        <h6>Caracteristicas del personaje</h6>
                        <img src={image} alt={'imageRickandMorty'} className='card-img-top'/>
                        <h5>Nombre: {name}</h5>
                        <p>Especie: {species}</p>
                        <p>Estatus: {status}</p>
                        <p>Planeta: {name2}</p>
                    </Modal>
                </div>
            </div>
        </div>
    </>
  )
}

export default Personaje