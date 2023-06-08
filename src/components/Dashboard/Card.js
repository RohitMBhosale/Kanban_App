import React from 'react'
// import styles from './Card.module.css'
import { useState } from 'react'
import Discription from '../Description/description'

export default function Card({cardInfo}){

  const [isFormVisible, setIsFormVisible] = useState(false)

function handleBoxopen(){
  setIsFormVisible(true)
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
