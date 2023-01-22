import React,{useState} from 'react'
import AddProduct from './AddProduct';
import Product from './Product';
import './room.css'

export default function Room(props) {

    const [flag,setFlag] = useState(false);

    // const [situation,setSituation] = useState(false);

    const productsComponent = ()=>{
        if(flag == true)
            return <AddProduct room = {props.room} setFlag = {setFlag}/>
        else 
            return;
    }

    // const styleOfDiv = (situation)=>{
    //     if(situation == false)
    //         return 'red';
    //     else 
    //         return 'green';
    // }

    const productsDiv = ()=>{
        // for(let i = 0;i < props.rooms.length;i++){
        //     if(props.rooms[i].nameOfRoom == props.lastRoom.nameOfRoom){
            // if(props.room.products != null)
                return props.room.products.map((val,ind)=>{
                    // console.log(val);
                    return <Product product={val} index = {ind} room={props.room} rooms = {props.rooms} setRoom = {props.setRoom}/> 
                })
            }


  return (
    <div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <div id='details'>
                <p>name:  "{props.room.nameOfRoom}"</p>
                <p>{props.room.typeOfRoom}</p>
            </div>
                {productsComponent()}
        </div>
        <div style={{display: 'flex',justifyContent: 'space-around'}}>
            {productsDiv()}
        </div>
        <button id='bu' onClick={()=>{setFlag(true)}}>add device</button>
    </div>
  )
}
