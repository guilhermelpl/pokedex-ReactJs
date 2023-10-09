import NavBar from "../components/Navbar"

const Pokemon = ({ pokemonDados }) => {
  return (
    <>
      <NavBar hideSearch/>
      <div>
        {pokemonDados.name}
      </div>

    </>
  )
}



export default Pokemon