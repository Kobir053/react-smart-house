import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoomClass } from '../App';
import './addRoom.css'

export default function AddRoom(props) {

    const nev = useNavigate();

    let n,t;

    const check = ()=>{
        if(document.getElementById('na').value != ''){
            n = document.getElementById('na').value;
            t = document.getElementById('ty').value;
            if(n.length >= 1 && n.length <= 5)
                // props.rooms.push(new myClass(n,t));
                props.rooms.push(new RoomClass(n,t))
            else{
                alert('error');
                nev('/');
                return;
            }
        }
        else{
            alert('error'); 
            nev('/');
            return;
        }
        if(document.getElementById('color').value != null){
            let j = document.getElementById('color').value;
            props.rooms[props.rooms.length - 1].color = j;
        }
        props.setRoom([...props.rooms]);
        console.log(props.rooms[0].color);
            nev('/');
    //     if(c != null)

    }

  return (
    <div className='mainDiv'>
        <select id='ty' className='elements'>
            <option>Kitchen</option>
            <option>BedRoom</option>
            <option>BathRoom</option>
        </select>
        <input id='na' type='text' className='elements' placeholder='name of room'/>
        <input id='color' type='text' className='elements' placeholder='color of room'/>
        <button id='addRoom' className='elements' onClick={()=>{check()}}>ADD ROOM</button>
    </div>
  )
}
