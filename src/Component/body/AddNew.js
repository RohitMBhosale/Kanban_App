import React from 'react'
import { useState } from 'react'
import { AddList, addCard } from '../redux/ListSlice'
import { useDispatch } from 'react-redux'

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
        }                                                           // console.log("inputVal")
        setInputVal("")                                            // empty input box
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
    <div>
      <button onClick={openForm}>+ Add New</button>
      {isFormVisible && <form  onSubmit={HandleSubmit} className="mt-3">
            <input valu={inputVal} onChange={handleChange}/>
            <div className="mt-3">
            <button onClick={hideForm} className="mr-3">Delete</button>
            <button onClick={HandleSubmit} className="px-3 py-1 bg-blue-500">save</button>
            </div>
        </form>}
    </div>
  )
}
