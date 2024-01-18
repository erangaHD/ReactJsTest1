import React from 'react'
import './Home.css'
import getImageUrl from '../../utils'

const Home = () => {
  return (
    <div className='container' id='home'>
        <div className="content">
            <div className="contentText">
                <h2 className="title">Best Digital Agency</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sed corporis fugiat adipisci veniam odio ipsa dolorem 
                    itaque ea tempora dicta.
                </p>
                <a className="videoLink" href='https://www.youtube.com/watch?v=yRdjuVIkKHE&list=PLuz8v_brMXJaOnZmyppjsx5RfSkVbbfT7'
                target='blank'>
                    <img src={getImageUrl('play.png')} alt="play" className="playBtn" />
                    <span>Watch Video</span>
                </a>
            </div>
            <div className="contentImg">
                <img src={getImageUrl('Meeting-Vector-PNG.png')} alt="Main" />
            </div>
        </div>
        <div className="bottomImg"><img src={getImageUrl('wave.png')} alt="Bottom" /></div>
    </div>
  )
}

export default Home