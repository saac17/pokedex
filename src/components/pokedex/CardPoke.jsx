import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    
    console.log(pokemon);

  return (
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className={`card-poke_header color-${pokemon?.types[0].type.name}`}>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
            <section className='card-poke_body'>
                <h3 className='card-poke_name'>{pokemon?.name}</h3>
                <ul className='card-poke_types-container'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.slot} className='card-poke_type'>{type.type.name}</li>
                        ))
                    }
                </ul>
                <p className='card-poke_type-label'>Type</p>
                <hr />
            </section>
            <ul className='card-poke_stats-container'>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.name} className='card-poke_stat'>
                            <span className='card-poke_stat-label'>{stat.stat.name}</span>
                            <span className='card-poke_stat-number'>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>     
    </article>
  )
}

export default CardPoke