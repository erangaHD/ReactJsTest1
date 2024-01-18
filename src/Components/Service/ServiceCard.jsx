import React from 'react'
import getImageUrl from '../../utils'
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div className='cardContainer'>
        <img src={getImageUrl(`${props.imgUrl}`)} alt={props.title} className="cardImg" /> 
        <h3 className="cardTitle">{props.title}</h3>
        <p className="description">{props.description}</p>
    </div>
  )
}

export default ServiceCard