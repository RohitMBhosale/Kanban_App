import React from 'react'
import List from './list'
import styles from './Body.module.css'

export default function Body(){

  // const image = "https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <div className={styles.mainlist}>
        <div className={styles.list}>
        <List/>
        </div>
    </div>
  )
}