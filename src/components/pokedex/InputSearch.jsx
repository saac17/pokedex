import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

  return (
    <form onSubmit={submit} className='form-search'>
        <input className='form-search_input' id='search' type="text" placeholder='search a pokemon' />
        <button className='form-search_button'>Search</button>
    </form>
  )
}

export default InputSearch