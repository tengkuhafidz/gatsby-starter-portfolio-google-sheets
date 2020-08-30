import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import { socials } from '../utils/constants'

const Hero: React.FC = () => {
  const renderSocials = () => {
    return socials.map((socialMedia) => {
      if (socialMedia.url) {
        return (
          <a
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-2 hover:text-gray-900 text-gray-700 cursor-pointer`}
            key={socialMedia.faClass}
          >
            <i className={`fab ${socialMedia.faClass} text-2xl`}></i>
          </a>
        )
      }
      return <span key={socialMedia.faClass}></span>
    })
  }
  return (
    <div className="mx-auto bg-gray-400 text-center py-8 object-center">
      <img src="https://media.devlabs.academy/file/hafidz/profile-1.png" className="rounded-full h-32 inline" />
      <h1 className="text-4xl">Tengku Hafidz</h1>
      <p className="mb-2">The (hopeful) dad who codes. teehee. 🇸🇬</p>
      {renderSocials()}
    </div>
  )
}

export default Hero
