import React from 'react'
// import styles from './Card.module.css'
import { useState } from 'react'
import Discription from '../Description/description'
// import { useNavigate } from "react-router-dom";

export default function Card({cardInfo}){

  const [isFormVisible, setIsFormVisible] = useState(false)
  // const navigate = useNavigate();
  

function handleBoxopen(card, index){
  setIsFormVisible(true)
  // navigate(`/description/${card.title}`);
}
function hideForm(){
  setIsFormVisible(false)
}
  return (
    <div >
    <blockquote  contenteditable="true" onClick={handleBoxopen} >
    {cardInfo.title}
    </blockquote> 
    {isFormVisible && <form >
    < Discription/>
    <button onClick={hideForm}>❌</button>
    </form>}
                        
    </div>
  )
}
