import React from 'react'
import Card from './Card'
import AddNew from './AddNew'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './list.css'
import { RiEdit2Line } from 'react-icons/ri';


export default function List() {
    const [editableListId, setEditableListId] = useState(null);

    const listItem = useSelector(store => store.ListSlice.list)
  
    const handleEditTitle = (listId) => {
      setEditableListId(listId);
    };
  
    const handleSaveTitle = () => {
        // const updatedTitle = list.title;
        setEditableListId(null);
    };
  
    return (
      <>
        <div className="boards">
          <div className="board">
            <div className="add-board">
              <AddNew />
            </div>
  
            {listItem.map((list) => (
              <div className="list" key={list.id}>
                <div className="title">
                  {editableListId === list.id ? (
                    <>
                      <input type="text" value={list.title} onChange={(e) => list.title = e.target.value} />
                      <button onClick={handleSaveTitle}>Save</button>
                    </>
                  ) : (
                    <>
                      <RiEdit2Line onClick={() => handleEditTitle(list.id)} />
                      {list.title}
                    </>
                  )}
                </div>
                {list?.children?.length > 0 && list.children.map((children) => <Card key={children.id} cardInfo={children} />)}
                <div className="list-addnew">
                  <AddNew type="card" parentId={list.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
//using useselector we can access list in store

// export default function List() {

    
//     const listItem = useSelector(store => store.ListSlice.list)
//     //accessing only list array from ListSlice

//     return (
//         <>

//             <div className="boards">
//                 <div className='board'>
//                 <div className="add-board">
//                     <AddNew />
//                 </div>
            
//             {listItem.map((list) => (
//                 <div className='list' key={list.id}>
//                         <div className="title">
//                           <RiEdit2Line/> 
//                             {list.title}
//                             </div>
//                         {list?.children?.length > 0 && list.children.map((children)=><Card key={children.id} cardInfo={children}/>)}
//                         <div className="list-addnew">
//                             <AddNew type="card" parentId={list.id}/>
//                         </div>
//                 </div>
//             ))}
//                 </div>
//             </div>
           

//         </>
//     )
// }
/*  // const [isEditing, setIsEditing] = useState(false);
  // const [buttonText, setButtonText] = useState('+ Add');
{/* {isEditing ? (
        <div className='header'>
          <input
            type="text"
            value={buttonText}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={openForm}>{buttonText}</button>
          <LuMoreVertical onClick={handleIconClick} />
        </div>
      )} */
    //   const handleIconClick = () => {
    //     setIsEditing(true);
    //   };
    
    //   const handleInputChange = (e) => {
    //     setButtonText(e.target.value);
    //   };
    
    //   const handleSaveClick = () => {
    //     setIsEditing(false);
    //   };
    
    //   function openForm() {
    //     setIsFormVisible(true);
    //   }
    