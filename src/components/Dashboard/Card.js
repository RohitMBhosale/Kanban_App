import React from 'react'
import { useState } from 'react'
import Discription from '../Description/description'
import { useNavigate } from "react-router-dom";
import { RxDotsHorizontal } from "react-icons/rx";
import styles from './Card.module.css'

export default function Card({ cardInfo }) {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const navigate = useNavigate();


  function handleBoxopen(card, index) {
    setIsFormVisible(true)

  }
  function hideForm() {
    setIsFormVisible(false)
  }

  function handleClose() {
    navigate("/");
  }
  return (
    <div className={styles.parent} >
      <blockquote contenteditable="true"  >
        {cardInfo.title}
      </blockquote>
      <RxDotsHorizontal onClick={handleBoxopen} />
      {isFormVisible && <form >
        < Discription />
        
</form>}
      

    </div>
  )
}
