import type { NextPage } from 'next'
import { PokemonList } from '../components/PokemonList'
import { MetaPokemon } from '../types';


export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/pokemons")
  const data = await res.json()
console.log(data)
  return {
    props: { pokemons: data},
  };
}

const Home: NextPage<{pokemons:MetaPokemon[]|null}> = ({pokemons}) => {
  return pokemons ? <div className='container'>
    <PokemonList pokemons={pokemons}/>
    </div>
     : <div>Loading...</div>
}

export default Home
