import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import LoadingScreen from '../components/pokedex/LoadingScreen'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  

  useEffect(() => {
    if(typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  const userName = useSelector(state => state.userName)
  
  /* paginación */

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(6)

  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className='pokedex-container'>
      {
        pokemons ?
          <>
            <div className='container_headerANDaside'>
              <header className='pokedex-container_header'>
                <img className='pokedex-container_title' src="http://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />
                <p className='pokedex-container_greeting'>Welcome <span>{userName}</span>, here you can find your favorite pokemon.</p>
              </header>
              <aside className='pokedex-container_aside'>
                <InputSearch />
                <SelectByType 
                  setTypeSelected={setTypeSelected}
                />
              </aside>  
            </div>
            <main className='pokedex-container_main'>
              <div className='card-container'>
                {
                  pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                    <CardPoke 
                      key={pokemon.url}
                      url={pokemon.url}
                    />
                  ))
                }
              </div>
              <div>
                <Pagination 
                  pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </main>      
          </>
        :
          <LoadingScreen />
      }
    </div>
  )
}

export default Pokedex