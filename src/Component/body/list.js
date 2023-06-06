import React from 'react'
import Card from './Card'
import AddNew from './AddNew'
import { useSelector } from 'react-redux';
import styles from './list.module.css'

//using useselector we can access list in store

export default function List() {

    
    const listItem = useSelector(store => store.ListSlice.list)
    //accessing only list array from ListSlice

    return (
        <>
            {listItem.map((list) => (
                <div className={styles.container} key={list.id}>
                    <div className="p-3 bg-gray-200">
                        <div className="mb-3">{list.title}</div>
                        {list?.children?.length > 0 && list.children.map((children)=><Card key={children.id} cardInfo={children}/>)}
                        <div className="mt-4">
                            <AddNew type="card" parentId={list.id}/>
                        </div>
                    </div>
                </div>
            ))}
            <div className="p-3 w-1/3">
                <div className="p-3 bg-gray-200">
                    <AddNew />
                </div>
            </div>

        </>
    )
}
