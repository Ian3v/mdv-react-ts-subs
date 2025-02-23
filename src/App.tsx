import { useEffect, useState } from 'react'
import './styles/styles.css'

import List from "./components/List"
import Form from "./components/Form"

import ContadorUseReducerIF from './components/ContadorUseReducerIf'

import {Sub, SubsResponseFromApi} from './types/types'
import ContadorUseReducerSwitch from './components/ContadorUseReducerSwitch'


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

    const getSubs = async () => {

      try {
        // Hacer fetch con tipado explícito
        const response = await fetch('http://localhost:6505/users');
        // ← ¡TypeScript valida aquí!
        const dataJson:SubsResponseFromApi  = await response.json();
        
        console.log('getApi>>', dataJson);

        const mappedSubs= dataJson.map( element=>{
          return {

            nick: element.nick,
            subMonths: element.months, // Mapeamos "months" a "subMonths"
            avatar: element.profileUrl, // Mapeamos "profileUrl" a "avatar"
            description: element.description
          }
        })

        console.log('mappedSubs>>',mappedSubs)
        setSubs(mappedSubs);

      } catch (error) {
        console.error('Error fetching subs:', error);
      }
    };
  
    getSubs();
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