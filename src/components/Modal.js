import '../App.css';

const Modal = ({children, isOpen, closeModal}) => {

    return (
        <article className={`modal ${isOpen && "is-Open"}`} onClick={closeModal} >
            <div className='modal-container'>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children} {/* hace referencia al contenido de la ventana Personaje */}
            </div>
        </article>
    )
}

export default Modal;