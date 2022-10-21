import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <div className='pokedex'>
      <img className='pokedex_title' src="http://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />
      <div className='pokedex-form'>
        <h2 className='pokedex_subtitle'>Hi Trainer</h2>
        <p className='pokedex_text'>Give me your name to see the pokedex</p>
        <FormHome/>  
      </div>
      
    </div>
  )
}

export default Home