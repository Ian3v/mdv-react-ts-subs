
import { SetStateAction, useEffect, useReducer, useState } from 'react'
import '../styles/styles.css'
import {Sub} from "../types/types"

import useNewSubForm from '../hooks/useNewSubForm'
//Esta interface esta bien, no es necesaio separarlo en otro archivos de types , porq este de aka es algo unico de este archivo, comoq sirve aka bien, si lo llevamos al archivo de types, pues se hara mucha cosa


interface FormProps {
    onNewSub: (inputValues: Sub) =>void
    
    // newSub: React.Dispatch<React.SetStateAction<Sub[]>> //Para el setState de sub
}


//reducer



const Form = ({onNewSub}:FormProps) => {

    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    // const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)? 
    const [inputValues, dispatch] = useNewSubForm()


    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        onNewSub(inputValues)
        handleClear() //o tambien dispatch({type: "clear"})
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        
    //Usando useREducer
        console.log(e.target.name);
        dispatch({
            type: 'change_value1', 
            payload:{
                inputName: e.target.name, 
                inputValue: e.target.value
            }}
        );
    

    //Usando El setState de subs de App.tsx
        // setInputValues(prevSate => (
        //     {
        //         ...prevSate, 
        //         [e.target.name]: e.target.name === "subMonths" ? Number(e.target.value) : e.target.value
        //     }
        //     )
        // )

    //Usando la Funcion q envuelve setSubs de App.tsc
        // setInputValues({
        //     ...inputValues, 
        //     [e.target.name]: e.target.value
        // })
    
    }
    // const {name, value} = ()=>{
    //         //  e.target
        
    // }

    const handleClear = ()=>{

        dispatch({type: "clear"})
   
    }
    

    return (
        <div>

            <form onSubmit={ handleOnSubmit} className='form_main'>
                <input 
                    onChange={handleChange}
                    value={inputValues.nick}
                    type="text" 
                    name="nick" 
                    placeholder="nick" 
                    />
                <input 
                    onChange={handleChange}
                    value={inputValues.subMonths}
                    type="number" 
                    name="subMonths" 
                    placeholder="subMonths" 
                    />
                <input 
                    onChange={handleChange}
                    value={inputValues.avatar}
                    type="text" 
                    name="avatar" 
                    placeholder="avatar" 
                    />
                <textarea 
                    onChange={handleChange}
                    value={inputValues.description}
                    name="description" 
                    placeholder="description" 
                    />
                <button onClick={handleClear} type='button'>Clear the Form</button>
                <button type='submit'>Save new Sub!</button>
            </form>

        </div>
    );
};

export default Form;
