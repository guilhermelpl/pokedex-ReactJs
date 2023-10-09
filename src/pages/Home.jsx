import { useEffect, useState } from 'react'

import { Box, Container, Grid, Modal } from '@mui/material';
import Navbar from '../components/Navbar'
import PokemonCard from '../components/Card';

import '../assets/css/App.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function Home({ setPokemonDados }) {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, [])

  function getPokemons() {
    var endpoints = [];
    for (var i = 1; i < 199; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((resposta) => {
      setPokemon(resposta)
      setLoading(false)
    })
  }


  function PokemonFilter(name) {
    if (name === "") {
      getPokemons();
    }
    var filteredPokemons = [];

    for (var i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        filteredPokemons.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemons)
  }

  return (
    <div style={{ backgroundColor: "#f6f7f9" }}>
      <Navbar Filter={PokemonFilter} />
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="false">
          <Grid container>
            {pokemon?.map((item, index) => (
              <Grid item xs={12} md={2} key={index} className='mb-1'>
                <Box onClick={() => {
                  navigate(`/${item.data.name}`)
                  setPokemonDados(item.data)
                }}>
                  <PokemonCard
                    item={item.data}
                    types={item.data.types}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  )
}


export default Home
