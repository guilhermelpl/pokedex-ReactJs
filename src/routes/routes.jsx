import React, { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'


export const Router = () => {
  const [pokemonDados, setPokemonDados] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setPokemonDados={setPokemonDados}/>} />
                <Route path='/:pokemon' element={<Pokemon pokemonDados={pokemonDados}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router