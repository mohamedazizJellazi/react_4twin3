import { useState ,useEffect} from "react";
import events from "../data/events.json"
import CardGroup from 'react-bootstrap/CardGroup';
import Event from "./event";
import Alert from 'react-bootstrap/Alert';
export default function Events(){
  const [showAlert, setshowAlert]= useState(false)
  const [showWelcome, setshowWelcome]= useState(false)
  const modifAlert = ()=>{
    setshowAlert(true)
    setTimeout(() => setshowAlert(false) , 3000);
  }
  useEffect(()=>{
    setshowWelcome(true)
   setTimeout(()=>setshowWelcome(false),3000)
    return ()=>{
        console.log("finish unmounting")
        // clearTimeout(result)
}
  },[])
    return (
        <>
         {showWelcome &&
        <Alert >
          Bienvenue
        </Alert>
        }   
    
        <CardGroup>
        {
            events.map((d,i)=>{
                return <Event key={i} k={i} data={d}  fonctionAlert={modifAlert} />
            })
        }
        
        </CardGroup>
        {showAlert &&
        <Alert >
          You have booked an event
        </Alert>
        }   
        </>

      )
}