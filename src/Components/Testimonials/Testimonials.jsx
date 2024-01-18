import React from 'react'
import clients from '../../data/clients.json'
import TestimonialsCard from './TestimonialsCard'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonialsContainer'>
        <div className="testimonialsTitle" id='testimonials'>
            <h2>What Clients say?</h2>
            <div className='underLineTestimonial'></div>
        </div>
        <div className="testimonialCards">
            {
                clients.map((elemen, id) => {
                    return <TestimonialsCard name={elemen.name} company={elemen.company} image={elemen.ImgUrl} description={elemen.description} className='tCard'/>
                })
            }
        </div>
    </div>
  )
}

export default Testimonials