import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="" width={333} height={250}/>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Card
