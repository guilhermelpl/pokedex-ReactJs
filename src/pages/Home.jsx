import { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/Card";

import Loader from '../components/Loader/'

import axios from "axios";
import Template from "../components/Template";

function Home({ setPokemonDados }) {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  function getPokemons() {
    var endpoints = [];
    for (var i = 1; i < 199; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((resposta) => {
      setPokemon(resposta);
      setLoading(false);
    });
  }

  const handleFilter = (name) => {
    if (name === "") {
     setFilteredPokemons(pokemon);
    } else {
      const filteredPokemons = pokemon.filter((item) => item.data.name.includes(name));
      setFilteredPokemons(filteredPokemons);
    }
  };

  return (
    <Template>
      <Navbar Filter={handleFilter} />
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="false">
          <Grid container>
            {filteredPokemons?.map((item, index) => (
              <Grid item xs={12} md={2} key={index} className="mb-1">
                <Box>
                  <PokemonCard item={item.data} types={item.data.types} setPokemonDados={setPokemonDados} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Template>
  );
}

export default Home;
