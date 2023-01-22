import React from 'react'
import { Link } from 'react-router-dom'

export default function Add() {
  return (
    <div>
        <Link to='/add'><button style={{height: '150px',width: '150px',alignItems:'center',
                                        borderRadius: '75px',border: 'none',fontSize: '80px',
                                        backgroundColor: 'rgb(49 167 35)',marginTop: '40px'}}>+</button></Link>
    </div>
  )
}
