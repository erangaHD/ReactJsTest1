import React from 'react'
import services from '../../data/service.json'
import './Service.css'
import ServiceCard from './ServiceCard'

const serviceDisplay = services.slice(0, 3);

const Service = () => {

  return (
    <section id='service' className='serviceContainer'>
        <div className="serviceTitle">
            <h2>What We Do</h2>
            <div className='underLine'></div>
        </div>

        <div className="serviceCards">
            

                {
                    serviceDisplay.map((ser, id) => {
                        return <div className="card"><ServiceCard imgUrl={ser.imgUrl} title={ser.title} description={ser.description}/></div>
                    })
                }
            
            
        </div>

        <button className="viewAll">All Services</button>
    </section>
  )
}

export default Service