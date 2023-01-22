import React from 'react'
import { Product } from '../App';
import './room.css'

export default function AddProduct(props) {

    const isOne = (item)=>{
        return item === 'Stereo-System';
    }

    const addToRoom = ()=>{
        let selected = document.getElementById('selectProduct').value;
        // debugger
        switch(selected){
            case 'Heater':
                if(props.room.typeOfRoom != 'BathRoom'){
                    alert('Heater can only added to bathRoom');
                    return;
                }
                else
                    break;
            case 'Stereo-System':
                for(let i = 0;i < props.room.products.length;i++)
                    if(props.room.products[i].name != 'Stereo-System')
                        continue;
                    else{ 
                        alert('cannot add more stereo-systems');
                        return;
                    }
                break;
            default:
                if( props.room.products.length >= 5){
                    alert('cannot add more than 5 devices')
                    props.setFlag(false);
                    return;
                }
        }
        let myProduct = new Product(selected);
        myProduct.status = false;
        props.room.products.push(myProduct);
        // props.rooms[props.lastRoom].setProduct();
        // console.log(props.rooms[props.lastRoom].products.color);
        // props.setRoom([...props.rooms]);
        props.setFlag(false);
    }

  return (
    <div className='addProductDiv'>
        <div>
            <select id='selectProduct'>
                <option>Lamp</option>
                <option>Air-Conditioner</option>
                <option>Stereo-System</option>
                <option>Heater</option>
            </select>
            <br/><br/>
            <button id='bu-add' onClick={()=>{addToRoom()}}>Add</button>
        </div>
        <button id='bu-x' style={{height: '25px',width: '25px'}} onClick={()=>{props.setFlag(false)}}>x</button>
    </div>
  )
}
