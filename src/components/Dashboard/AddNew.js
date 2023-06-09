import React from 'react'
import { useState } from 'react'
import { AddList, addCard } from '../redux/ListSlice'
import { useDispatch } from 'react-redux'
import styles from './AddNew.module.css'
import { nanoid } from 'nanoid'

export default function AddNew({type, parentId}){

    const [inputVal, setInputVal] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(false)
   console.log("type", type)

    const dispatch = useDispatch();
    
    function HandleSubmit(e){
        e.preventDefault();

        if(type){
            dispatch(addCard({id:nanoid(4),title:inputVal, parentId:parentId})) 
        }else{

        dispatch(AddList({id:nanoid(4),title:inputVal}))   
        }    
        setInputVal("") 
        hideForm();                                                       // console.log("inputVal")
                                                  // empty input box
    }
    function handleChange(e){
        setInputVal(e.target.value)
    }
     function openForm(){
        setIsFormVisible(true)
     }
     function hideForm(){
        setIsFormVisible(false)
     }

  return (
    <div className={styles.main}>
      <button className={styles.add} onClick={openForm}>+ Add {type? "Card": "list"}</button>
      {isFormVisible && <form  onSubmit={HandleSubmit} className={styles.input}>
            <input className={styles.inp} value={inputVal} 
                   onChange={handleChange}
                   placeholder={type ? "Enter Card name":"Enter list name"}
                   />
            <div className={styles.btn}>
            <button onClick={hideForm} className={styles.btn1}>❌</button>
            <button onClick={HandleSubmit} className={styles.btn1}>save</button>
            </div>
        </form>}
    </div>
  )
  }