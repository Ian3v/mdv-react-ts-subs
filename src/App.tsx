import { useEffect, useState } from 'react'
import './styles/styles.css'

import List from "./components/List"
import Form from "./components/Form"

import ContadorUseReducerIF from './components/ContadorUseReducerIf'

import {Sub, SubsResponseFromApi} from './types/types'
import ContadorUseReducerSwitch from './components/ContadorUseReducerSwitch'

import { getAllSubs } from './services/fetch-getAllSubs'

interface AppState {
  subs:Array<Sub>
  newSubsNumber:number
}



interface Sub{
  nick: string
  subMonths:number
  avatar:string
  description?:string
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumer, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  

  useEffect(() => {

   
    const subsAll = async () =>{
      const datos = await getAllSubs()
      setSubs(datos)
    }

    subsAll()
    
  }, []);
  



  const handleNewSub= (inputValues:Sub):void=>{
    setSubs(
      subs => [...subs, inputValues]
    )
    setNewSubsNumber(n => n + 1)
  
  }

  return (
    <div className='container container_main text-center'>

      <h1>Mdv Subs</h1>
      <List subscriptores={subs}/>
      New Subs: {newSubsNumer}
      <Form  onNewSub={handleNewSub}/>

      <ContadorUseReducerIF/>
      <ContadorUseReducerSwitch/>
    </div>
  )
}

export default App





// const INITIAL_STATE = [
//     {
//       nick: 'Carmen',
//       subMonths: 3,
//       avatar: 'https://i.pravatar.cc/150?u=dapelu',
//       description: 'Daleu hacce moredador a veces deleniti eius qui Eligendi nam suscipit ut dolorem molestiae eum. Neque vero adipisci culpa. Voluptas provident animi velit nulla in modi. Inventore labore ipsam. Voluptates quia ab earum.'
//     },
//     {
//       nick:'sergio_serrano',
//       subMonths: 7,
//       avatar:'https://i.pravatar.cc/150?u=sergio_serrano',
//     }
//   ]