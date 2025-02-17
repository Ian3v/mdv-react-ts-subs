import React, {useReducer} from "react";
import '../styles/styles.css'

type contType = {
  valor: number
}

type actionType=
  { type: 'incrementar'} |
  { type: 'decrementar'} |
  { type: 'resetear'}

const reducerCont = (initialValue:contType, action:actionType): contType =>{

  if(action.type === 'incrementar'){

    console.log('incrementando');
    return { valor: initialValue.valor + 1}
  } 
  
  if(action.type === 'decrementar') 
    {
      console.log('Minos');
      if(initialValue.valor > 0){

        return { valor: initialValue.valor - 1}
      }else{
        return initialValue
      }
  }
  if(action.type === 'resetear'){
    return { valor: 0}
  }
  return initialValue;
  
}


const ContadorUseReducerIF = ()=>{

  const [cont, dispatch] = useReducer(reducerCont, {valor: 0})

  return(
    <div className="container_list padding_20">
      <h3>Usando if en useReducer</h3>
      <h4>Num: {cont.valor}</h4>
      <button onClick={ ()=> dispatch({type: 'incrementar'})}>Incrementar + 1</button>
      <button onClick={()=> dispatch({type: 'decrementar'})}>Decrementar - 1</button>
      <button onClick={()=> dispatch({type: 'resetear'})}>Resetear</button>

    </div>
  )
}

export default ContadorUseReducerIF;