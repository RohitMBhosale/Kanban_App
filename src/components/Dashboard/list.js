// import React from 'react'
// import { useSelector } from 'react-redux';
// import styles from './list.module.css'
// import Card from './Card'
// import AddNew from './AddNew';
// import { useRef } from 'react';
// import {Edit } from '../redux/ListSlice'


//using useselector we can access list in store

// export default function List() {

    // const inputRef = useRef(true)

    // const listItem = useSelector(store => store.ListSlice.list)
    //accessing only list array from ListSlice

    // const changeFocus = () =>{
    //     inputRef.current.disabled = false;
    //     inputRef.current.focus();
    // }
    // const update = (id, value , e) =>{
    //     if(e.which === id){
    //         Edit({id, item: value})
    //         inputRef.current.disabled = true
    //     }  
    // }
    // const removeFocus = () =>{
    //     inputRef.current.disabled = true;
    // }
//     <div className={styles.main}>
//       <button className={styles.add} onClick={openForm}>+ Add {type? "Card": "list"}</button>
//       {isFormVisible && <form  onSubmit={HandleSubmit} className={styles.input}>
//             <input className={styles.inp} value={inputVal} 
//                    onChange={handleChange}
//                    placeholder={type ? "Enter Card name":"Enter list name"}
//                    />
//             <div className={styles.btn}>
//             <button onClick={hideForm} className={styles.btn1}>❌</button>
//             <button onClick={HandleSubmit} className={styles.btn1}>save</button>
//             </div>
//         </form>}
//     </div>
//   )
// }

//     return (
//         <div className={styles.boards}>   
//         <div className={styles.board}>
//             <div className={styles.add_board}>
//                 <AddNew />
//             </div>
//         </div>
//             {listItem.map((list) => (
//                 <div className={styles.list} key={list.id}>
//                     <div className={styles.title}>
//                     <div className={styles.mainlist}>
//                     <blockquote  contenteditable="true" >
//                         {list.title}
//                         </blockquote> 
//                         </div>  
                        
//                         {list?.children?.length > 0 && list.children.map((children) => <div className={styles.list_addnew}> <Card key={children.id} cardInfo={children} /></div>)}
                        
//                         <div >
//                             <AddNew type="card" parentId={list.id} />
//                         </div>
//                     </div>
//                 </div>
//             ))}


//         </div>
//     )
// }
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './list.module.css'
import Card from './Card'
import AddNew from './AddNew';
import { removechild, reassign } from '../redux/ListSlice'
import { useDispatch } from "react-redux";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


//using useselector we can access list in store


export default function List() {
        const listItem = useSelector(store => store.ListSlice.list)
        const dispatch = useDispatch();

        const dragEndHandler = (result) => {

            console.log("result",result)
            const sourceId = result?.source?.droppableId;
            const destinationId = result?.destination?.droppableId;
        
            let holder1 = {}
            listItem.map((list) => {
              if (list.id == sourceId) {
                holder1 = list.children[result.source.index];
                dispatch(
                  removechild({
                    childIndex: result.source.index,
                    parentId: list.id,
                  })
                );
                dispatch(
                  reassign({
                    destination: destinationId,
                    add: holder1,
                    insertIndex: result.destination.index
                  })
                );
              }
            });
        
        
        
          } 


    return (
      <DragDropContext onDragEnd={(results) => dragEndHandler(results)} >
        <div className={styles.boards}>
          <div className={styles.board}>
            <div className={styles.add_board}>
              <AddNew />
            </div>
          </div>
  
          {listItem.map((list, index) => (
            <Droppable key={index} droppableId={String(list.id)}>
              {(provided) => (
                <div
                  className={styles.list}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className={styles.title}>
                    <div className={styles.mainlist}>
                      <blockquote contentEditable="true">
                        {list.title}
                      </blockquote>
                    </div>
  
                    {list?.children?.length > 0 &&
                      list?.children.map((card, index) => (
                       <Draggable key ={card.id}
                       draggableId={String(card.id)}
                       index={index}>
                        {
                            (provided) => (
                                <div ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                 className={styles.list_addnew}
                                 >
                                <Card key={card.id} cardInfo={card} />
                              </div>
                            )
                        }
                       </Draggable>
                      ))}
                    <div>
                      <AddNew type="card" parentId={list.id} />
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    );
  }