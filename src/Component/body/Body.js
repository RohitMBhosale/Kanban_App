import React from 'react'
import List from './list'

export default function Body(){

  const image = "https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=600"

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover"
    style={{backgroundImage:`url(${image})`}}>
        <div className="flex flex-wrap"><List/></div>
    </div>
  )
}
