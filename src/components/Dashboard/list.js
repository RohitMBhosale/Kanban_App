import React from 'react'
import { useSelector } from 'react-redux';
import styles from './list.module.css'
import Card from './Card'
import AddNew from './AddNew';
import { removechild, reassign} from '../redux/ListSlice'
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useNavigate } from "react-router";
import Discription from '../Description/description';



//using useselector we can access list in store


export default function List() {
        const listItem = useSelector(store => store.ListSlice.list)
        const dispatch = useDispatch();
        const navigate = useNavigate();
        

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
          function handleClick(card, index) {
            navigate(`/Discription/${card.title}`);
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
                                <Card 
                                key={card.id} 
                                cardInfo={card} 
                                onClick={() => handleClick(card, index)}
                                index={index} 
                                
                                />
                                
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