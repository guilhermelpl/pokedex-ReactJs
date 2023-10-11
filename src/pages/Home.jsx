import { useEffect, useState } from "react";

import { Box, Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/Card";

import "../assets/css/App.css";

import Loader from "../components/Loader";

import axios from "axios";
import Template from "../components/Template";

function Home({ setPokemonDados }) {
  const [pokemon, setPokemon] = useState([]);
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
    setPokemon(filteredPokemons);
  }

  return (
    <Template>
      <Navbar Filter={PokemonFilter} />
      {loading ? (
          <Loader />
      ) : (
        <Container maxWidth="false">
          <Grid container>
            {pokemon?.map((item, index) => (
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
