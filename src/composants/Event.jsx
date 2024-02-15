import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";


export default function Event(props){
    const [datas, setData] = useState(props.data);
    
    const buy = ()=>{
        props.fonctionAlert();
        setData((previousD)=>({
            ... previousD,nbParticipants : previousD.nbParticipants+1, nbTickets : previousD.nbTickets-1
        }))
      
    }
    const like = ()=>{
        setData((previousD)=>({
            ...previousD,like:!previousD.like
        }))
    }
    return (
        <>
      <Card style={{ width: '18rem' }}>
      
    <Card.Img variant="top"  src={datas.nbTickets===0 ? "images/sold_out.png" :`../images/${datas.img}`} />
    <Card.Body>
  <Card.Title>{datas.name}</Card.Title>
  <Card.Text>
  prix : {datas.price}
     </Card.Text>
     <Card.Text>
  nombre de tickets : {datas.nbTickets}
     </Card.Text>
     <Card.Text>
  nombre de participants :{datas.nbParticipants}
     </Card.Text>
     <Button variant="primary" onClick={buy} disabled={!datas.nbTickets}>Book an Event</Button>
     <Button variant="danger" onClick={like} >{!datas.like ? "Like" : "Dislike" }</Button>
    </Card.Body>
    </Card>
        
        
        </>
      )  
}
