import { useState } from 'react'
import './App.css'
import ClassComponent from './composants/ClassComponent'
import FunctionalComponent from './composants/FunctionalComponent'
import Events from './composants/Events'
function App() {
  // const [count, setCount] = useState(0)
  const tab=[{name:"twin3",module:"react"},{name:"twin3",module:"express"}]
  const fcTest=()=>{
    return tab.map((e,i)=>  <li key={i}>{e.name} {e.module}</li>)
  }
  const hello= ()=>{
    return <p style={{color:"red"}}>Hello world {10+8}</p>
  }
  return (
    <>
      <div>
      <Events />
      </div>
    
    </>
  )
}

export default App
