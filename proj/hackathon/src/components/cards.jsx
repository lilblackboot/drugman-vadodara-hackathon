import React from 'react'
import './cards.css'

//props contain : title,states

const Cards = (props) => {
    console.log("card : " + props.title)
  return (<div>
    <div className='card'>
        <div className='title'>{props.title}</div>
        <div className='state'>{props.states}</div>
    </div>
 </div> )
}

export default Cards