import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "ListSlice",
    initialState:{
        list:[] ,
                  //state.list.push(actions.payload)=added list will be added in this array of list in forn of object
    },
    reducers:{
       AddList:(state,actions)=>{
        state.list.push(actions.payload)
       console.log(actions)
       },
       addCard:(state,action)=>{
        console.log(action,state.list)
        state.list.forEach((item)=>{
            if(item.id===action.payload.parentId){
              if(Object.hasOwn(item, "children")){
                item.children.push(action.payload)
              }
              else{
                item.children=[]
                item.children.push(action.payload)
              }
            }
        })

       },
       reassign : (state,action)=>{
        const { destination, add, insertIndex } = action.payload;
  
       state.list.map((e)=>{
        if(e.id===destination){
          e.children.splice(insertIndex,0,add)
        }
       })
      },
      changeBackground: (state, action) => {
        state.background.push(action.payload);
      },
      removechild : (state,action)=>{
        const { childIndex, parentId } = action.payload;
        state.list.map((e) => {
          if (e.id === parentId) {
            e.children.splice(childIndex, 1);
          }
        });
      }
  
    }
})
export const {AddList,addCard,removechild, reassign,changeBackground} = ListSlice.actions;
export default ListSlice.reducer;
