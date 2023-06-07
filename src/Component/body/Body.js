import React from 'react'
import List from './list'
import './Body.css'

export default function Body(){


  return (
    <div className="app">
      <div className='app-navbar'>
      <h2>kanban</h2>
    </div>
        <div className="app-outer">
        
          <List/>
        </div>
    </div>
  )
}
