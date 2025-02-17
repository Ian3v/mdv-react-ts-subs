import React, {useReducer} from 'react'
import '../styles/styles.css'

interface EstadoContador {
    valor: number
}

type accionType = 
    {type: 'incrementar'} |
    {type: 'decrementar'} |
    {type: 'resetear'} 
const reducerContador = (valorActual: EstadoContador, accion:accionType)=>{

    switch(accion.type){
        case 'incrementar':
            return {valor: valorActual.valor + 1}
        case 'decrementar':
        
            if(valorActual.valor > 0){
                return { valor: valorActual.valor - 1}
            }else{
                return valorActual
            }
            
            
        case 'resetear':
            return { valor: 0}
    }
}
const ContadorUseReducerSwitch = ()=>{

    const [cont, dispatch] = useReducer( reducerContador, {valor:0})

    return(
        <div className='container_list padding_20'>
                <h3>Usando switch contador  con useRender</h3>
                <h4>Num:{cont.valor} </h4>
                <button onClick={ ()=>dispatch({type: 'incrementar'}) }>Sumar +1</button>
                <button onClick={ ()=>dispatch({type: 'decrementar'})}>Decrementar -1</button>
                <button onClick={ ()=>dispatch({type: 'resetear'})}>resetear</button>
        </div>
    )
}

export default ContadorUseReducerSwitch;