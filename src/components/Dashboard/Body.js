import React from 'react'
import List from './list'
import styles from './Body.module.css'
import Navbar from '../Navbar/navbar'

export default function Body(){

  return (
    <div className={styles.mainlist}>
     
        <div className={styles.list}>
        <div>
        <Navbar/>
        </div>
        <List/>
       
        </div>
        
    </div>
  )
}