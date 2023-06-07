import React from 'react'
import { useState } from 'react'
import { AddList, addCard } from '../redux/ListSlice'
import { useDispatch } from 'react-redux'
import './AddNew.css'
// import styles from './AddNew.module.css'

export default function AddNew({type, parentId}){

    const [inputVal, setInputVal] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(false)
   console.log("type", type)

    const dispatch = useDispatch();
    
    function HandleSubmit(e){
        e.preventDefault();

        if(type){
            dispatch(addCard({id:Math.random(),title:inputVal, parentId:parentId})) 
        }else{

        dispatch(AddList({id:Math.random(),title:inputVal}))   
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
    <div className='wrapper'>
      <button className='add-bttn' onClick={openForm}>+ Add {type? "Card": "list"}</button>
      {isFormVisible && <form  onSubmit={HandleSubmit} className='add-list-form'>
            <input className='form-input' value={inputVal} 
                   onChange={handleChange}
                   placeholder={type ? "Enter Card name":"Enter list name"}
                   />
            <div className='form-bttn'>
            <button onClick={hideForm} className='cross-bttn'>❌</button>
            <button onClick={HandleSubmit} className='save-bttn'>save</button>
            </div>
        </form>}
    </div>
  )
}