import React from 'react'
import getImageUrl from '../../utils'
import './TestimonialsCard.css'

const TestimonialsCard = (props) => {
  return (
    <div className='tCardContainer'>        
        <div className="tCardContent">
            <p className="tCardDescription">{props.description}</p>
            <div className="clientDetails">
                <img src={getImageUrl(props.image)} alt="client" className="clientImg" />
                <div className="clientID">
                    <h4 className="clientName">{props.name}</h4>
                    <span className="clientCompany">{props.company}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard