import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Rooms(props) {

    const nev = useNavigate();

    const myStyle = ()=>{
      if(props.room.color != '')
        return props.room.color;
      else 
        return;
    }

    const getToRoom = ()=>{
      // let last;
      // last = props.room.nameOfRoom;
      // debugger
      let i = props.index;
      props.setLastRoom(i);
      // console.log(last);
      // console.log(i);
      // props.setLastRoom(props.lastRoom);
        nev('/room'); 
    }

  return (
    <div style={{backgroundColor: myStyle(),borderRadius: '3px'}} className='rooms' onClick={()=>{getToRoom()}}>{props.room.nameOfRoom}</div>
  )
}
