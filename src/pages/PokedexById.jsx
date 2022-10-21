import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexById/Pokemon404'
import './styles/pokedexById.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [id])



  if (hasError) {
    return <Pokemon404 />
  }
  return (
    <article className='pokedexById'>
      <header className={`pokedexById_header color-${pokemon?.types[0].type.name}`}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='pokedexById_section-name'>
        <h3 className='section-name_id'>#{pokemon?.id}</h3>
        <div className='section-name_container-name'>
          <hr />
          <h2 className='section-name_name'>{pokemon?.name}</h2>
          <hr />
        </div>
        
      </section>
      <section className='pokedexById_section-measures'>
        <ul className='section-measures_list'>
          <div>
            <li className='section-measures_list-label'>Weight</li>
            <li className='section-measures_list-data'>{pokemon?.weight}</li>  
          </div>
          <div>
            <li className='section-measures_list-label'>Height</li>
            <li className='section-measures_list-data'>{pokemon?.height}</li>  
          </div>
        </ul>
      </section>
      <div className='pokedexById_typesANDSkills'>
        <section className='pokedexById_section-types'>
          <h3 className='section-types_title'>Type</h3>
          <ul className='section-types_list'>
            {
              pokemon?.types.map(type => (
                <li className={`section-types_list-type color-${type.type.name}`} key={type.slot}>{type.type.name}</li>
              ))
            }
          </ul>
        </section>
        <section className='pokedexById_section-skills'>
          <h3 className='section-skills_title'>Skills</h3>
          <ul className='section-skills_list'>
            {
              pokemon?.abilities.map(skill => (
                <li className='section-skills_list-skill' key={skill.slot}>{skill.ability.name}</li>
              ))
            }
          </ul>
        </section>
      </div>
      <section className='pokedexById_section-stats'>
        <h2 className='section-stats_title'>Stats</h2>
        <ul className='section-stats_list'>
            {
              pokemon?.stats.map(stat => (
                <li className='section-stats_list-li' key={stat.stat.name} >
                  <div className='stats_list-li_span'>
                    <span className='section-stats_list-label'>{stat.stat.name}</span>
                    <span id='stat' className='section-stats_list-stat'>{stat.base_stat} / 150</span>
                  </div>
                  <div className='barr-container'>
                    <div style={{width: `${(stat.base_stat / 150) * 100}%`}} className='element-barr'></div>
                  </div>   
                </li>
              ))
            }
        </ul>
      </section>
      <section className='pokedexById_section-moves'>
        <h2 className='section-moves_title'>Movements</h2>
        <ul className='section-moves_list'>
          {
            pokemon?.moves.map(move => (
              <li className='section-moves_list-move' key={move.move.url}>{move.move.name}</li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokedexById