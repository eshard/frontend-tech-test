import { Pokemon } from "@prisma/client";
import axios from "axios";
import { prisma } from "./prisma";

export async function setUpFirst100Pokemon() {
  const pokemons: Pokemon[] = [] as Pokemon[]
  
  for(let i=1; i<=100; i++){
    const res = await axios.get(`${process.env.API_URL}/pokemon/${i}/`);
    const pokemon = res.data[0]
    
    console.log(`Gathering info about ${pokemon.name}...`)
    pokemons.push({
      id: parseInt(pokemon.number, 10),
      name: pokemon.name,
      description: pokemon.description,
      height: pokemon.height,
      weight: pokemon.weight,
      image: pokemon.sprite,
      species: pokemon.species,
      types: pokemon.types
    } as Pokemon)
  }

  const uploaded = await prisma.pokemon.createMany({
    data: pokemons,
  });

  console.info(`Uploaded ${uploaded.count} pokemons out of the 100`);
}