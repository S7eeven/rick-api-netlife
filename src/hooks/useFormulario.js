import {useState} from 'react'

/*TODO: ESTE HH=OOKS PERMITE OBTENER LOQ UE EL USUARIO HAYA INGRESADO EN EL INPUT */
export const useFormulario = (initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target;

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));

    };

    const reset = () => {
      setInputs(initialState);
    }

  return (
    [inputs, handleChange, reset]
  )
}

