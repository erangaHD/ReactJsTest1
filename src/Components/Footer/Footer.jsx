import React from 'react'
import getImageUrl from '../../utils'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer>
        <img src={getImageUrl("wave.png")} alt="footer" className="topImg" />

        <div className="footerInfo">
            <div className="footerDescription">
                <img src={getImageUrl('logo3.png')} alt="" className="footerLogo"/>
                <div className="summary">
                    Lorem ipsum, 
                    dolor sit amet consectetur adipisicing elit. 
                    Eum, architecto ullam! Quae dolore vitae 
                    possimus nulla pariatur tempora magnam culpa 
                    quaerat corporis!
                </div>
            </div>

            <div className="contactDetails">
                <h2 className="contactTitle">Contact us</h2>
                <div className="contactLine">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='contactIcon'/> 
                    <p className="plineDetail">World Trade Center, Colombo</p>
                </div>
                <div className="contactLine">
                    <FontAwesomeIcon icon={faPhone} className='contactIcon' /> 
                    <p className="plineDetail">011 123 1234</p>
                </div>
                <div className="contactLine">
                    <FontAwesomeIcon icon={faEnvelope} className='contactIcon' /> 
                    <p className="plineDetail">info@sample.com</p>
                </div>
            </div>

            <div className="subscription">
                <h2 className="contactTitle">Subscribe Newsletter</h2>
                <input type="text" placeholder='Your Email'/>
                <button className="subsribeBtn">Subsribe</button>
            </div>
        </div>

        <div className="fotterText">
            <div className="footerLine" />
            <h3>Website crafted by HDE</h3>
        </div>
    </footer>
  )
}

export default Footer