import React from 'react'
import getImageUrl from '../../utils'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <section className='socialContainer'>
        <div className="socialTitle" id='contact'>
            <h2>Find us on Social Media</h2>
        </div>
        <div className="socialIcons">
            <img src={getImageUrl('fb logo.png')} alt="Facebook" className="socialIcon" />
            <img src={getImageUrl('Instagram_logo_2016.svg.webp')} alt="Instagram" className="socialIcon" />
            <img src={getImageUrl('twitter-icon-png.png')} alt="Twitter" className="socialIcon" />
            <img src={getImageUrl('whatsapp.png')} alt="whatsapp" className="socialIcon" />
            <img src={getImageUrl('snapchat-transparent.png')} alt="snapchat" className="socialIcon" />
            <img src={getImageUrl('linkedin.png')} alt="linkedin" className="socialIcon" />
        </div>
    </section>
  )
}

export default SocialMedia