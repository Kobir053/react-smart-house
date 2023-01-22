import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import Title from './components/Title';
import HomePage from './components/HomePage';
import Room from './components/Room';
import AddRoom from './components/AddRoom';

function App() {

  const [roomsArr,setRoomsArr] = useState([]);

  const [lastRoom,setLastRoom] = useState(-1);


  return (
    <div className="App">

      <Title/>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage rooms = {roomsArr} lastRoom = {lastRoom} setLastRoom = {setLastRoom}/>}/>
          <Route path='/add' element={<AddRoom rooms = {roomsArr} setRoom = {setRoomsArr}/>}/>
          {/* {()=>{logRooms()}} */}
          <Route path='/room' element={<Room rooms={roomsArr} room = {roomsArr[lastRoom]} setRoom = {setRoomsArr}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export class RoomClass{
  color = '';
  products = [];

  constructor(name,type){
    this.nameOfRoom = name;
    this.typeOfRoom = type;
  }
  
}
export class Product{
  status = false;

  constructor(name){
    this.name = name;
  }
}