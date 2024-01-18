import React from 'react'
import getImageUrl from '../../utils'
import './About.css'
import difference from '../../data/different.json'

const About = () => {
  return (
    <section className="aboutContainer" >
        <div className="aboutTitle" id='about'>
            <h2>Why Choose Us?</h2>
            <div className='underLineAbout'></div>
        </div>
        <div className="aboutContent">
            <div className="aboutDetails">

            <h3>Why we are different</h3>
            <ul>
                
                {
                    difference.map((element, id) => {
                        return <li className="aboutDetail" key={id}>{element}</li>
                    })
                }
                
            </ul>
            </div>
            <img src={getImageUrl('Meeting-Vector-PNG-HD-Isolated.png')} alt="About" className="aboutImg" />
        </div>
    </section>
  )
}

export default About