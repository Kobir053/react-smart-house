import React,{useState} from 'react'
import './room.css'

export default function Product(props) {
    // console.log(props.product);

    const [color,setColor] = useState('')

    const productStatus = ()=>{
        if(props.product.status==false){
            props.product.status = true;
            setColor('green');
        }
        else{ 
            props.product.status = false;
            setColor('red');
        }
    }

    const removeProduct = ()=>{
        console.log('succes');
        props.room.products.splice(props.index,1);
        props.setRoom([...props.rooms])
        // console.log(props.room.products);
    }

    const setProductColor = ()=>{
        if(props.product.status == false)
            return 'rgb(215 8 8)';
        else 
            return 'rgb(29 209 29)';
    }

  return (
    <div className='productDiv' style={{backgroundColor: setProductColor()}}>
        <button id='removeButton' onClick={()=>{removeProduct()}}>Remove <br/> device</button>
        <div id='div' style={{padding: '10px',width: '90px', 
                                                    backgroundColor: setProductColor(),
                                                    height: '120px',borderRadius:'4px',
                                                    display: 'flex',alignItems: 'center'}}
                                                    onClick={()=>{productStatus()}}>
            {props.product.name}
        </div>
    </div>
  )
}
