import Card from "./card"
import Newcard from "./AddNewCard/newcard"
import { useSelector } from "react-redux"

export default function List(){
     const listItem = useSelector(store => store.listSlice.list)
    return(
        <>
       {listItem.length && listItem.map((list) => <div key={list.id} >{list.title}</div>)} 
     <div>
        <Card/>
        <Newcard/>
     </div>
        </>
    )
}