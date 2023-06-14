
import './App.css';
import Body from './components/Dashboard/Body';
import styles from './App.css';
import { Provider } from 'react-redux';
import store from './components/redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./components/Description/description"
import {IoIosBrush  } from "react-icons/io";


function App() {

const handleBackgroundColor = (e)=>{
    const body = document.querySelector('body')
    body.style.background = getRandomColor()
}
function getRandomColor(){
  let letters = '01234567890ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  return color;
}

  return (
<div className="App">
     <BrowserRouter>
     <Provider store={store}>
     <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/card/:id"' element={<Description />} />
      
     </Routes>
     </Provider>
     </BrowserRouter> 
     <button className="backGround_btn" onClick={handleBackgroundColor}><IoIosBrush/>BackGround</button>
   </div>
  
  );
}

export default App;

