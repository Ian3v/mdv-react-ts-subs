import {useReducer} from 'react'
import {Sub} from '../types/types'


interface FormState {
    inputValues:Sub
}

//UseReducer
type FormReducerAction = 
    {
        type: "change_value1",
        payload:{
            inputName: string
            inputValue: string
        }
    } | 
    {   type:"clear"}

const INITIAL_STATE= 
    {
        nick:'',
        subMonths: 0,
        avatar:'',
        description: '',
    }


const formReducer = (state:FormState["inputValues"], action:FormReducerAction)=>{

    console.log('>>>>------------------------');
    console.log('Action Reducer>>',action); 
    console.log('State Reducer>>', state);
    if(action.type === "change_value1" ){

        console.log('%caction.obj >','color:red;font-size:15px;',action.payload.inputName);
        console.log('%caction.obj >','color:red;font-size:15px;',action.payload.inputValue);
    }
        console.log('--------------------------|||');


    switch(action.type){
        case "change_value1":
            // ------------First type----------
            // const [inputName, inputValue] = action.payload
            // return { ...state, [inputName]: inputValue}
            // --------------------------------
        
            return {...state, [action.payload.inputName]: action.payload.inputValue }
        

        case "clear":
            return INITIAL_STATE
        default:
            return state
    }
    
}

const useNewSubForm = ()=>{
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm;