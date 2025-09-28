import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.png'
import {Download} from 'lucide-react'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1>Hello. I'm <span>Suborno Maksuda</span>, an aspiring Software Engineer <br /> based on Bangladesh.</h1>
      <div className='hero-action'>
        <div className="hero-resume">My Resume <Download className='cv-icon'/></div>
      </div>
    </div>
  )
}

export default Hero
