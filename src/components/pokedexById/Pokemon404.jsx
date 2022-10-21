import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokeError404.css'

const Pokemon404 = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/pokedex");
  }

  return (
    <div className='error-container'>
      <div className='error-container_info'>
        <h1 className='info-title'>POKEMON NOT FOUND</h1>
        <img
          src="https://mystickermania.com/cdn/stickers/memes/sticker_2134-512x512.png"
          alt=""
        />
        <button onClick={handleBack} className="Btn__Back">Back</button>
      </div>
    </div>
  )
}

export default Pokemon404