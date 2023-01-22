import React from 'react'
import Add from './Add'
import Rooms from './Rooms';
import './homePage.css';

export default function HomePage(props) {

    // let arr = [];

    const rooms = ()=>{
        if(props.rooms != null)
            return props.rooms.map((val,ind)=>{
                return <Rooms index={ind} room = {val} lastRoom = {props.lastRoom} setLastRoom = {props.setLastRoom}/>
            })
        else 
            return;
    }
  return (
    <div>
        <h2>rooms</h2>
        <div className='divOfRooms'>
            {rooms()}
        </div>
        <Add/>
    </div>
  )
}
