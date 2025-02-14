import { useEffect, useState } from 'react'
import './styles/styles.css'

import List from "./components/List"
import Form from "./components/Form"

import {Sub} from './types/types'


interface AppState {
  subs:Array<Sub>
}

const INITIAL_STATE = [
    {
      nick: 'Carmen',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Daleu hacce moredador a veces deleniti eius qui Eligendi nam suscipit ut dolorem molestiae eum. Neque vero adipisci culpa. Voluptas provident animi velit nulla in modi. Inventore labore ipsam. Voluptates quia ab earum.'
    },
    {
      nick:'sergio_serrano',
      subMonths: 7,
      avatar:'https://i.pravatar.cc/150?u=sergio_serrano',
    }
  ]

interface Sub{
  nick: string
  subMonths:number
  avatar:string
  description?:string
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  
  useEffect(()=>{
    setSubs(INITIAL_STATE)
    console.log("App.tsx>>", subs);
  },[])

  useEffect(()=>{
    console.log('Subs>>', subs);
  },[subs])

  const handleNewSub= (inputValues:Sub):void=>{
    setSubs(
      subs => [...subs, inputValues]
    )
  }

  return (
    <div className='container container_main text-center'>

      <h1>Mdv Subs</h1>
      <List subscriptores={subs}/>
      <Form  onNewSub={handleNewSub}/>
    </div>
  )
}

export default App



